import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">
      <div className="flex flex-row bg-linear-to-b from-zinc-700 to-zinc-700">
        <h1 className="font-semibold text-6xl ">Cine</h1>
        <h1 className="font-semibold text-6xl text-red-600">dle</h1>
      </div>
      
      <Link href={"/classic"}>classic</Link>
    </div>
  );
}
