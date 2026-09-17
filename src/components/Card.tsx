import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge';
import grainImage from "@/assets/images/grain.jpg"


const Card: React.FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  children,
  ...other
}) => {
  return (
    <div
      className={twMerge(
        `
        relative
        isolate
        overflow-hidden
        rounded-3xl
        bg-gray-800

        after:content-['']
        after:absolute
        after:inset-0
        after:z-10
        after:outline-2
        after:-outline-offset-2
        after:rounded-3xl
        after:outline-white/20
        `,
        className
      )}
      {...other}
    >
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-5
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />

      {children}
    </div>
  );
};

export default Card;