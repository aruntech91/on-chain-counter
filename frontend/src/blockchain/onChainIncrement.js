const API = "https://on-chain-counter-1.onrender.com";

export async function incrementCounterOnChain(address) {
  const res = await fetch(`${API}/increment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address }),
  });

  return await res.json();
}
