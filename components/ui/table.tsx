' use client '

import React, { useState } from 'react';
import { Title } from './title';
import { movieDetailsArray } from '@/lib/schemas/movieSchema';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface TableProps {
  headers: string[];
  colors: string[];
  directors: string[];
  actor: string[];
  data: Zod.infer<typeof movieDetailsArray>;
  children?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({children, headers, data, colors, directors, actor }) => {

  // console.log(colors)

  const setColors = (row: number, col: number) => {
    if(colors[row][col] == "red") {
      return 'bg-red-700 w-full h-full p-2 rounded-xl flex flex-col justify-center items-center'
    } else if(colors[row][col] == "yellow") {
      return 'bg-yellow-700 w-full h-full p-2 rounded-xl flex flex-col justify-center items-center'
    } else if(colors[row][col] == "green") {
      return 'bg-green-700 w-full h-full p-2 rounded-xl flex flex-col justify-center items-center'
    }
    return 'bg-red-700 w-full h-full p-2 rounded-xl flex flex-col justify-center items-center'
  }

  return (
    <div className='flex flex-col bg-black rounded-[40px] ring-2 ring-zinc-900 py-2 px-6 shadow-lg gap-2'>
      <div className='flex justify-between bg-zinc-900 gap-[2px]'>
        {headers.map((header, index) => (
          <div className='w-52 px-4 bg-black flex justify-center items-center' key={index}>
            <Title size="sm">{header}</Title>
          </div>
        ))}
      </div>
        {data.slice().reverse().map((row, rowIndex) => (
          <div className='flex flex-col gap-2' key={rowIndex}>
            <div className='w-full bg-zinc-900 h-[2px]'></div>
  
            <div className=' justify-between bg-zinc-900 gap-[2px] flex flex-row'>
              <div className="bg-center bg-cover bg-origin-border w-52 bg-black flex justify-center items-center z-10 px-2 overflow-hidden">
                <div className='bg-cover w-full h-full bg-black opacity-50 rounded-xl' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${row.poster_path})` }}></div>
                {/* <img src={`https://image.tmdb.org/t/p/w500${row.poster_path}`} alt={row.title} className=" overflow-hidden z-[-1] brightness-50 rounded-xl" /> */}
                <Title className="absolute max-w-48 flex items-center justify-center" variant='offWhite' >{row.title}</Title>
              </div>
  
              <div className='w-52 px-2 bg-black'> 
                <div className={setColors(rowIndex,0)}>
                  {row.genres.map((genre, index) => (
                    <Title size='sm' key={index}>{genre.name}</Title>
                  ))}
                </div>
              </div>
  
              <div className='w-52 px-2 bg-black flex justify-center items-center'>
                <div className={setColors(rowIndex,1)}>
                  {row.production_companies.slice().reverse().map((companie, index) => (
                    <Title size='sm' key={index}>{companie.name}</Title>
                  ))}
                </div>
              </div>

              <div className='w-52 px-2 bg-black flex justify-center items-center'>
                <div className={setColors(rowIndex, 2)}>
                  <Title size='sm'>{actor[rowIndex]}</Title>
                </div>
              </div>
  
              <div className='w-52 px-2 bg-black flex justify-center items-center'>
                <div className={setColors(rowIndex,3)}>
                  {Array.isArray(directors[rowIndex]) && directors[rowIndex].map((director: string, index: number) => (
                    <Title size='sm' key={index}>{director}</Title>
                  ))}
                </div>
              </div>
  
              <div className='w-52 px-2 bg-black flex justify-center items-center'>
                <div className={setColors(rowIndex, 4)}>
                  {colors[rowIndex][4] === "Up" && <ArrowUp className='opacity-55' color='black' strokeWidth={4} size={120}/>}
                  {colors[rowIndex][4] === "Down" && <ArrowDown className='opacity-55' color='black' strokeWidth={4} size={120}/>}
                  <Title className="absolute max-w-48">${row.revenue.toLocaleString()}</Title>
                </div>
              </div>

              <div className='w-52 px-2 bg-black flex justify-center items-center'>
                <div className={setColors(rowIndex, 5)}>
                  {colors[rowIndex][6] == "Up" && <ArrowUp className='opacity-55' color='black' strokeWidth={4} size={120}/>}
                  {colors[rowIndex][6] == "Down" && <ArrowDown className='opacity-55' color='black' strokeWidth={4} size={120}/>}
                  <Title className="absolute max-w-48">{row.release_date.split("-")[0]}</Title>
                </div>
              </div>
            </div>
          </div>
        ))}
        {children}
      </div>

  );
};

export default Table;