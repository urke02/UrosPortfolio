"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("loading");
    setMessage("");

    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("Message was not sent. Please try again.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage("Message sent successfully.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-[20px] leading-[30px] mb-[24px] font-medium">
        Let’s Work Together
      </h2>
      <div>
        <label htmlFor="name" className="block mb-[8px] mt-[8px] font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border border-gray-400 w-[700px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-[16px] leading-[24px] h-[42px] rounded-[12px]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-[8px] mt-[8px] font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-gray-400 w-[700px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-[16px] leading-[24px] h-[42px] rounded-[12px]"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-[8px] mt-[8px] font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="border border-gray-400 w-[700px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] text-[16px] leading-[24px] h-[120px] rounded-[12px]"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="pt-[12px] pr-[24px] pb-[12px] pl-[24px] text-[#fff] bg-[#000] w-[153px] rounded-[12px] mt-3 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>

      {message ? (
        <p className="mt-4 text-[16px] leading-[24px]">{message}</p>
      ) : null}
    </form>
  );
}
