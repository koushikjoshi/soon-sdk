import SOONClient from './src/client.js';
import { generateKeypair, getBalance } from './src/accounts.js';
import Transactions from './src/transactions.js';

(async () => {
  const client = new SOONClient();

  // Generate a new wallet
  const wallet = generateKeypair();
  console.log('Generated Wallet:', wallet);

  // Get account balance (requires SOON testnet tokens)
  const balance = await getBalance(wallet.publicKey, client);
  console.log('Balance:', balance, 'SOL');

  // Query the latest block slot
  const latestBlock = await client.getLatestBlock();
  console.log('Latest Block Slot:', latestBlock);

  // Uncomment this after funding the wallet with SOON testnet tokens
  // const txSignature = await Transactions.sendTransaction(
  //   wallet.privateKey,
  //   'receiver_public_key_here',
  //   0.01,
  //   client
  // );
  // console.log('Transaction Signature:', txSignature);
})();
