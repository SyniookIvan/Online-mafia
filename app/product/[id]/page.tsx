export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex  justify-center">
      <h1>
        <b>Hello</b> it`s product page №{params.id}
      </h1>
    </div>
  );
}
