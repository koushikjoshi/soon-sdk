import { Connection } from '@solana/web3.js';

class SOONClient {
  constructor() {
    this.connection = new Connection('https://rpc.devnet.soo.network/rpc', 'confirmed');
  }

  async getLatestBlock() {
    return await this.connection.getSlot('confirmed');
  }

  async getTransaction(txSignature) {
    return await this.connection.getTransaction(txSignature, {
      maxSupportedTransactionVersion: 0
    });
  }

  getConnection() {
    return this.connection;
  }
}

export default SOONClient;
