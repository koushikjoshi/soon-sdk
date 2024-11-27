# Solana SOON SDK

A lightweight JavaScript SDK for interacting with the SOON network on Solana. This package provides a set of tools for blockchain transactions, account management, program interactions, and balance queries using the Solana Web3 API. It simplifies the integration of Solana-based functionality into your JavaScript/TypeScript applications.

## Features

- **Wallet Generation**: Generate Solana keypairs (public and private keys).
- **Balance Queries**: Retrieve account balances in SOL.
- **Transaction Sending**: Send transactions on the Solana blockchain.
- **Program Interaction**: Call programs (smart contracts) on the Solana network.
- **Solana RPC Client**: Access and interact with the SOON network via a Solana RPC connection.

## Installation

You can install the `solana-soon-sdk` package via npm:

```bash
npm install solana-soon-sdk
```

## Importing the SDK

```bash
import { SOONClient, generateKeypair, getBalance, Transactions, Contracts } from 'solana-soon-sdk';
```

## Using the SDK

### Create a Client

```bash
const client = new SOONClient();
```

### Generate a New Wallet Keypair

```bash
const wallet = generateKeypair();
console.log('Generated Wallet:', wallet);
```

### Generate Contract Details

```bash
const contractDetails = await getContractDetails('YourContractAddress');
console.log('Contract Details:', contractDetails);

```

### Generate Token Accounts by Owner

```bash
const tokenAccounts = await getTokenAccountsByOwner('YourWalletAddress', 'YourTokenProgramId');
console.log('Token Accounts:', tokenAccounts);

```

### Get Balance of an Account

```bash
const balance = await getBalance('iRFHRbG1kbcLs7fYhagzNNpu8yJtcv8tj16Rp3XkJ9F', client);
console.log('Balance:', balance, 'SOL');
```

### Send a Transaction

```bash
const senderPrivateKey = 'your-private-key';
const receiverPublicKey = 'receiver-public-key';
const txSignature = await Transactions.sendTransaction(
  senderPrivateKey,
  receiverPublicKey,
  0.01, // Amount in SOL
  client
);
console.log('Transaction Signature:', txSignature);
```

### Call a Solana Program

```bash
const balance = await getBalance('iRFHRbG1kbcLs7fYhagzNNpu8yJtcv8tj16Rp3XkJ9F', client);
const programId = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';  // Example program ID
const programData = await Contracts.callProgram(programId, client);
console.log('Program Data:', programData);
```

## Methods

- **SOONClient**
- **getConnection():** Returns the connection to the Solana network.
- **getLatestBlock():** Returns the latest confirmed block slot.
- **getTransaction(txSignature):** Returns details of a transaction by its signature.
- **generateKeypair():**Generates a new wallet keypair and returns the public and private keys.

- **getBalance(publicKey, client):** Returns the balance (in SOL) of the provided Solana account.

- **Transactions.sendTransaction(senderPrivateKey, receiverPublicKey, amount, client):** Sends a transaction from the sender's account to the receiver's account. Returns the transaction signature.

- **Contracts.callProgram(programId, client)**:Calls a Solana program (smart contract) and returns its account data.

## Requirements

- **Solana RPC Endpoint:** This package is designed to work with the SOON network's Solana RPC endpoint. You may need access to the SOON _devnet_. ***https://rpc.devnet.soo.network/rpc***
- **Funding:** Ensure your wallet has enough SOL to perform transactions (for testnet use, you can obtain test SOL from faucet services).
