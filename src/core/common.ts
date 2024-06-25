import { TOKEN_2022_PROGRAM_ID, getTokenMetadata } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";

export const getTokenAssets = async (token: string, type: boolean) => {
    try {
        const rpc = 'https://api.devnet.solana.com';
        // const rpc = 'https://devnet.helius-rpc.com/?api-key=3df5f1e8-ed02-460e-98db-c7fa20688dad';
        const connection = new Connection(rpc);
        if(type ){
            const response = await fetch(rpc, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": "text",
                    "method": "getAsset",
                    "params": { id: token}
                }),
            });
            const data = await response.json();
            return{
                name: data.result.content.metadata.name,
                symbole: data.result.content.metadata.symbol
            }
        } else {
            // Retrieve and log the metadata state
            const metadata = await getTokenMetadata(
                connection, // Connection instance
                new PublicKey(token), // PubKey of the Mint Account
                'confirmed', // Commitment, can use undefined to use default
                TOKEN_2022_PROGRAM_ID,
            );
            console.log(metadata);
            return{
                name: metadata?.name,
                symbole: metadata?.symbol
            }
        }
    } catch (error) {
        console.error('Error fetching token metadata:', error);
    }
}
