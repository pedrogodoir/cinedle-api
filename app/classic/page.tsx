'use client'

import { topRated } from "@/api/getTopRated";
import { searchMovie } from "@/api/searchMovie";
import { Button } from "@/components/ui/button";
import { Dropdown, DropdownItem, DropdownLink } from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Classic() {
  const [guessMovie, setGuessMovie] = useState([]);
  const [movie, setMovie] = useState<{ title: string }[]>([]);

  useEffect(() => {
    const getGuessMovie = async () => {
      try {
        const response = await topRated();
        const result = await response.results[Math.floor(Math.random() * response.results.length)];
        console.log(result)
        setGuessMovie(result)
      } catch (error) {
        console.error("Erro:", error)
      }
    }
    getGuessMovie();
  },[])

  const handleSearchMovie = async (query: string) => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    try {
      const response = await searchMovie(query);
      setMovie(response.results)
      console.log(movie)
    } catch (error) {
      console.error("Erro:", error)
    }
    await delay(1000);
  }

  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">
      <Header xColor="red">
        <Dropdown variant="red" trigger="Classic">
          <DropdownLink variant="blue" href="">Artwork</DropdownLink>
          <DropdownLink variant="disabled" href="">Artwork</DropdownLink>
        </Dropdown>
      </Header>
      
      <div className="flex flex-col justify-between items-center h-screen w-[1000px] gap-10 p-20">
        <div className="flex flex-row gap-4">
          <Input placeholder="Type a Movie" onChange={(e) => handleSearchMovie(e.target.value)}>
            {movie.map((item, index) => (
              <h1 key={index}>{item.title}</h1>
            ))}
          </Input>
          <Button variant="red" size="icon" >
            <Search color="white" size={45}></Search>
          </Button>
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
