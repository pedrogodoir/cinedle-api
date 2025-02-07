import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">
      <Header/>
      
      <div className="flex flex-col justify-center items-center h-screen gap-5">
          <Button variant="red" href="/classic">Classic</Button>

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
