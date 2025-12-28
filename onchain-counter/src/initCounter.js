import { RPC } from "@ckb-lumos/rpc";
import { initializeConfig, predefined } from "@ckb-lumos/config-manager";

// Initialize Lumos
initializeConfig(predefined.AGGRON4);

// RPC to local node
const rpc = new RPC("http://127.0.0.1:8114");

// 🔴 Paste your lock script here
const lockScript = {
  code_hash: "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
  hash_type: "type",
  args: "0xc2a89ffbe4cd11dea5f3d3660a4fa73961add6d6"  // replace with your Neuron lock args
};

async function createCounterCell() {
  const output = {
    cell_output: {
      capacity: "0x174876e800", // 100 CKBytes
      lock: lockScript,
      type: null
    },
    data: "0x00000000" // initial counter = 0
  };

  const tx = {
    version: "0x0",
    cellDeps: [],
    headerDeps: [],
    inputs: [],
    outputs: [output],
    outputsData: ["0x00000000"],
    witnesses: []
  };

  try {
    const txHash = await rpc.send_transaction(tx);
    console.log("✅ Counter Cell Created Successfully!");
    console.log("TX HASH:", txHash);
  } catch (err) {
    console.error("❌ Failed:", err);
  }
}

createCounterCell();
