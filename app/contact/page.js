import Image from "next/image";
import { Fragment } from "react";
import ContactForm from "@/components/contact/ContactForm";

const contactOptions = [
  {
    src: "/logo/mail.webp",
    alt: "email logo",
    title: "Email",
    text: "tomicuros006@gmail.com",
  },
  {
    src: "/logo/telephone.webp",
    alt: "phone logo",
    title: "Phone",
    text: "+381617301198",
  },
  {
    src: "/logo/location.webp",
    alt: "location logo",
    title: "Location",
    text: "Subotica, Serbia",
  },
];

export default function Contact() {
  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <div className="mt-6">
          <h1 className="text-[24px] leading-[36px] mb-[24px]">Get in Touch</h1>
          <p className="text-[16px] leading-[24px] mb-[32px]">
            I’m always open to new opportunities, collaborations, and
            interesting projects. <br />
            Feel free to reach out through any of the contact options below.
          </p>
        </div>
        <div className="flex gap-6 w-[800px]">
          {contactOptions.map((item) => (
            <div
              key={item.src}
              className="w-64 p-4 border flex flex-col items-center rounded-[12px] border-gray-400"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="mb-4 font-medium ">{item.title}</h3>
              <p className="text-[#464545]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="w-[800px] mt-16 mb-8 border border-gray-400 p-[32px] rounded-[12px] flex flex-col items-center">
          <ContactForm />
        </div>
      </div>
    </Fragment>
  );
}
