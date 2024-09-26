import React, { useState } from "react";

const ShowAndSearch = ({
  searchKeyword,
  setSearchKeyword,
  setItemsPerPage,
}) => {
  const onChangeHandler = (e) => {
    setItemsPerPage(e.target.value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <h3>Show</h3>
        <select
          onChange={onChangeHandler}
          className="outline-none px-2 search_input py-1 rounded-md"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>entries</span>
      </div>

      <div className="flex items-center gap-2">
        <span>Search:</span>
        <input
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="p-1 outline-none rounded-md search_input"
          type="text"
        />
      </div>
    </div>
  );
};

export default ShowAndSearch;
