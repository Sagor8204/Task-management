import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  totalItems,
  firstItem,
  lastItem,
}) => {
  // handle next and previous button
  const goNextPage = () => setCurrentPage((prev) => prev + 1);
  const goPrevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="flex items-center justify-between py-3">
      <h3 className="pl-2 font-normal">
        Showing {firstItem + 1} to {lastItem} of {totalItems} entries
      </h3>

      <div className="flex gap-3 pr-3 items-center">
        <button
          onClick={goPrevPage}
          className="text-[20px] gray_text_color add_project px-3 py-[6px] rounded-md bg-white transition-all duration-300"
          disabled={currentPage === 1}
        >
          <IoIosArrowBack />
        </button>
        <span className="gray_text_color text-lg">{currentPage}</span>
        <button
          onClick={goNextPage}
          className="text-[20px] gray_text_color add_project px-3 py-[6px] rounded-md bg-white transition-all duration-300"
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
