import "server-only";

export async function getProductDetails(products: string) {
  const res = await fetch(`http://localhost:5000/${products}`).catch(() => {
    throw new Error("Failed to fetch");
  });

  return res.json();
}
