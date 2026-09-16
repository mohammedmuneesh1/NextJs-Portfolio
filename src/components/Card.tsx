import React from 'react'
import { twMerge } from 'tailwind-merge';
import grainImage from "@/assets/images/grain.jpg"
interface CardInterface{
className?:string;
children:React.ReactNode
}
const Card:React.FC<CardInterface> = ({className,children}) => {
  return (
   <div
      className={
        twMerge(`
        relative
        bg-gray-800
        overflow-hidden
        rounded-3xl
        after:content-['']
        after:absolute
        after:inset-0
        after:z-10
        after:outline-2
        after:-outline-offset-2
        after:rounded-3xl
        after:outline-white/20`,
        className
        )
        }
    >
        <div 
        className="absolute inset-0 -z-10  opacity-100"
        style={{
          backgroundImage:`url(${grainImage.src})`
        }}
        />
  {children}
      </div>
  )
}

export default Card