import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg"
import Card from "@/components/Card";

//the moving left animation implemented using pure css , check global.css 
const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
<section className="max-w-full w-full py-16 md:py-24">
<div className="custom-layout
  
">
<SectionHeader
eyebrow="Happy Clients"
title="What Clients Say about Me"
description="Don&apos;t just take my word for it. See what my clients have to say
    about my work."
/>
  

<div
  className="
    mt-11 lg:mt-20
    w-full
    overflow-hidden
    py-5
    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
  "
>
  <div
    className="
      flex
      w-max
      gap-8
      animate-[scroll_35s_linear_infinite]
      hover:[animation-play-state:paused]
    "
  >
    {[...testimonials, ...testimonials].map((testimonial, index) => (
      <Card
        key={`${testimonial.name}-${index}`}
        className="
          flex-none
          w-[350px]
          p-6
          md:p-8
          hover:-rotate-3
          transition
          duration-300
          !overflow-visible
        "
      >
        <div className="w-full">
          <div className="flex gap-4 items-center">

            <div className="size-20 bg-gray-700 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="size-full object-cover"
              />
            </div>

            <div>
              <div className="font-semibold">
                {testimonial.name}
              </div>

              <div className="text-sm text-white/40">
                {testimonial.position}
              </div>
            </div>

          </div>

          <p className="mt-4 text-sm text-left">
            {testimonial.text}
          </p>
        </div>
      </Card>
    ))}
  </div>
</div>

</div>
  </section>

);
};

