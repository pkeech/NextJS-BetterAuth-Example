import Image from "next/image";

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
      </div>
    </main>
  );
}
