import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 bg-blue-400">
      <div className="flex space-x-3">
        <Link
          href="/"
          className="bg-white px-2 rounded-md text-blue-400 font-semibold"
        >
          Back
        </Link>
      </div>
    </header>
  );
};

export default Header;
