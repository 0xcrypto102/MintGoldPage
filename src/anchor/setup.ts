import { AnchorProvider, IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, Dapp } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";


// // Initialize the program interface with the IDL, program ID, and connection.
// // This setup allows us to interact with the on-chain program using the defined interface.


// // Derive a PDA for the counter account, using "counter" as the seed.
// // We'll use this to update the counter on-chain.
// export const [globalStatePDA] = PublicKey.findProgramAddressSync(
//   [Buffer.from("GLOBAL-STATE-SEED")],
//   program.programId
// );

// // Define a TypeScript type for the Counter data structure based on the IDL.
// // This ensures type safety when interacting with the "counter" account, facilitating development and maintenance.
// export type GlobalStateData = IdlAccounts<Dapp>["globalState"];