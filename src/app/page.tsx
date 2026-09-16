import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { ProjectsSection } from "@/sections/Projects";
import TapeSection from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import AboutSection from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import Footer from "@/sections/Footer";




export default function Home() {
  return (
    <>

   <div 
   className="relative overflow-hidden  z-0 w-full max-w-full min-h-screen">
     <Header/>
   <HeroSection/>

      <div
       className="absolute inset-0 -z-30 opacity-5"
       style={{
         backgroundImage: `url(${grainImage.src})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
       }}
      />
   
   <div className="size-[620px] hero-ring -z-30 "/>
   <div className="size-[1020px] hero-ring -z-30 "/>
   <div className="size-[1220px] hero-ring -z-30"/>
   <div className="size-[1420px] hero-ring -z-30"/>
   <div className="size-[1620px] hero-ring -z-30"/>
   <div className="size-[1820px] hero-ring -z-30"/>
   <div className="size-[2020px] hero-ring -z-30"/>
   </div>
   <ProjectsSection/>
   <TapeSection/>
   <TestimonialsSection/>
   <AboutSection/>
   <ContactSection/>
   <Footer/>
   </>

  );
}
