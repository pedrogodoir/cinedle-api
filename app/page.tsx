import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">

      <div className="flex flex-row bg-linear-to-b from-zinc-700 to-zinc-700">
        <h1 className="font-semibold text-7xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent">Cine</h1>
        <h1 className="font-semibold text-7xl bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-50 text-transparent">dle</h1>
      </div>
      
      <div className="flex flex-col justify-center items-center h-screen">
          <Link href={"/classic"} 
            className="transition duration-1000 flex items-center justify-center w-96 h-[72px] rounded-full bg-gradient-to-b from-red-600 to-red-900 hover:bg-gradient-to-b hover:from-red-900 hover:to-red-600">
            <h2 className="font-semibold text-4xl bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-300 text-transparent">Classic</h2>
          </Link>
      </div>

      <div className="absolute inset-0 bg-no-repeat z-[-1]" 
        style={{
          backgroundImage: "url('/spotlightl.png')"
        }}/>
      <div className="absolute inset-0 bg-no-repeat z-[-1]" 
        style={{
          backgroundImage: "url('/spotlightr.png')",
          backgroundPosition: 'top right'
        }}/>
    </div>
  );
}
