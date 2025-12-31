export async function incrementCounterOnChain(address) {
  const res = await fetch("http://localhost:3001/increment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  if (!res.ok) {
    throw new Error("Increment failed");
  }

  return res.json();
}
