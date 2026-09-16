
import React from 'react'

interface Props {
title:string;
eyebrow?:string;
description?:string;    
}

const SectionHeader:React.FC<Props> = ({title,description,eyebrow}) => {
  return (
    <div className="mx-auto text-center
     w-full max-w-full">
    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400
    text-transparent bg-clip-text text-transparent
    " >
{eyebrow}

    </p>
    {
        
      title && <h2
      className="font-serif text-3xl md:text-5xl mt-6"
      >{title}</h2>
    }
    {
        description && (
            <p
            className="text-white/60 mt-4 md:text-lg lg:text-xl max-w-md  text-center mx-auto"
            >
            {description}
            </p>
        )
    }
    </div>
  )
}

export default SectionHeader