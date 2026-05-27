import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between w-full h-[61px] m-0 text-[16px] leading-[24px] text-[#000 b-] border-b border-black/10">
        <div className="ml-64">
          <Link href="/">
            <Image
              src="/logo/angle-brackets.webp"
              width={60}
              height={60}
              alt="angle-brackets"
            />
          </Link>
        </div>

        <div className="mr-64">
          <Link
            href="/"
            className="m-2 inline-block w-[92px] border rounded-[10px] p-2 text-center hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="m-2 inline-block w-[92px] border rounded-[10px] p-2 text-center hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="m-2 inline-block w-[92px] border rounded-[10px] p-2 text-center hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
