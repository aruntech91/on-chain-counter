import { initializeConfig, config, helpers, RPC } from "@ckb-lumos/lumos";
import { bytes } from "@ckb-lumos/codec";
import { readFileSync } from "fs";

// 1️⃣ Initialize CKB testnet
initializeConfig(config.predefined.AGGRON4);
const rpc = new RPC("https://testnet.ckb.dev");

// 2️⃣ User private key (for demo only)
// In production, use CCC wallet signature
const PRIVATE_KEY = readFileSync("privateKey.txt", "utf-8").trim();

// 3️⃣ Helper to encode counter
function encodeCounter(counter) {
  return bytes.hexify(Uint8Array.from([
    counter & 0xff,
    (counter >> 8) & 0xff,
    (counter >> 16) & 0xff,
    (counter >> 24) & 0xff,
    0,0,0,0
  ]));
}

// 4️⃣ Increment function
async function incrementCounter() {
  // 1. Fetch existing counter cell from indexer / testnet
  // For simplicity, simulate fetching previous counter
  let counterValue = 0; // TODO: Replace with real cell query
  counterValue += 1;

  const counterHex = encodeCounter(counterValue);

  console.log("Counter incremented:", counterValue);
  console.log("Counter hex for on-chain:", counterHex);

  // 2. Build transaction (simplified demo)
  const txSkeleton = helpers.TransactionSkeleton({ cellProvider: null });

  // TODO: Collect live inputs & create output cell with counterHex
  // This part uses Lumos indexer, collectors, and scripts

  console.log("Transaction ready to be signed and sent (demo mode).");

  // 3. In production: Sign with CCC wallet via frontend
  // rpc.sendTransaction(signedTx);

  return counterValue;
}

incrementCounter()
  .then(val => console.log("On-chain counter demo complete:", val))
  .catch(err => console.error(err));
