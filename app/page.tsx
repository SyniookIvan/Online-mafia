import { Button } from "@/shared/components";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold">Hello it`s home page!!</h1>
        <Button>Hello i`m not Local or Online mafia</Button>
      </div>
    </div>
  );
}
