"use client"
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg"
import {motion} from "framer-motion";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

 const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        {/* Edge fade mask */}
        <div className="flex [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]">
          <motion.div
            className="flex gap-12 flex-none whitespace-nowrap pr-12"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Render the word list TWICE, back to back */}
            {[...words, ...words].map((word, index) => (
              <div
                key={`${word}-${index}`}
                className="inline-flex gap-4 items-center"
              >
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <Image
                  src={StarIcon}
                  alt="Star"
                  className="size-6 -rotate-12"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(3%) sepia(20%) saturate(1000%) hue-rotate(180deg) brightness(95%) contrast(105%)",
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default TapeSection;