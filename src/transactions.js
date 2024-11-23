import { Keypair, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

class Transactions {
  static async sendTransaction(senderPrivateKey, receiverPublicKey, amount, client) {
    const connection = client.getConnection();

    // Decode sender's private key
    const senderKeypair = Keypair.fromSecretKey(Buffer.from(senderPrivateKey, 'base64'));
    const receiverPubKey = new PublicKey(receiverPublicKey);

    // Create transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: senderKeypair.publicKey,
        toPubkey: receiverPubKey,
        lamports: amount * 1e9, // Convert SOL to lamports
      })
    );

    // Sign and send transaction
    const signature = await connection.sendTransaction(transaction, [senderKeypair]);
    await connection.confirmTransaction(signature, 'confirmed');
    return signature;
  }

  static async getTransactionDetails(txSignature, client) {
    return await client.getTransaction(txSignature);
  }
}

export default Transactions;
