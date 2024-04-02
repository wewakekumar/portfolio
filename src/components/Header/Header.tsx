import Link from "next/link";
import Search from "../Input/Search";

const Header = () => {
  return (
    <header className="flex justify-between w-full">
      <div className="text-primary">
        <Link href="/">Vivek Kumar</Link>
      </div>
      <nav className="flex list-none gap-x-12">
        <li className="hover:text-primary">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/experiences">Experience</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/contact">Contact</Link>
        </li>
      </nav>
      <div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
