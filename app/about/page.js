import Image from "next/image";
import { Fragment } from "react";

const technologies = [
  {
    src: "/logo/html5.webp",
    title: "HTML5",
  },
  {
    src: "/logo/css.webp",
    title: "CSS",
  },
  {
    src: "/logo/javascript.webp",
    title: "JavaScript",
  },
  {
    src: "/logo/react.webp",
    title: "React",
  },
  {
    src: "/logo/nextjs.webp",
    title: "NextJS",
  },
  {
    src: "/logo/tailwind.webp",
    title: "Tailwind CSS",
  },
  {
    src: "/logo/git.webp",
    title: "Git",
  },
  {
    src: "/logo/github.webp",
    title: "GitHub",
  },
];

export default function About() {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[768px] mt-6">
          <h1 className="text-[24px] leading-[36px] mb-[24px] font-medium">
            About Me
          </h1>
          <p className="leading-[24px] text-[16px] text-[#504f4f]">
            Hi, I’m Uroš, a frontend developer who enjoys creating modern,
            clean, and functional websites. I focus on building websites that
            are easy to use, visually appealing, and fully responsive on all
            devices.
            <br />
            <br />
            I work with technologies such as HTML, CSS, JavaScript, React,
            Next.js, and Tailwind CSS, turning ideas into quality web solutions.
            My goal is to combine good design, clean code, and a smooth user
            experience.
            <br />
            <br />
            I’m always ready for new challenges, learning new technologies, and
            working on projects that have a clear purpose and real value.
          </p>
        </div>
        <div className="bg-[#ECECF0] w-[768px] h-[160px] p-[24px] mt-[32px] rounded-[14px]">
          <h2 className="text-[18px] leading-[27px] mb-[16px]">My Approach</h2>
          <p className="text-[#504f4f] text-[16px] leading-[24px]">
            I believe that a good website should not only look modern, but also
            be simple, fast, and easy to use. My approach is focused on clean
            design, responsive layouts, and writing code that is organized,
            scalable, and easy to maintain.
          </p>
        </div>
        <div className="w-[768px]">
          <h2 className="mt-4 mb-4 text-center">Technologies I Use</h2>
          <div className="flex gap-8 m-2">
            {technologies.map((item) => (
              <div key={item.src} className="flex flex-col items-center">
                <Image src={item.src} alt={item.title} width={60} height={60} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
