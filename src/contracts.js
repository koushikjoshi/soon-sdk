import { PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';

class Contracts {

  // The callProgram method currently retrieves the account information associated with a program by its public key
  static async callProgram(programId, client) {
    const programPubKey = new PublicKey(programId);
    const connection = client.getConnection();


    const response = await connection.getAccountInfo(programPubKey, 'confirmed');
    return response ? response.data : null;
  }
}

export default Contracts;
