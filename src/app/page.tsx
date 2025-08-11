// IMPORTS
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// RENDER PAGE
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#000000] to-[#3A2152] text-white">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
        <Image
          src="/logo.png"
          alt="NextJS + Better Auth Example"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-[3rem]">
          NextJS + <span className="text-[#582688]">Better Auth</span> Example
        </h1>
        <Link href="/login">
          <Button
            size="lg"
            className="w-[400px] bg-[#582688] hover:cursor-pointer hover:bg-[#582688]/80"
          >
            Continue ...
          </Button>
        </Link>
      </div>
    </main>
  );
}
