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
