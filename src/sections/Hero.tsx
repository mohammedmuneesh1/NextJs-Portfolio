"use client"
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import memojiImage from "../assets/images/memoji-computer.png";
import StarIcon from "@/assets/icons/star.svg"
import { HeroOrbit } from "@/components/HeroOrbit";
import { Header } from "./Header";

export const HeroSection = () => {
  return(
    <>

  <div className="w-full h-full max-w-full py-32 md:py-42 3xl:py-60 relative z-0 overflow-hidden">

   


    {/* THIS PART MAKE OPACITY-5 BACKGROUND LITTLE BIT GRADIENT EFFECT */}

 <HeroOrbit
 size={700}
 rotation={45}
 >
<Image
  src={StarIcon}  alt="Star" className="size-28 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(95%)",}} />
</HeroOrbit>

 <HeroOrbit
 size={700}
 rotation={290}
 >
<Image
  src={StarIcon}  alt="Star" className="size-20 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(95%)",}} />
</HeroOrbit>

<HeroOrbit
 size={700}
 rotation={330}
 >
<Image
  src={StarIcon}  alt="Star" className="size-20 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}} />
</HeroOrbit>


 <HeroOrbit  size={550} rotation={20} >
<Image
  src={StarIcon} alt="Star"  className="size-12 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(95%)",}}
/>
</HeroOrbit>

 <HeroOrbit  size={590} rotation={98} >
<Image
  src={StarIcon} alt="Star"  className="size-8 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(95%)",}}
/>
</HeroOrbit>
 <HeroOrbit  size={430} rotation={-14} >
<Image
  src={StarIcon} alt="Star"  className="size-8 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}}
/>
</HeroOrbit>
<HeroOrbit  size={440} rotation={79} >
<Image
  src={StarIcon} alt="Star"  className="size-15 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}}
/>
</HeroOrbit>

<HeroOrbit  size={530} rotation={178} >
<Image
  src={StarIcon} alt="Star" 
   className="size-10 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}}
/>
</HeroOrbit>

<HeroOrbit  size={710} rotation={145} >
<Image
  src={StarIcon} alt="Star" 
   className="size-14 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}}
/>
</HeroOrbit>

<HeroOrbit  size={720} rotation={0} >
<Image
  src={StarIcon} alt="Star" 
   className="size-3 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}}
/>
</HeroOrbit>

<HeroOrbit  size={520} rotation={45} >
<Image
  src={StarIcon} alt="Star" 
   className="size-8 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}}
/>
</HeroOrbit>
<HeroOrbit  size={520} rotation={-45} >
<Image
  src={StarIcon} alt="Star" 
   className="size-2 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}}
/>
</HeroOrbit>
<HeroOrbit  size={650} rotation={-5} >
<Image
  src={StarIcon} alt="Star" 
   className="size-20 brightness-0 saturate-100"
  style={{filter:"invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(45%)",}}
/>
</HeroOrbit>
      
      
  
  <div className="custom-layout flex flex-col items-center">
    <Image
      src={memojiImage}
      alt="Person peeking from behind laptop"
      className="size-[100px]"
    />

    <div
     className="bg-gray-950 border
      border-gray-800 px-4 py-1.5 inline-flex items-center gap-4  rounded-lg"
     >
      <div className="bg-green-500 size-2.5 rounded-full animate-pulse"></div>
      <div
      className="text-sm font-medium"
      >Available for new projects</div>
    </div>

   <div className="max-w-2xl">
    <h1
    className="font-serif text-3xl md:text-5xl font-semibold text-center mt-8"
    >Building Exceptional User Experiences</h1>
    <p className="mt-4 text-center text-white/60 md:text-lg">
      I specialize in transforming designs into functional, high-performing
      web applications. Let&apos;s discuss your next project.
    </p>
  </div>

    <div className="flex flex-col md:flex-row items-center mt-8 gap-4">
      <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
        <span className="font-semibold">Explore My Work</span>
<Image src={ArrowDown} alt="Arrow down" />
      </button>

      <button className="inline-flex items-center gap-2
       border border-white
       bg-white h-12 px-6 rounded-xl text-gray-900">
        <span>👋</span>
        <span className="">Let&apos;s Connect</span>
      </button>
    </div>
  </div>
</div>
    </>
    );
};
