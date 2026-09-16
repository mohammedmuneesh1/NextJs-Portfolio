import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import Image from "next/image";
const Footer = () => {
  const socialLinks = [
  {
    name: "YouTube",
    link: "#",
  },
  {
    name: "Twitter",
    link: "#",
  },
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "LinkedIn",
    link: "#",
  },
];


  return (

    <footer className="w-full max-w-full pt-16 md:pt-24">
      <section className="custom-layout mx-auto  ">
      <div className="
      border-t border-white/20
      flex  flex-col items-center
       justify-between gap-5 px-6 py-6 md:flex-row">
        
        {/* Copyright */}
        <p className="text-sm text-white/35">
          © 2024. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-7">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.link}
      className="group flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
    >
      <span>{social.name}</span>

      <Image
        src={ArrowUpRightIcon}
        alt="Arrow up right"
        className="size-5 invert opacity-80 group-hover:opacity-100"
      />
    </a>
  ))}
</div>
      </div>
      </section>
    </footer>
  );
};


export default Footer;