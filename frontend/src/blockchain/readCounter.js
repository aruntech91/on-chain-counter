const API = "https://on-chain-counter-1.onrender.com";

export async function readCounter() {
  const res = await fetch(`${API}/read`);
  const data = await res.json();
  return data.counter;
}
