'use client'

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Title } from "@/components/ui/title";
import { useState } from "react";

export default function Home() {
  const [mouseInClassic, setMouseInClassic] = useState(false)
  const [mouseInArtwork, setMouseInArtwork] = useState(false)

  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">
      <Header>
        <Title variant="red" size="xl">Cine</Title>
        <Title variant="white" size="xl">dle</Title>

        <div className="w-[50px]" />
      </Header>
      
      <div className="flex flex-row justify-center items-center h-screen gap-5">
          <Button variant="red" href="/classic" id="classic" size="box" onMouseEnter={() => setMouseInClassic(true)} onMouseLeave={() => setMouseInClassic(false)}>
            <Title size="lg">Classic</Title>
            {mouseInClassic ? (
              <Title className="text-left">Try to guess the movie using color-coded hints that show how close you are to the right details!</Title>
            ) : (<span></span>)}
          </Button>

          <Button variant="disabled" size="box" onMouseEnter={() => setMouseInArtwork(true)} onMouseLeave={() => setMouseInArtwork(false)}>
            <Title size="lg">Artwork</Title>
            {mouseInArtwork ? (
              <Title className="text-left">Coming soon!</Title>
            ) : (<span></span>)}
            </Button>
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
