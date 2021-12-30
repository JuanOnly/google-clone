import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  return (
    <header>
      <Image
        src="https://www.google.com.co/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <form className="flex border border-gray-200">
        <input
          ref={searchInputRef}
          className="flex-grow w-full focus:outline-none"
          type="text"
        />
      </form>
    </header>
  );
}

export default Header;
