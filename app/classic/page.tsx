'use client'

import { getMovie } from "@/api/getMovie";
import { topRated } from "@/api/getTopRated";
import { searchMovie } from "@/api/searchMovie";
import { Button } from "@/components/ui/button";
import { Dropdown, DropdownItem, DropdownLink } from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import Table from "@/components/ui/table";
import { Title } from "@/components/ui/title";
import { movieSchema } from "@/lib/schemas/searchMovieSchema";
import { movieDetailsSchema } from "@/lib/schemas/movieSchema";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Zod, { number } from "zod";
import { getCredits } from "@/api/getCredits";
import JSConfetti from 'js-confetti'

export default function Classic() {
  const [guessMovie, setGuessMovie] = useState<Zod.infer<typeof movieDetailsSchema>>();
  const [movieList, setMovieList] = useState<Zod.infer<typeof movieSchema>[]>([]);
  const [movieId, setMovieId] = useState<number>(0);
  const [tableData, setTableData] = useState<any[]>([]);
  const [tableColors, setTableColors] = useState<any[]>([]);
  const [directors, setDirectors] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const headers = [ "Title", "Genres", "Production Companies", "Director(s)", "Revenue", "Release Year"];

  useEffect(() => {
    const getGuessMovie = async () => {
      try {
        const response = await topRated();
        const result = await response.results[Math.floor(Math.random() * response.results.length)];
        try {
          const response = await getMovie(result.id);
          console.log(response)
          setGuessMovie(response)
        } catch (error) {
          console.error("Erro:", error)
        }
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

      setMovieList(response.results)
    } catch (error) {
      console.error("Erro:", error)
    }
    await delay(1000);
  }

  const handleGame = async (id: number) => {
    if(id == 0) {
      console.error("Movie not selected")
    }
    try {
      const response = await getMovie(id);

      if (guessMovie) {
        setTableColors([await comparision(response, guessMovie), ...tableColors])
      } else {
        console.error("Guess movie is undefined")
      }

      console.log(tableColors)

      setTableData([...tableData, response])
    } catch (error) {
      console.error("Erro:", error)
    }
  }

  const handleDropdownItemClick = (title: string, id: number) => {
    setMovieId(id)
    setInputValue(title)
  }

  const comparision = async (movie: Zod.infer<typeof movieDetailsSchema>, guess: Zod.infer<typeof movieDetailsSchema> ) => {
    let genreColor = 0
    let companiesColor = 0
    let directorsColor = 0
    let yearArrow = 0
    let newTableColors = []

    for (let i = 0; i < movie.genres.length; i++) {
      for (let j = 0; j < guess.genres.length; j++) {
        if(movie.genres[i].id == guess.genres[j].id) {
          genreColor++
        }
      }
    }
    if(genreColor == movie.genres.length && genreColor == guess.genres.length) {
      newTableColors.push("green")
    } else if(genreColor != 0) {
      newTableColors.push("yellow")
    } else {
      newTableColors.push("red")
    }

    for (let i = 0; i < movie.production_companies.length; i++) {
      for (let j = 0; j < guess.production_companies.length; j++) {
        if(movie.production_companies[i].id == guess.production_companies[j].id) {
          companiesColor++
        }
      }
    }
    if(companiesColor == movie.production_companies.length && companiesColor == guess.production_companies.length) {
      newTableColors.push("green")
    } else if(companiesColor != 0) {
      newTableColors.push("yellow")
    } else {
      newTableColors.push("red")
    }

    try {
      const responseMovie = await getCredits(movie.id);
      const responseGuess = await getCredits(guess.id);
      
      let directorGuessLength = 0

      setDirectors([responseMovie.crew.filter((member) => member.job === "Director").map((director) => director.name), ...directors])
      for (let i = 0; i < responseMovie.crew.length; i++) {
        if(responseMovie.crew[i].job == "Director") {

          for (let j = 0; guessMovie && j < responseGuess.crew.length; j++) {
            if (responseGuess.crew[j] && responseGuess.crew[j].job === "Director") {
              directorGuessLength++
              
              if(responseMovie.crew[i].name == responseGuess.crew[j].name) {
                directorsColor++
              }
            }
          }
        }
      }
      if(directorsColor == directorGuessLength) {
        newTableColors.push("green")
      } else if(directorsColor != 0) {
        newTableColors.push("yellow")
      } else {
        newTableColors.push("red")
      }
    } catch (error) {
      console.error("Erro:", error)
    }

    if(movie.revenue == guess.revenue) {
      newTableColors.push("green")
    } else if (movie.revenue > guess.revenue) {
      newTableColors.push("Down")
    } else if (movie.revenue > guess.revenue) {
      newTableColors.push("Up")
    } else {
      newTableColors.push("")
    }


    const yearMovie = parseInt(movie.release_date.split("-")[0], 10)
    const yearGuess = parseInt(guess.release_date.split("-")[0], 10)
    if(yearMovie == yearGuess && yearMovie - yearGuess == 0) {
      newTableColors.push("green")
    } else {
      newTableColors.push("red")
    }


    if(yearMovie - yearGuess > 0) {
      newTableColors.push("Down")
    } else if(yearMovie - yearGuess < 0) {
      newTableColors.push("Up")
    } else {
      newTableColors.push("")
    }
 
    if(JSON.stringify(newTableColors) === JSON.stringify(['green', 'green', 'green', 'green', ''])) {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }

    return newTableColors
  }

  return (
    <div className="flex flex-col justify-between items-center p-10 h-screen">
      <Header xColor="red">
        <Dropdown variant="red" trigger="Classic">
          <DropdownLink variant="blue" href="">Artwork</DropdownLink>
          <DropdownLink variant="disabled" href="">Artwork</DropdownLink>
        </Dropdown>
      </Header>
      
      <div className="flex flex-col items-center h-screen gap-10 p-20">
        <div className="flex flex-row gap-4">
          <Input placeholder="Type a Movie" value={inputValue} onChange={(e) => {setInputValue(e.target.value); handleSearchMovie(e.target.value)}}>
            {movieList.map((item, index) => (
              <DropdownItem key={index} onClick={() => handleDropdownItemClick(item.title, item.id)}>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="w-6 h-10" />

                <Title>
                  {item.title}
                </Title>
              </DropdownItem>
            ))}
          </Input>

          <Button variant="red" size="icon" onClick={() => handleGame(movieId)}>
            <Search color="white" size={45}></Search>
          </Button>
        </div>

        <Table headers={headers} data={tableData} colors={tableColors} directors={directors}></Table>
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
