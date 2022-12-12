import Link from "next/link";

export const Header = () => {
  return (
    <header className="header p-5">
      <Link href="/">
        <a className="title text-2xl md:fixed font-black text-black">
          Unconditional.
        </a>
      </Link>
    </header>
  );
};
