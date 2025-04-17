export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  return <h1>Product details {params.id}</h1>;
}
