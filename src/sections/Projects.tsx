import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import Image from "next/image";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
  <section  className="pb-16 lg:py-24">
  <div className="custom-layout text-center">
  <SectionHeader
    eyebrow="Real-World Results"
    title="Featured Projects"
    description="  See how I transformed concepts into engaging digital experiences"
    />


<div className="mt-10 md:mt-20 flex flex-col gap-20">
  {portfolioProjects?.map((val,index) => (
 <Card 
 key={index}
 className="pt-8 md:pt-12 px-8 md:px-10"
 >
        {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-center  md:items-left">

        {/* ================= LEFT COLUMN ================= */}
        <div className="max-w-full w-full text-left ">
          {/* Company + Year */}
          <div
            className="
              bg-gradient-to-r
              from-emerald-300
              to-sky-400
              inline-flex
              font-bold
              uppercase
              tracking-widest
              text-sm
              gap-2
              text-transparent
              bg-clip-text

            "
          >
            <span>{val?.company}</span>
            <span>{val?.year}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
            {val?.title}
          </h3>

          {/* Divider */}
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

          {/* Results */}
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {val?.results?.map((result, index) => (
              <li
                key={`result-${index}`}
                className="flex items-start gap-2 text-sm text-white/50"
              >
                <Image
                  src={CheckIcon}
                  alt="Check"
                  className="size-5 md:size-6 shrink-0 brightness-0 invert opacity-50"
                />

                <span>{result?.title}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <a href={val?.link}>
            <button
              className="
              ml-auto
                md:w-auto
                px-8
                bg-white
                text-gray-950
                h-12
                w-full
                rounded-xl
                inline-flex
                items-center
                justify-center
                gap-2
                font-semibold
                mt-8
              "
            >
              <span>Visit Live Site</span>

              <Image
                src={ArrowUpRightIcon}
                alt="Arrow up right"
                className="size-5"
              />
            </button>
          </a>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex justify-center items-center">
          <Image
            src={val?.image}
            alt={val?.title}
            loading="eager"
            quality={100}
            className="
              w-full
              max-w-full
              h-auto
              object-contain
            "
          />
        </div>

      </div>
  </Card>
  ))}
</div>

  </div>
  </section>
);
};


