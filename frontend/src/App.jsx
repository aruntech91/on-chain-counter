function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>On-Chain Counter</h1>

      <p>Nervos CKB Blockchain</p>
      <p>Counter stored on-chain</p>

      <h2>Counter Value: 0</h2>

      <button disabled>Increment (On-chain)</button>

      <p style={{ marginTop: "20px", color: "gray" }}>
        On-chain logic handled via CCC Playground
      </p>
    </div>
  );
}

export default App;
