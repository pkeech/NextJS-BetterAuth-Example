// IMPORTS
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// RENDER PAGE
export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
        <Image
          src="/logo.png"
          alt="NextJS + Better Auth Example"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-[3rem]">
          NextJS + <span className="text-primary">Better Auth</span> Example
        </h1>
        <Link href="/home">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 w-[400px] hover:cursor-pointer"
          >
            Continue ...
          </Button>
        </Link>
      </div>
    </main>
  );
}
