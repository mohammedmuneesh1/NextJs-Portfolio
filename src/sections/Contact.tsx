import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
export const ContactSection = () => {
  return (
    <section className=" py-16 md:py-24">
      <div className="custom-layout">
  <div
    className="
      mx-auto
      rounded-[28px]
      bg-gradient-to-r
      from-emerald-300
      via-cyan-400
      to-sky-500
      px-10
      py-8
      md:px-11
      md:py-9
      flex
      flex-col
      md:flex-row
      md:items-center
      md:justify-between
      gap-8
    "
  >
    {/* Text */}
    <div className="max-w-3xl">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-950">
        Let&apos;s create something amazing together
      </h2>

      <p className="mt-3 text-base md:text-lg text-gray-950/80 leading-relaxed 
      ">
        Ready to bring your next project to life? Let&apos;s connect and
        discuss how I can help you achieve your goals.
      </p>
    </div>

    {/* Button */}
    <a
      href="#contact"
      className="
      group
        shrink-0
        inline-flex
        items-center
        justify-center
        gap-3
        h-14
        px-7
        rounded-xl
        text-white
        font-semibold
        transition
      "
    >
      <span>Contact Me</span>
      <span className="text-xl">
             <Image
                src={ArrowUpRightIcon}
                alt="Arrow up right"
                className="size-5 invert"
              />
      </span>
    </a>
  </div>
      </div>
</section>
  );
};
