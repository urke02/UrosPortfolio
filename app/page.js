import { Fragment } from "react";

const info = [
  {
    id: 1,
    title: "Frontend Development",
    text: "I turn ideas into clean, responsive, and user-friendly web interfaces using modern frontend technologies.",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    text: "I create modern and responsive websites that look great on phones, tablets, and computers.",
  },
  {
    id: 3,
    title: "Clean & Modern Code",
    text: "I write clean, organized, and efficient code with a focus on good design and user experience.",
  },
];

export default function Home() {
  return (
    <Fragment>
      <div>
        <div className="mt-36">
          <h1 className="mb-[24px] font-bold text-[24px] text-center leading-[36px]">
            Hello, I’m Uroš
          </h1>
        </div>
        <div>
          <p className="mx-auto text-center w-[750px] text-[16px] leading-[24px] text-[#504f4f]">
            Welcome to my personal website. Here you can learn more about me, my
            skills, projects, and work in the field of web design and
            programming. The goal of this website is to present my knowledge,
            experience, and ideas in a simple and modern way.
          </p>
        </div>
      </div>

      <div className="flex gap-6 mt-12 justify-center">
        {info.map((item) => (
          <div
            className="w-[320px] border-1 p-[24px] rounded-[10px]"
            key={item.id}
          >
            <h2 className="text-[18px] leading-[27px] mb-[12px] font-medium">
              {item.title}
            </h2>
            <p className="leading-[24px] text-[16px] text-[#504f4f]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
