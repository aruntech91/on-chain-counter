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
    <div className="flex flex-col items-center mt-32 text-white">
      <h2 className="font-bold text-2xl">On-Chain Counter</h2>
      <button className="mt-12 border rounded-2xl p-2 bg-blue-700 text-white font-semibold" onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
