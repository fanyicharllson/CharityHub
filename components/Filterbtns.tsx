"use client";

// import { useState } from "react";

interface FilterBtnsProps {
  filters: string[];
  activeFilter: string;
  onFilterClick: (filter: string) => void;
}

const FilterBtns: React.FC<FilterBtnsProps> = ({
  filters,
  activeFilter,
  onFilterClick,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`py-2 px-4 rounded-lg shadow-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
            activeFilter === filter
              ? "bg-teal-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBtns;
