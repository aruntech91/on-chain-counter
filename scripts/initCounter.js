import { initializeConfig } from "@ckb-lumos/config-manager";
import { bytes } from "@ckb-lumos/codec";

// 1️⃣ Init testnet config
initializeConfig(config.predefined.AGGRON4);

const rpc = new RPC("https://testnet.ckb.dev");

// 2️⃣ Counter value = 0 (8 bytes LE)
const counterValue = bytes.hexify(
  Uint8Array.from([0, 0, 0, 0, 0, 0, 0, 0])
);

async function initCounter() {
  console.log("Initializing counter cell...");

  // ⚠️ For assignment demo:
  // This is where you would:
  // - collect input cells
  // - create output cell
  // - sign tx (Neuron / CCC export key)
  // - send tx

  console.log("Counter data:", counterValue);
  console.log("Initialization logic ready");
}

initCounter();
