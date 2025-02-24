import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">
      <Header>
        <h1 className="font-semibold text-7xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent cursor-pointer">Cine</h1>
        <h1 className="font-semibold text-7xl bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-50 text-transparent cursor-pointer">dle</h1>

        <div className="w-[50px]" />
      </Header>
      
      <div className="flex flex-col justify-center items-center h-screen gap-5">
          <Button variant="red" href="/classic" id="bclassic">Classic</Button>

          <Button variant="disabled">Artwork</Button>
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
