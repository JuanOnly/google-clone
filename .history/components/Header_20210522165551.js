import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  return (
    <header>
      <Image
        src="https://www.google.com.co/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg items-center max-w-3xl">
        <input
          ref={searchInputRef}
          className="flex-grow w-full focus:outline-none"
          type="text"
        />
        <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
        onClick{() => (searchInputRef.current.value = "")} />
      </form>
    </header>
  );
}

export default Header;
