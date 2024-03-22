import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar flex w-full p-5 justify-between">
      <Link href={"/"} className="logo flex items-center gap-2.5">
        <img src="./profile.svg" alt="logo" />
        <span>Scientists Catalog</span>
      </Link>
      <div className="icons flex items-center gap-4">
        <img src="./search.svg" alt="search-icon" />
      </div>
    </div>
  );
};

export default Navbar;
