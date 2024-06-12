import { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, SystemProgram, clusterApiUrl } from "@solana/web3.js";
import { IDL } from "../anchor/idl";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { TOKEN_2022_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import * as anchor from "@coral-xyz/anchor";

export default function WhiteListTokens() {
  const { connection } = useConnection();
  const [whitelistTokenDatas, setWhitelistTokenDatas] = useState<any>([]);
  const { publicKey, wallet } = useWallet();
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [mintAmount, setMintAmount] = useState<number>(1);

  const getProvider = () => {
    if (!wallet) {
        return null;
    }
    /*Create the provider and return it to the caller*/
    /*network set to localnet for testing purposes*/
    const provider = new AnchorProvider(
      connection, wallet.adapter, {"preflightCommitment": "processed"},
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
      const tokenData = whitelistTokenDatas[selectedToken];

      const mintTokenAddress = new PublicKey("ALxY6ofrJBx1RtCbhgoe8nLWWo6L9Y2ow6BkXxH8LXaj");

      const [authority, _1] = await PublicKey.findProgramAddress(
        [
          Buffer.from("MINT-AUTHORITY")
        ],
        program.programId
      );

      const [globalState,_2] = PublicKey.findProgramAddressSync(
        [Buffer.from("GLOBAL-STATE-SEED")],
        program.programId
      );

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

      const [extraMetasAccount, _3] = PublicKey.findProgramAddressSync(
        [
            Buffer.from("extra-account-metas"),
            mintTokenAddress.toBuffer(),
        ],
        program.programId
      );
  
  
      const mintGoldAmount = mintAmount * 1000000000;

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
  

  useEffect(() => {
    const getData = async() => {
        // Fetch initial account data
        const provider = getProvider();

        if(provider == null) {
            return
        }
        const program = new Program(IDL, provider);

        const [globalStatePDA,_1] = PublicKey.findProgramAddressSync(
            [Buffer.from("GLOBAL-STATE-SEED")],
            program.programId
        );

        const data = await program.account.globalState.fetch(globalStatePDA);
        let temp = [];
        for(let i = 0; i<data.whitelistTokens.length;i++) {
            const whitelistToken = data.whitelistTokens[i];
            const tokenData = await program.account.whitelistToken.fetch(whitelistToken);
            temp.push({
                mint: tokenData.mint.toString(),
                amount: Number(tokenData.amount / tokenData.div),
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
        return whitelistTokenDatas.map((data: any, index: number) => (
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
            <input 
                type="number" 
                value={mintAmount} 
                onChange={(e) => setMintAmount(Number(e.target.value))} 
                min="1"
            />
            <button onClick={handleMint}>Mint</button>
        </div>
        <div>
            {whitelistTokenDatas.map((data: any, index: number) => (
                <div key={index}>
                    <div>Mint Address: {data.mint}</div>
                    <div>Amount: {data.amount}</div>
                    <div>Type: {data.type ? "SPL TOKEN" : "TOKEN-2022"}</div>
                </div>
            ))}
        </div>
    </>
  )
}
