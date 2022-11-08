'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


const Search = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn px-2 py-1 bg-blue-600 rounded-md text-white">
        Search
      </button>
    </form>
  );
};

export default Search;
