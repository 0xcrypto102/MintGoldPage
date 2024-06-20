export const getTokenAssets = async (token: string) => {
    try {
        const response = await fetch('https://devnet.helius-rpc.com/?api-key={}', {
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
    } catch (error) {
        console.error('Error fetching token metadata:', error);
    }

}
