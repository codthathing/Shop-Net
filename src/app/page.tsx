import Link from "next/link";

export default function HomePage() {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-4 lg:gap-y-8">
        <h1 className="text-2xl lg:text-5xl font-extrabold">Welcome to Shop Net</h1>
        <Link href={"/sneakers"} className="bg-[#ff7d1aff] text-white text-base lg:text-base px-4 py-2 lg:px-5 lg:py-2.5 rounded-md shadow-lg shadow-black/25">Get Started</Link>
      </div>
    </section>
  );
}
