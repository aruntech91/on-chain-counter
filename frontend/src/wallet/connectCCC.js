export async function connectWallet() {
  console.log("CONNECT WALLET CALLED");

  if (!window.ckb) {
    alert("CCC Wallet not installed");
    return null;
  }

  try {
    const accounts = await window.ckb.request({
      method: "ckb_requestAccounts",
    });

    console.log("CCC Accounts:", accounts);
    return accounts[0];
  } catch (err) {
    console.error("Wallet connection failed", err);
    throw err;
  }
}
