export async function connectWallet() {
  console.log("CONNECT WALLET CALLED");

  // ✅ HARD BLOCK MOBILE
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    console.warn("Mobile device detected — CCC not supported");
    return null;
  }

  // ✅ CHECK CCC WALLET (DESKTOP ONLY)
  if (!window.ckb || !window.ckb.request) {
    alert(
      "CCC Wallet not detected.\n\n" +
      "Please install CCC Wallet extension on Desktop Chrome or Edge."
    );
    return null;
  }

  try {
    const accounts = await window.ckb.request({
      method: "ckb_requestAccounts",
    });

    console.log("CCC Accounts:", accounts);
    return accounts[0];
  } catch (error) {
    console.error("Wallet connection error:", error);
    return null;
  }
}
