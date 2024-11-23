import { PublicKey } from '@solana/web3.js';

class Contracts {
  static async callProgram(programId, instructionData, client) {
    const programPubKey = new PublicKey(programId);
    const connection = client.getConnection();

    // Example logic: Modify based on your program's requirements
    const response = await connection.getAccountInfo(programPubKey, 'confirmed');
    return response ? response.data : null;
  }
}

export default Contracts;
