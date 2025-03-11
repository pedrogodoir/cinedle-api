import React from 'react';
import { Title } from './title';
import { movieDetailsArray } from '@/lib/schemas/movieSchema';

interface TableProps {
  headers: string[];
  colors: string[];
  directors: string[];
  data: Zod.infer<typeof movieDetailsArray>;
}

const Table: React.FC<TableProps> = ({ headers, data, colors, directors }) => {

  console.log(directors)
  return (
    <div className='flex flex-col bg-black rounded-[40px] ring-2 ring-zinc-900 py-2 px-6 shadow-lg gap-2'>
      <div className='flex justify-between bg-zinc-900 gap-[2px]'>
        {headers.map((header, index) => (
          <div className='w-44 px-4 bg-black flex justify-center items-center' key={index}>
            <Title>{header}</Title>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        {data.map((row, rowIndex) => (
          <div className='flex flex-col gap-2' key={rowIndex}>
            <div className='w-full bg-zinc-900 h-[2px]'></div>

            <div className=' justify-between bg-zinc-900 gap-[2px] flex flex-row'>
              <div className='w-44 bg-black flex justify-center items-center z-10 px-4 min-h-24'>
                <img src={`https://image.tmdb.org/t/p/w500${row.backdrop_path}`} alt={row.title} className="absolute z-[-1] w-40 brightness-50 rounded-xl" />
                <Title>{row.title}</Title>
              </div>

              <div className='w-44 px-2 bg-black'> 
                <div className=' bg-red-700 w-full h-full p-2 rounded-xl flex flex-col justify-center'>
                  {row.genres.map((genre, index) => (
                    <Title size='sm' key={index}>{genre.name},</Title>
                  ))}
                </div>
              </div>

              <div className='w-44 px-2 bg-black flex justify-center items-center'>
                <div className=' bg-red-700 w-full h-full p-2 rounded-xl flex flex-col justify-center'>
                  {row.production_companies.map((companie, index) => (
                    <Title size='sm' key={index}>{companie.name},</Title>
                  ))}

                </div>
              </div>

              <div className='w-44 px-2 bg-black flex justify-center items-center'>
                <div className=' bg-red-700 w-full h-full p-2 rounded-xl flex flex-col justify-center items-center'>
                  
                  {Array.isArray(directors[rowIndex]) && directors[rowIndex].map((director: string, index: number) => (
                    <Title size='sm' key={index}>{director},</Title>
                  ))}
                </div>
              </div>

              <div className='w-44 px-2 bg-black flex justify-center items-center'>
                <div className=' bg-red-700 w-full h-full p-2 rounded-xl flex justify-center items-center'>
                  <Title>{row.release_date.split("-")[0]}</Title>
                </div>
              </div>
            </div>
            
            {/* {headers.map((header, colIndex) => (
              <span key={colIndex}>{row[header]}</span>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;