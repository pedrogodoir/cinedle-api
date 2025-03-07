import React from 'react';
import { Title } from './title';

interface TableProps {
  headers: string[];
  data: Array<{ [key: string]: any }>;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className='flex flex-col bg-black rounded-[50px] ring-2 ring-zinc-900 py-2 px-6 shadow-lg gap-2'>
      <div className='flex justify-between bg-zinc-900 gap-[2px]'>
        {headers.map((header, index) => (
          <div className='w-44 px-4 bg-black flex justify-center' key={index}>
            <Title>{header}</Title>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        {data.map((row, rowIndex) => (
          <div className='flex flex-col gap-2' key={rowIndex}>
            <div className='w-full bg-zinc-900 h-[2px]'></div>

            <div className=' justify-between bg-zinc-900 gap-[2px] flex flex-row h-[216px]'>
              <div className='w-44 px-4 bg-black flex justify-center items-center z-10'>
                <img src={`https://image.tmdb.org/t/p/w500${row.poster_path}`} alt={row.title} className="absolute z-[-1] w-36 brightness-50" />
                <Title>{row.title}</Title>
              </div>

              <div className='w-44 px-4 bg-black flex justify-center items-center'> 
                <Title >{row.genres[0].name}</Title>
              </div>

              <div className='w-44 px-4 bg-black flex justify-center items-center'>  
                <Title >{row.vote_average}</Title>
              </div>

              <div className='w-44 px-4 bg-black flex justify-center items-center'>
                <Title >{row.budget}</Title>
              </div>

              <div className='w-44 px-4 bg-black flex justify-center items-center'>
                <Title >{row.release_date}</Title>
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