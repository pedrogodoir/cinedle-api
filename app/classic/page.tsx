import { Dropdown, DropdownItem, DropdownLink } from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { EllipsisVertical } from "lucide-react";

export default function Classic() {
  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">
      <Header variant="red">
        <EllipsisVertical color="white" size={50} className="cursor-pointer"></EllipsisVertical>
        <Dropdown variant="red" trigger="Classic">
          <DropdownItem variant="blue">Artwork</DropdownItem>
          <DropdownLink variant="disabled" href="">Artwork</DropdownLink>
        </Dropdown>
      </Header>
      
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
