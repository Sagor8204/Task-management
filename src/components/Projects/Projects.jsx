import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import AddProjet from "./AddProjet";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [addProject, setAddProject] = useState(false);

  return (
    <div className="px-8 py-8">
      <div className="flex justify-end">
        <div
          onClick={() => setAddProject(true)}
          className="flex items-center gap-2 cursor-pointer p-2 add_project rounded-md transition-all duration-300 w-fit"
        >
          <h2 className="text-[15px]">Add Project</h2>
          <FiPlus />
        </div>
      </div>

      {/* all project in the below */}
      <ProjectList />

      <AddProjet open={addProject} setOpen={setAddProject} />
    </div>
  );
};

export default Projects;
