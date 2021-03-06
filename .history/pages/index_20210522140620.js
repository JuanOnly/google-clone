import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-gray-700 text-sm">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://unsplash.com/t/people" />
        </div>
      </header>

      {/* Body */}
      <form>
        <Image
        src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-2015-present.jpg"
        height={100}
        width={300}

        />
      </form>

      {/* Footer */}
    </div>
  );
}
