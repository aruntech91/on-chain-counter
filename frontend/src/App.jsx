import { useState } from "react";
import { connectWallet } from "./wallet/connectCCC";
import { readCounter } from "./blockchain/readCounter";
import { incrementCounterOnChain } from "./blockchain/onChainIncrement";
import "./index.css";
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);


function App() {
  const [address, setAddress] = useState(null);
  const [count, setCount] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [incrementing, setIncrementing] = useState(false);

  const handleConnect = async () => {
    setConnecting(true);
    try {
      const addr = await connectWallet();
      if (!addr) return;

      setAddress(addr);
      const value = await readCounter();
      setCount(value);
      setInitialized(true);
    } catch (err) {
      alert("Wallet connection failed");
    } finally {
      setConnecting(false);
    }
  };

  const handleIncrement = async () => {
    if (!address) {
      alert("Connect wallet first");
      return;
    }

    setIncrementing(true);
    try {
      await incrementCounterOnChain(address);
      const updatedValue = await readCounter();
      setCount(updatedValue);
      alert("Counter incremented on-chain!");
    } catch (err) {
      alert("Increment failed");
    } finally {
      setIncrementing(false);
    }
  };

  return (
    
    <div className="p-9 bg-black h-200 ">
      <h1 className=" font-bold text-2xl text-red-700 ">On-Chain Counter (CKB)</h1>

      <hr className="text-white" /><hr />

     <div className="mt-26 text-center">
      {!address ? (
      <button
  disabled={isMobile}
  className={`${
    isMobile
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  Connect CCC Wallet
</button>

      ) : (
        <span className="rounded-2xl p-2 border-2 text-green-800">
          <strong>Wallet Connected:</strong>
          
          <small className="text-xl font-semibold text-white"> {address}</small>
        </span>
      )}
<hr className="text-white mt-14 md:ml-60 ml-10 md:mr-60 mr-10" /><hr className="text-white md:ml-60 ml-10 md:mr-60 mr-10" />

      <h2 className="text-white mt-9 font-semibold text-4xl">Counter: {count}</h2>

      {address && initialized && (
        <button className="border-amber-50 border-2 rounded-xl p-1 bg-green-600 hover:bg-green-800 font-semibold mt-5 text-black" onClick={handleIncrement} disabled={incrementing}>
          {incrementing ? "Processing..." : "Increment Counter"}
        </button>
      )}
      </div>
    </div>
  );
}

export default App;
