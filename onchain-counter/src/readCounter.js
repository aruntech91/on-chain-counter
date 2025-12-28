import axios from "axios";

// RPC URL of your local CKB Dev node
const RPC_URL = "http://127.0.0.1:8114";

// 🔴 Replace with your wallet address
const ADDRESS = "ckb_dev_your_address_here";

async function readCounter() {
  const payload = {
    id: 1,
    jsonrpc: "2.0",
    method: "get_cells",
    params: [
      {
        script: {
          code_hash:
            "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          hash_type: "type",
          args: ADDRESS.slice(5), // remove 'ckb_dev'
        },
        script_type: "lock",
      },
      "latest",
      "0x1",
    ],
  };

  const res = await axios.post(RPC_URL, payload);

  if (!res.data.result.objects.length) {
    console.log("No counter cell found");
    return;
  }

  const cell = res.data.result.objects[0];
  const dataHex = cell.output_data;

  // Convert hex → number
  const counter = parseInt(dataHex, 16);
  console.log("🔢 Counter Value:", counter);
}

readCounter();
