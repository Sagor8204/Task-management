import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import ShowAndSearch from "./ShowAndSearch";
import Pagination from "./Pagination";
import { datas } from "./data";

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchData, setSearchData] = useState([]);

  // i am searching the data by project title on time
  useEffect(() => {
    if (searchKeyword.length > 0) {
      const filterData = datas.filter((data) =>
        data.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );

      setSearchData(filterData);
    } else {
      setSearchData([]);
    }
  }, [searchKeyword]);

  // calculate the indexes for slicing the data
  const indexofLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexofLastItem - itemsPerPage;
  const items = datas.slice(indexOfFirstItem, indexofLastItem);

  // calculate total pages
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  // i am checking if search the data have in serchData then i will show the searchData otherwise i will show the items data that's i am getting by perpageitem for pagination.
  const filterItem = searchData.length > 0 ? searchData : items;

  // checking the lastItem while searchData avilable will be show the searchData length and while not avilable searchData then will be show as a last item indexOfLastItem
  const lastItem = searchData.length > 0 ? searchData.length : indexofLastItem;

  return (
    <div className="my-3 w-4/5">
      {/* here is show and search project you can show a page 10,25,50,100 project */}
      <div className="mb-3 bg-white py-2 px-4 rounded-md">
        <ShowAndSearch
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
      <div className="bg-white rounded-md h-[528px] overflow-y-scroll">
        <table className="project_table table-auto w-full">
          <thead className="sticky top-0 left-0 right-0 bottom-0 bg-white shadow-md">
            <tr>
              <th className="pl-4">Project Name</th>
              <th>Start Date</th>
              <th>Deadline</th>
              <th>Descripton</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filterItem.map((data) => (
              <ProjectItem key={data.title} data={data} />
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination here */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={datas.length}
        firstItem={indexOfFirstItem}
        lastItem={lastItem}
      />
    </div>
  );
};

export default ProjectList;
