import { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { IDL } from "../anchor/idl";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { TOKEN_2022_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import * as anchor from "@coral-xyz/anchor";

type WhitelistTokenData = {
  mint: string;
  amount: number;
  rate: number,
  type: boolean;
};

export default function WhiteListTokens() {
  const { connection } = useConnection();
  const [whitelistTokenDatas, setWhitelistTokenDatas] = useState<WhitelistTokenData[]>([]);
  const { publicKey, wallet } = useWallet();
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [mintAmount, setMintAmount] = useState<number>(1);

  const [tokenAddress, setTokenAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [div, setDiv] = useState<number>(1);
  const [tokenType, setTokenType] = useState<boolean>(true);
  const [editable, setEditAble] = useState<boolean>(false);

  const getProvider = () => {
    if (!wallet) {
        return null;
    }
    /*Create the provider and return it to the caller*/
    /*network set to localnet for testing purposes*/
    const provider = new AnchorProvider(
      connection, wallet.adapter as unknown as anchor.Wallet, {"preflightCommitment": "processed"},
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

      if(!publicKey) {
        return
      }
      const program = new Program(IDL, provider);
      const tokenData = whitelistTokenDatas[parseInt(selectedToken)];

      const mintTokenAddress = new PublicKey("37AymJicLsrdRBXZSxooU3ogQJeCM7z9UCPMq3k37QXr");

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
        owner: publicKey,
      });

      const burnMint = new PublicKey(tokenData.mint);

      let burnMintTokenAccount = null;

      if (tokenData.type) {
        burnMintTokenAccount = await getAssociatedTokenAddress(
            burnMint,
            publicKey
        );
      } else {
        burnMintTokenAccount = getAssociatedTokenAddressSync(
            burnMint,
            publicKey,
            false,
            TOKEN_2022_PROGRAM_ID,
            ASSOCIATED_TOKEN_PROGRAM_ID
        );
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

      const info = await connection.getTokenAccountBalance(burnMintTokenAccount);
      console.log(info);
  
      const mintGoldAmount = mintAmount * Math.pow(10,info.value.decimals);

      if (tokenData.type) {
        const tx = await program.rpc.mintTokenWithBurn(
            new anchor.BN(mintGoldAmount), {
              accounts: {
                payer: publicKey,
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
        console.log(tx);
      } else {
        const tx = await program.rpc.mintTokenWithBurn2022(
            new anchor.BN(mintGoldAmount), {
              accounts: {
                payer: publicKey,
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
        console.log(tx);
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

      if(!publicKey) {
        return
      }

      if(amount<=0) {
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
        new anchor.BN(amount),
        new anchor.BN(div),
        tokenType, 
        {
          accounts : {
            authority: publicKey,
            globalState,
            whitelistToken,
            systemProgram: SystemProgram.programId
          }
        }
      );
      console.log("tx->", tx);
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

      if(!publicKey) {
        return
      }

      if(amount<=0) {
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
      
      const tx = await program.rpc.editWhitelistToken(
        mint,
        new anchor.BN(amount),
        new anchor.BN(div),
        tokenType, 
        {
          accounts : {
            authority: publicKey,
            globalState,
            whitelistToken,
            systemProgram: SystemProgram.programId
          }
        }
      );
      console.log("tx->", tx);

    } catch (error) {
      console.log(error);
    }
  }

  const editToken = async(index: number) => {
    const token = whitelistTokenDatas[index];
    setTokenAddress(token.mint);
    setAmount(Number(token.amount) * Number(token.rate));
    setDiv(token.rate);
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

      if(!publicKey) {
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
            authority: publicKey,
            globalState,
            whitelistToken,
            systemProgram: SystemProgram.programId
          }
        }
      );
      console.log("tx->", tx);
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
            temp.push({
                mint: tokenData.mint.toString(),
                amount: Number(tokenData.amount / tokenData.div),
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
                {data.mint} - {data.type ? "SPL TOKEN" : "TOKEN-2022"}
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
          Mint: <input type="text" placeholder="Token Address" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
          Amount:<input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
          Rate:<input type="number" placeholder="div" value={div} onChange={(e) => setDiv(Number(e.target.value))}/>
          Type: <select onChange={(e) => setTokenType(e.target.value === "true")} value={tokenType.toString()} >
            <option value="true">SPL Token</option>
            <option value="false">Token-2022</option>
          </select>
          <button onClick={() => {!editable?addWhiteListToken():editWhiteListToken()}}>{!editable? "Add":"Update"}</button>
          <h4>Burn Amount: Amount / Rate (eg: 0.5 = 1 /2, 5 = 5 / 1)</h4>
        </div>
        <div>
          {whitelistTokenDatas.map((data: WhitelistTokenData, index: number) => (
            <div key={index}>
              <p></p>
              <div>Mint Address: {data.mint}</div>
              <div>Amount: {data.amount}</div>
              <div>Type: {data.type ? "SPL TOKEN" : "TOKEN-2022"}</div>
              <button onClick={() => editToken(index)}>Edit</button>
              <button onClick={() => deleteToken(index)}>Delete</button>
              <p></p>
            </div>
          ))}
        </div>
    </>
  )
}
