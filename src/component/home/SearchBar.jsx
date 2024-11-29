import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
 

  return (
    <div className="flex  mt-8 items-center shadow-md rounded bg-white overflow-hidden max-w-lg l lg:mx-0 mx-auto">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search by keyword"
        className="flex-1 px-4 py-3 text-gray-600 focus:outline-none"
      />

      {/* Dropdown */}
      

      {/* Search Button */}
      <button
        className="bg-[#0bb990] px-3 py-4 flex items-center justify-center text-white hover:opacity-90"
        aria-label="Search"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
