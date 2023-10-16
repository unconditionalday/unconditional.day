import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {
  hideTagline?: boolean;
}
export const Header: FunctionComponent<HeaderProps> = ({ hideTagline }) => {
  return (
    <header className="header text-center flex flex-col p-0 md:p-10">
      <Link href="/">
        <h1 className="title p-10 md:p-0 text-4xl md:text-8xl font-black">
          Unconditional.
        </h1>
      </Link>
      {!hideTagline && (
        <div className="flex flex-row justify-center items-center p-0 md:p-3 pb-10 md:pb-0">
          <h2 className="subtitle text-md md:text-xl">
            Give to your think an{" "}
          </h2>
          <Link href="/about">
            <div className="cursor-pointer font-bold text-sm md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border border-black rounded-lg p-3 block md:inline md:w-auto mx-2">
              Unconditional think
            </div>
          </Link>
        </div>
      )}
    </header>
  );
};
