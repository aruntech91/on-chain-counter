function App() {
  const connectWallet = async () => {
    try {
      if (!window.ccc) {
        alert("CCC Wallet not found. Please install CCC / Neuron wallet.");
        return;
      }

      const accounts = await window.ccc.request({
        method: "ccc_requestAccounts",
      });

      alert("Connected wallet: " + accounts[0]);
    } catch (err) {
      console.error(err);
      alert("Wallet connection failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>On-Chain Counter</h2>
      <button onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
