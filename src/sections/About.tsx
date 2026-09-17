"use client"
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import SectionHeader from "@/components/SectionHeader";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png"
import smileEmoji from "@/assets/images/memoji-smile.png"
import { motion } from "framer-motion";
import { useRef } from "react";

const tools = [
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CssIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
  {
    title: "GitHub",
    icon: GithubIcon,
  },
];

const interests = [
  {
    label: "Painting",
    emoji: "🎨",
    className: "left-[1%] top-[8%]",
  },
  {
    label: "Photography",
    emoji: "📷",
    className: "left-[20%] top-[2%]",
  },
  {
    label: "Gaming",
    emoji: "🎮",
    className: "left-[48%] top-[12%]",
  },
  {
    label: "Hiking",
    emoji: "🥾",
    className: "left-[1%] top-[32%]",
  },
  {
    label: "Music",
    emoji: "🎵",
    className: "left-[20%] top-[28%]",
  },
  {
    label: "Fitness",
    emoji: "🏋️",
    className: "left-[40%] top-[38%]",
  },
  {
    label: "Reading",
    emoji: "📚",
    className: "left-[60%] top-[30%]",
  },
];

 const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);



  return (
    <section className=" py-16 md:py-24 ">
      <div className="custom-layout mx-auto">
        <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
         />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16 lg:mt-24">

          {/* ================= MY READS ================= */}
          <div
            className="
              md:col-span-2
              h-[300px]
              rounded-3xl
              border-2 border-white/20
              bg-white/[0.06]
              p-7
              overflow-hidden
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-emerald-300 text-2xl">
                ✦
              </span>

              <h2 className="font-serif text-2xl font-bold text-white">
                My Reads
              </h2>
            </div>

            <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-white/50">
              Explore the books shaping my perspectives.
            </p>

            <div className="mt-6 flex justify-center">
              <Image
                src={bookImage}
                alt="Atomic Habits book"
                width={150}
                height={210}
                className="h-[170px] w-auto object-contain"
              />
            </div>
          </div>

          {/* ================= MY TOOLBOX ================= */}
          <div
            className="
              md:col-span-3
              min-h-[300px]
              rounded-3xl
              border-2 border-white/20
              bg-white/[0.06]
              p-7
              overflow-hidden
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-emerald-300 text-2xl">
                ✦
              </span>

              <h2 className="font-serif text-2xl font-bold text-white">
                My Toolbox
              </h2>
            </div>

            <p className="mt-2 text-sm text-white/50">
              Explore the technologies and tools I use to craft
              exceptional digital experiences.
            </p>

            <div className="mt-7 flex gap-4  flex-none 
            scroll
             animate-[scroll_10s_linear_infinite]
             hover:[animation-play-state:paused]
             transition 
            ">
              {[...tools, ...tools].map((tool,index) => (
                <div
                  key={`${tool.title}-${index}`}
                  className="
                  shrink-0
                    flex 
                    items-center
                    gap-3
                    rounded-lg
                    border border-white/10
                    bg-white/[0.02]
                    px-4
                    py-3
                  "
                >
   <Image
  src={tool.icon}
  alt={tool.title}
  width={28}
  height={28}
  className="size-7 object-contain"
  style={{
    filter:
      "invert(87%) sepia(44%) saturate(450%) hue-rotate(90deg) brightness(95%) contrast(90%)",
  }}
/>

                  <span className="text-sm font-medium text-white/80">
                    {tool.title}
                  </span>
                </div>
              ))}
            </div>

{/* MOVE TO RIGHT SIDE  */}

            <div className="mt-7 flex gap-4  flex-none 
               w-max
  animate-[scroll-right_10s_linear_infinite]
  hover:[animation-play-state:paused]
             transition 
            ">
              {[...tools, ...tools].map((tool,index) => (
                <div
                  key={`${tool.title}-${index}`}
                  className="
                  shrink-0
                    flex 
                    items-center
                    gap-3
                    rounded-lg
                    border border-white/10
                    bg-white/[0.02]
                    px-4
                    py-3
                  "
                >
   <Image
  src={tool.icon}
  alt={tool.title}
  width={28}
  height={28}
  className="size-7 object-contain"
  style={{
    filter:
      "invert(87%) sepia(44%) saturate(450%) hue-rotate(90deg) brightness(95%) contrast(90%)",
  }}
/>

                  <span className="text-sm font-medium text-white/80">
                    {tool.title}
                  </span>
                </div>
              ))}
            </div>


          </div>

          {/* ================= BEYOND THE CODE ================= */}
          <div
          ref={containerRef}
            className="
              md:col-span-3
              h-[270px]
              rounded-3xl
              border-2 border-white/20
              bg-white/[0.06]
              p-7
              overflow-hidden
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-emerald-300 text-2xl">
                ✦
              </span>

              <h2 className="font-serif text-2xl font-bold text-white">
                Beyond the Code
              </h2>
            </div>

            <p className="mt-2 max-w-[430px] text-sm leading-relaxed text-white/50">
              Explore my interests and hobbies beyond the digital realm.
            </p>

<div
  
 className="relative mt-7 h-48 w-full "
>
  {interests.map((interest) => (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 20,
      }}
      key={interest.label}
      className={`
        absolute
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-gradient-to-r
        from-emerald-300
        to-sky-400
        px-5
        py-2
        text-sm
        font-semibold
        text-gray-950
        whitespace-nowrap
        ${interest.className}
      `}
    >
      <span>{interest.label}</span>
      <span>{interest.emoji}</span>
    </motion.div>
  ))}
</div>
          </div>

          {/* ================= MAP ================= */}
          <div
            className="
              md:col-span-2
              h-[270px]
              rounded-3xl
              border-2 border-white/20
              bg-white/[0.06]
              overflow-hidden
              relative
            "
          >
            <Image
              src={mapImage}
              alt="Location map"
              fill
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Location marker */}
<div
  className="
    left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  
    relative
    size-20
    rounded-full
    bg-cyan-300/80
    border-4
    border-white/40
    flex
    items-center
    justify-center
    shadow-[0_0_40px_rgba(34,211,238,0.5)]
  "
>
  {/* Ping ring */}
  <div
    className="
      absolute
      inset-0
      rounded-full
      bg-cyan-300/70
      animate-ping
    "
  />

  {/* Emoji */}
  <Image
    src={smileEmoji}
    className="relative size-16"
    alt="Smile Emoji"
  />
</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;