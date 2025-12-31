export async function readCounter() {
  const res = await fetch("http://localhost:3001/read");
  const data = await res.json();
  return Number(data.counter);
}
