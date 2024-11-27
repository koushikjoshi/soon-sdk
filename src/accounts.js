import { Keypair, PublicKey } from '@solana/web3.js';

export const generateKeypair = () => {
  const keypair = Keypair.generate();
  return {
    publicKey: keypair.publicKey.toBase58(),
    privateKey: Buffer.from(keypair.secretKey).toString('base64'),
  };
};

export const getBalance = async (publicKey, client) => {
  const pubKey = new PublicKey(publicKey);
  const balance = await client.getConnection().getBalance(pubKey);
  return balance / 1e9; // Convert lamports to SOL
};

// Search for associated token accounts for a given wallet address
export const getTokenAccountsByOwner = async (address, programId) => {
  const publicKey = new PublicKey(address);
  const tokenAccounts = await this.connection.getParsedTokenAccountsByOwner(publicKey, { programId });
  return tokenAccounts;
}

// Get contract details by address
export const getContractDetails = async (contractAddress) => {
  const publicKey = new PublicKey(contractAddress);
  const accountInfo = await this.connection.getAccountInfo(publicKey);
  return accountInfo;
}
