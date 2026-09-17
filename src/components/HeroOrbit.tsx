import { twMerge } from "tailwind-merge"


//eslint-disable-next-line
export const HeroOrbit=({children,size,rotation,spinDuration,shouldOrbit=false}:any)=>{

    
    return(
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2
   -translate-y-1/2 -z-30 ">

    <div
     className={twMerge(shouldOrbit === true && "animate-spin")}
     style={{
        animationDuration:`${spinDuration}s`
     }}
     >

    <div className=" flex items-start justify-start  " 
       style={{
        transform:`rotate(${rotation}deg)`,
        height: `${size}px`,
        width:`${size}px`
    }}
    >
<div 
className="inline-flex  "
style={{
transform:`rotate(${rotation*-1}deg)`,
}}>
{children}
</div>
</div>
    </div>
</div>
    )
}



{/* inline-flex animate-spin [animation-duration:5s]  */}

// <Image
//   src={StarIcon}
//   alt="Star"
//   className="size-28 brightness-0 saturate-100 
//    "
//   style={{
//     filter:
//       "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(95%)",
//   }}
// />