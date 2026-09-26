import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center
     relative top-9 z-30">
      <nav
       className="flex gap-1 p-0.5 border border-white/15  rounded-full bg-white/10 backdrop-blur ">
        <a
         href="#" 
         className="nav-item"
         >Home</a>
        <Link 
        href="#projects"
         className="nav-item"
        >Projects</Link>
        <Link href="/about"
        className="nav-item"
        >About</Link>
            <Link href="/contact"
            className="nav-item bg-white text-gray-900
             hover:bg-white/70 hover:text-gray-900"
            >Contacts</Link>
      </nav>
    </div>
  );
};
