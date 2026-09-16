import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg"


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
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1 "  >
        {/*TO GIVE GRADIENT EFFECT TO THE SIXDES */}
        <div className="flex [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]">

    <div className="flex gap-12 whitespace-nowrap">
      {words.map((word,index) => (
        <div
         key={`${word}-${index}`}
         className="inline-flex gap-4 items-center"
        >
      <span
       className="text-gray-900 uppercase font-extrabold text-sm"
       >{word}</span>
      <Image
        src={StarIcon}
        alt="Star"
        className="size-6 brightness-0  -rotate-12"
  style={{
    filter:
      "brightness(0) saturate(100%) invert(3%) sepia(20%) saturate(1000%) hue-rotate(180deg) brightness(95%) contrast(105%)",
  }}
        />
        </div>
      ))}
    </div>

    </div>

    </div>
    </section>
  );
};


export default TapeSection;