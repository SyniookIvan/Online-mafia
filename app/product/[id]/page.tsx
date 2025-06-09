import { Button } from "@/shared/components";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolverParams = await params;
  const id = Number(resolverParams.id);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold">
          Hello, it&apos;s product page №{id}
        </h1>
        <Button variant="outline">Тицьни мене</Button>
      </div>
    </div>
  );
}
