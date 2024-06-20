import { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { IDL } from "../anchor/idl";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { 
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID, 
} from '@solana/spl-token';
import * as anchor from "@coral-xyz/anchor";
import { getTokenAssets } from "../core/common";
import { TOKEN_2022_PROGRAM_ID, getAssociatedTokenAddress, getAssociatedTokenAddressSync } from "@solana/spl-token";

type WhitelistTokenData = {
  name: string | undefined,
  mint: string;
  amount: number;
  rate: number,
  type: boolean;
};


export default function WhiteListTokens() {
  const { connection } = useConnection();
  const [whitelistTokenDatas, setWhitelistTokenDatas] = useState<WhitelistTokenData[]>([]);
  const userWallet = useWallet();
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [mintAmount, setMintAmount] = useState<number>(1);
  const [tx, setTx] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [tokenAddress, setTokenAddress] = useState<string>("");
  const [div, setDiv] = useState<number>(1);
  const [tokenType, setTokenType] = useState<boolean>(true);
  const [editable, setEditAble] = useState<boolean>(false);

  const owner = "3dG6y22sC7rLRQSQX3qiAnZa9jkeJtdAEBC8ip1KzukH";
 

  const getProvider = () => {
    if (!userWallet.wallet) {
        return null;
    }
    /*Create the provider and return it to the caller*/
    /*network set to localnet for testing purposes*/
    const provider = new AnchorProvider(
      connection, userWallet.wallet.adapter as unknown as anchor.Wallet, {"preflightCommitment": "processed"},
    );
    return provider;
  }

  const associatedAddress = ({
    mint,
    owner,
  }: {
    mint: PublicKey;
    owner: PublicKey;
  }): PublicKey => {
    return PublicKey.findProgramAddressSync(
      [owner.toBuffer(), TOKEN_2022_PROGRAM_ID.toBuffer(), mint.toBuffer()],
      ASSOCIATED_TOKEN_PROGRAM_ID
    )[0];
  }
  
  const handleMint = async () => {
    try {
      const provider = getProvider();
      if (!provider) {
        alert("Provider not found");
        return;
      }

      if(!userWallet.publicKey) {
        return
      }

     
      const program = new Program(IDL, provider);
      const tokenData = whitelistTokenDatas[parseInt(selectedToken)];

      const mintTokenAddress = new PublicKey("3XscxwbtfbhmKq6AJzpUiz9LbEwCE6zzCsHrr69jQs6L");

      const [authority, authorityBump] = await PublicKey.findProgramAddress(
        [
          Buffer.from("MINT-AUTHORITY")
        ],
        program.programId
      );
      console.log(authorityBump);

      const [globalState,globalStateBump] = PublicKey.findProgramAddressSync(
        [Buffer.from("GLOBAL-STATE-SEED")],
        program.programId
      );
      console.log(globalStateBump);

      const mintTokenAccount = associatedAddress({
        mint: mintTokenAddress,
        owner: userWallet.publicKey,
      });

      if(tokenData == undefined){
        setError("Please select the burn mint token");
        return
      }
      
      const burnMint = new PublicKey(tokenData.mint);
      let burnMintTokenAccount = null;
    
      if (tokenData.type) {
        burnMintTokenAccount = await getAssociatedTokenAddress(
            burnMint,
            userWallet.publicKey
        );
        console.log("burnMintTokenAccount->", burnMintTokenAccount.toString());
        console.log("burn token->",burnMint.toString());
      } else {
        burnMintTokenAccount = getAssociatedTokenAddressSync(
            burnMint,
            userWallet.publicKey,
            false,
            TOKEN_2022_PROGRAM_ID,
            ASSOCIATED_TOKEN_PROGRAM_ID
        );
        console.log("burnMintTokenAccount->", burnMintTokenAccount.toString());
        console.log("burn token->",burnMint.toString());
      }
  
      const [whitelistToken, whitelistTokenBump] = await PublicKey.findProgramAddress(
        [
          Buffer.from("WHITELIST-STATE-SEED"),
          burnMint.toBuffer()
        ],
        program.programId
      );
      console.log(whitelistTokenBump);


      const [extraMetasAccount, extraMetasAccountBump] = PublicKey.findProgramAddressSync(
        [
            Buffer.from("extra-account-metas"),
            mintTokenAddress.toBuffer(),
        ],
        program.programId
      );
      console.log(extraMetasAccountBump);

      const tokenAccountInfo = await provider.connection.getAccountInfo(burnMintTokenAccount);

      if(!tokenAccountInfo){
        setError("The burn token account is not existed.");
        return
      }

      const info = await connection.getTokenAccountBalance(burnMintTokenAccount);
      console.log(info);
      if (info.value.uiAmount == null) {
        setError("No balance found");
        return
      }

      const mintGoldAmount = mintAmount * Math.pow(10,info.value.decimals);

      if(mintGoldAmount == 0) {
        setError("Burn Amount should be bigger than 0");
        return
      }

      if(Number(info.value.uiAmountString) < mintAmount) {
        setError(`Burn Token Amount is not enough, your current balance is ${Number(info.value.uiAmountString)}`);
        return
      }

      if (tokenData.type) {
        const tx = await program.rpc.mintTokenWithBurn(
            new anchor.BN(mintGoldAmount), {
              accounts: {
                payer: userWallet.publicKey,
                authority,
                mint: mintTokenAddress,
                globalState,
                mintTokenAccount,
                extraMetasAccount: extraMetasAccount,
                burnMint,
                burnMintTokenAccount,
                whitelistToken,
                systemProgram: SystemProgram.programId,
                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                token2022Program: TOKEN_2022_PROGRAM_ID,
                tokenProgram: TOKEN_PROGRAM_ID
              },
            }
        );
        setTx(`https://solscan.io/tx/${tx}?cluster=devnet`);
      } else {
        const tx = await program.rpc.mintTokenWithBurn2022(
            new anchor.BN(mintGoldAmount), {
              accounts: {
                payer: userWallet.publicKey,
                authority,
                mint: mintTokenAddress,
                globalState,
                mintTokenAccount,
                extraMetasAccount: extraMetasAccount,
                burnMint,
                burnMintTokenAccount,
                whitelistToken,
                systemProgram: SystemProgram.programId,
                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                token2022Program: TOKEN_2022_PROGRAM_ID,
                tokenProgram: TOKEN_PROGRAM_ID
              },
            }
        );
        setTx(`https://solscan.io/tx/${tx}?cluster=devnet`);
      }
    } catch(e) {
        console.log(e);
    }
  }

  const addWhiteListToken = async() => {
    // Implement the logic to add a token to the whitelist
    try {
      const provider = getProvider();
      if (!provider) {
        alert("Provider not found");
        return;
      }

      if(!userWallet.publicKey) {
        return
      }
  
      if(div<=0) {
        return
      }


      const mint = new PublicKey(tokenAddress);

      const program = new Program(IDL, provider);
      const [globalState,globalStateBump] = PublicKey.findProgramAddressSync(
        [Buffer.from("GLOBAL-STATE-SEED")],
        program.programId
      );
      console.log(globalStateBump);
      const [whitelistToken, whitelistTokenBump] = await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("WHITELIST-STATE-SEED"),
          mint.toBuffer()
        ],
        program.programId
      );
      console.log(whitelistTokenBump);
  
      const tx = await program.rpc.addWhitelistToken(
        mint,
        new anchor.BN(div * 10),
        new anchor.BN(10),
        tokenType, 
        {
          accounts : {
            authority: userWallet.publicKey,
            globalState,
            whitelistToken,
            systemProgram: SystemProgram.programId
          }
        }
      );
      setTx(`https://solscan.io/tx/${tx}?cluster=devnet`);
    } catch (error) {
      console.log(error)
    }
  }

  const editWhiteListToken = async() => {
    try {
      const provider = getProvider();
      if (!provider) {
        alert("Provider not found");
        return;
      }

      if(!userWallet.publicKey) {
        return
      }
  
      if(div<=0) {
        return
      }
      const mint = new PublicKey(tokenAddress);

      const program = new Program(IDL, provider);
      const [globalState,globalStateBump] = PublicKey.findProgramAddressSync(
        [Buffer.from("GLOBAL-STATE-SEED")],
        program.programId
      );
      console.log(globalStateBump);
      const [whitelistToken, whitelistTokenBump] = await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("WHITELIST-STATE-SEED"),
          mint.toBuffer()
        ],
        program.programId
      );
      console.log(whitelistTokenBump);
      console.log("div->", div);
      
      const tx = await program.rpc.editWhitelistToken(
        mint,
        new anchor.BN(div * 10),
        new anchor.BN(10),
        tokenType, 
        {
          accounts : {
            authority: userWallet.publicKey,
            globalState,
            whitelistToken,
            systemProgram: SystemProgram.programId
          }
        }
      );
      setTx(`https://solscan.io/tx/${tx}?cluster=devnet`);
    } catch (error) {
      console.log(error);
    }
  }

  const editToken = async(index: number) => {
    const token = whitelistTokenDatas[index];
    setTokenAddress(token.mint);
    setDiv(token.amount / token.rate);
    setTokenType(token.type);
    setEditAble(true);
    // Additional logic to handle the edit action
  
  }

  const deleteToken = async(index: number) => {
    // Implement the logic to add a token to the whitelist
    try {
      const provider = getProvider();
      if (!provider) {
        alert("Provider not found");
        return;
      }

      if(!userWallet.publicKey) {
        return
      }
      
      const tokenData = whitelistTokenDatas[index];

      console.log(tokenData);
      const mint = new PublicKey(tokenData.mint);

      const program = new Program(IDL, provider);
      const [globalState,globalStateBump] = PublicKey.findProgramAddressSync(
        [Buffer.from("GLOBAL-STATE-SEED")],
        program.programId
      );
      console.log(globalStateBump);
      const [whitelistToken, whitelistTokenBump] = await anchor.web3.PublicKey.findProgramAddress(
        [
          Buffer.from("WHITELIST-STATE-SEED"),
          mint.toBuffer()
        ],
        program.programId
      );
      console.log(whitelistTokenBump);
  
      const tx = await program.rpc.deleteWhitelistToken(
        mint,
        {
          accounts : {
            authority: userWallet.publicKey,
            globalState,
            whitelistToken,
            systemProgram: SystemProgram.programId
          }
        }
      );
      setTx(`https://solscan.io/tx/${tx}?cluster=devnet`);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getData = async() => {
        // Fetch initial account data
        const provider = getProvider();

        if(provider == null) {
            return
        }
        const program = new Program(IDL, provider);
        const [globalStatePDA,globalStatePDABump] = PublicKey.findProgramAddressSync(
            [Buffer.from("GLOBAL-STATE-SEED")],
            program.programId
        );
        console.log(globalStatePDABump);

        const data = await program.account.globalState.fetch(globalStatePDA);
        const temp: WhitelistTokenData[] = [];
 

        for(let i = 0; i<data.whitelistTokens.length;i++) {
            const whitelistToken = data.whitelistTokens[i];
            const tokenData = await program.account.whitelistToken.fetch(whitelistToken);

            const mintPubkey = tokenData.mint.toString();
            const tokenAssets = await getTokenAssets(mintPubkey);
            temp.push({
                name: tokenAssets?.name,
                mint: tokenData.mint.toString(),
                amount: Number(tokenData.amount),
                rate: Number(tokenData.div),
                type: tokenData.tokenType
            })
        }
        setWhitelistTokenDatas(temp);
    }
   
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTokens = () => {
    if (whitelistTokenDatas.length > 0) {
        return whitelistTokenDatas.map((data: WhitelistTokenData, index: number) => (
            <option key={index} value={index}>
                {data.name? data.name: data.mint} - {data.type ? "SPL TOKEN" : "TOKEN-2022"}
            </option>
        ));
    }
    return <option>No tokens found</option>;
  }

  return (
    <>
         <div>
            <select onChange={(e) => setSelectedToken(e.target.value)} value={selectedToken}>
                <option value="" disabled>Select a token</option>
                {renderTokens()}
            </select>
            Burn Amount: <input 
                type="number" 
                value={mintAmount} 
                onChange={(e) => setMintAmount(Number(e.target.value))} 
                min="1"
            />
            <button onClick={handleMint}>Mint</button>
        </div>
        <div>
          <p></p>
          {owner == userWallet.publicKey?.toString() && <div>
          Mint: <input type="text" placeholder="Token Address" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
          Rate:<input type="number" placeholder="div" value={div} min={0} onChange={(e) => setDiv(Number(e.target.value))} step={0.1}/>
          Type: <select onChange={(e) => setTokenType(e.target.value === "true")} value={tokenType.toString()} >
            <option value="true">SPL Token</option>
            <option value="false">Token-2022</option>
          </select>
          <button onClick={() => {!editable?addWhiteListToken():editWhiteListToken()}}>{!editable? "Add":"Update"}</button>
          </div>}
        </div>
        {tx !="" && <div>Confirm Transaction: <a href={tx} target="_blink">{tx}</a></div>}
        {error !="" && <div style={{"color":"red"}}>Error Message: {error}</div>}
        <div>
          {whitelistTokenDatas.map((data: WhitelistTokenData, index: number) => (
            <div key={index}>
              <p></p>
              <div>Mint Address: {data.name?data.name:data.mint}</div>
              <div>Rate: {data.amount / data.rate}</div>
              <div>Type: {data.type ? "SPL TOKEN" : "TOKEN-2022"}</div>
              {
                owner == userWallet.publicKey?.toString() 
                && 
                <div>
                  <button onClick={() => editToken(index)}>Edit</button>
                  <button onClick={() => deleteToken(index)}>Delete</button>
                </div>
              }
              <p></p>
            </div>
          ))}
        </div>
    </>
  )
}

