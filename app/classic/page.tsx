
export default function Classic() {
  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">
      <div className="flex flex-row">
        <h1 className="font-semibold text-7xl bg-clip-text bg-gradient-to-b from-red-900 to-red-600 text-transparent">Classic</h1>
      </div>
      
      <div className="flex flex-col justify-between items-center h-screen w-[1000px] gap-10 p-20">
        <div>
          <input type="text" />
        </div>

        <div className="flex flex-col justify-between items-center h-full w-[1000px] bg-black">
          
        </div>
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
