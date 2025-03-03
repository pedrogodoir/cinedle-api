import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export function Input({...props}: InputProps) {
  return <input className=" w-96 h-[72px] font-semibold text-3xl py-2 px-6 bg-black rounded-full shadow-lg ring-2 ring-zinc-900 placeholder:text-zinc-700" {...props} />
}