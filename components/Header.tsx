import Link from "next/link";

export const Header = () => {
  return (
    <header className="header p-5 border-purple-50">
      <Link href="/">
        <a className="title text-xl font-black text-black">Unconditional.</a>
      </Link>
    </header>
  );
};
