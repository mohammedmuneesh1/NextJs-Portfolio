"use client"
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import memojiImage from "../assets/images/memoji-computer.png";
import StarIcon from "@/assets/icons/star.svg"
import { HeroOrbit } from "@/components/HeroOrbit";
import { Header } from "./Header";
import { motion } from "framer-motion";


export const HeroSection = () => {
  return(
    <>

  <div className="w-full h-full max-w-full py-32 md:py-42  xl:py-[30vh]    z-0 overflow-hidden">

   


    {/* THIS PART MAKE OPACITY-5 BACKGROUND LITTLE BIT GRADIENT EFFECT */}
{/* EXTRA STARS */}

{/* 1 - STATIC */}
<HeroOrbit
  size={900}
  rotation={5}
  spinDuration={47}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-8 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(60%)",
    }}
  />
</HeroOrbit>

{/* 2 - ORBIT */}
<HeroOrbit
  size={900}
  rotation={42}
  spinDuration={53}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-10 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(70%)",
    }}
  />
</HeroOrbit>

{/* 3 - STATIC */}
<HeroOrbit
  size={900}
  rotation={88}
  spinDuration={41}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-6 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(55%)",
    }}
  />
</HeroOrbit>

{/* 4 - ORBIT */}
<HeroOrbit
  size={900}
  rotation={132}
  spinDuration={58}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-12 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(65%)",
    }}
  />
</HeroOrbit>

{/* 5 - STATIC */}
<HeroOrbit
  size={900}
  rotation={168}
  spinDuration={49}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-7 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(55%)",
    }}
  />
</HeroOrbit>

{/* 6 - ORBIT */}
<HeroOrbit
  size={900}
  rotation={205}
  spinDuration={44}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-9 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(65%)",
    }}
  />
</HeroOrbit>

{/* 7 - STATIC */}
<HeroOrbit
  size={900}
  rotation={242}
  spinDuration={61}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-8 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(60%)",
    }}
  />
</HeroOrbit>

{/* 8 - ORBIT */}
<HeroOrbit
  size={900}
  rotation={278}
  spinDuration={52}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-11 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(65%)",
    }}
  />
</HeroOrbit>

{/* 9 - STATIC */}
<HeroOrbit
  size={900}
  rotation={315}
  spinDuration={46}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-6 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(55%)",
    }}
  />
</HeroOrbit>

{/* 10 - ORBIT */}
<HeroOrbit
  size={900}
  rotation={350}
  spinDuration={56}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-9 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(65%)",
    }}
  />
</HeroOrbit>


{/* MIDDLE STARS */}

{/* 11 - ORBIT */}
<HeroOrbit
  size={640}
  rotation={8}
  spinDuration={29}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-9 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(60%)",
    }}
  />
</HeroOrbit>

{/* 12 - STATIC */}
<HeroOrbit
  size={640}
  rotation={63}
  spinDuration={35}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-7 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(50%)",
    }}
  />
</HeroOrbit>

{/* 13 - ORBIT */}
<HeroOrbit
  size={640}
  rotation={110}
  spinDuration={31}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-10 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(65%)",
    }}
  />
</HeroOrbit>

{/* 14 - STATIC */}
<HeroOrbit
  size={640}
  rotation={157}
  spinDuration={38}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-8 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(55%)",
    }}
  />
</HeroOrbit>

{/* 15 - ORBIT */}
<HeroOrbit
  size={640}
  rotation={198}
  spinDuration={27}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-6 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(55%)",
    }}
  />
</HeroOrbit>

{/* 16 - STATIC */}
<HeroOrbit
  size={640}
  rotation={235}
  spinDuration={33}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-11 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(65%)",
    }}
  />
</HeroOrbit>

{/* 17 - ORBIT */}
<HeroOrbit
  size={640}
  rotation={275}
  spinDuration={36}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-8 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(55%)",
    }}
  />
</HeroOrbit>

{/* 18 - STATIC */}
<HeroOrbit
  size={640}
  rotation={320}
  spinDuration={30}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-9 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(60%)",
    }}
  />
</HeroOrbit>


{/* INNER STARS */}

{/* 19 - ORBIT */}
<HeroOrbit
  size={470}
  rotation={72}
  spinDuration={23}
  shouldOrbit={true}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-9 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(60%)",
    }}
  />
</HeroOrbit>

{/* 20 - STATIC */}
<HeroOrbit
  size={470}
  rotation={255}
  spinDuration={26}
  shouldOrbit={false}
>
  <Image
    src={StarIcon}
    alt="Star"
    className="size-7 brightness-0 saturate-100"
    style={{
      filter:
        "invert(48%) sepia(79%) saturate(500%) hue-rotate(100deg) brightness(55%)",
    }}
  />
</HeroOrbit>



{/* LARGE ORBIT */}
  
  <motion.div
  variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,  //staggerChildren: 0.15 means there is a 0.15-second delay between the start of each child animation.
              },
            },
}}
  className="custom-layout flex flex-col items-center">
   <motion.div
              variants={{
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.85,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }}
  initial="hidden"
  animate="visible"

          >

             <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
            <Image
              src={memojiImage}
              alt="Person peeking from behind laptop"
              className="size-[100px]"
            />
    </motion.div>
          </motion.div>


    <motion.div
                variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
                initial="hidden"
  animate="visible"
              
     className="bg-gray-950 border
      border-gray-800 px-4 py-1.5 inline-flex items-center gap-4  rounded-lg"
     >
      <div className="bg-green-500 size-2.5 rounded-full overflow-visible relative">
        <div className=" bg-green-500 absolute inset-0  rounded-full animate-ping"/>
      </div>


      <div
      className="text-sm font-medium"
      >Available for new projects</div>
    </motion.div>




    

   <motion.div className="max-w-2xl"
  variants={{
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  }}
  initial="hidden"
  animate="visible"
   >
    <motion.h1
            variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}

    className="font-serif text-3xl md:text-5xl font-semibold text-center mt-8"
    >Building Exceptional User Experiences</motion.h1>
    <motion.p
          variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}

    className="mt-4 text-center text-white/60 md:text-lg">
      I specialize in transforming designs into functional, high-performing
      web applications. Let&apos;s discuss your next project.
    </motion.p>
  </motion.div>

    <motion.div

          variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                },
              },
            }}
            initial="hidden"
            animate="visible"
    
    
    className="flex flex-col md:flex-row items-center mt-8 gap-4">
      <motion.button
             whileHover={{
                y: -3,
                scale: 1.02,
                borderColor: "rgba(255,255,255,0.35)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
      className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
        <span className="font-semibold">Explore My Work</span>
              <motion.div
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={ArrowDown}
                  alt="Arrow down"
                />
              </motion.div>
      </motion.button>

            <motion.button
              className="
                inline-flex
                items-center
                gap-2
                border
                border-white
                bg-white
                h-12
                px-6
                rounded-xl
                text-gray-900
              "
              whileHover={{
                y: -3,
                scale: 1.03,
                boxShadow: "0 12px 30px rgba(255,255,255,0.12)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >

              <motion.span
                animate={{
                  rotate: [0, 12, -8, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                👋
              </motion.span>

              <span>
                Let&apos;s Connect
              </span>

            </motion.button>


    </motion.div>
  </motion.div>
</div>
    </>
    );
};
