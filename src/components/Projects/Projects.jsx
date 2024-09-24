import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import AddProjet from "./AddProjet";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [addProject, setAddProject] = useState(false);

  const datas = [
    {
      title: "Add Blog and Login Functionality to React/TypeScript Site",
      description:
        "I need an expert in React, TypeScript, Node.js, and PostgreSQL to enhance my website with a blog and login functionality. The project entails: - Implementing a login system for Admins to create, edit, and manage blogs. - Using Node.js (TypeScript) and PostgreSQL for the backend. - Designing a user-friendly admin dashboard for blog management. - Incorporating a Markdown editor for creating and editing blogs. The authentication method required is simple: Email and password only. There are no user roles",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "Self-Service Driver Registration App Development",
      description:
        "We are seeking an experienced developer to create a self-service application that allows drivers to register on-site, as well as to develop a dashboard for monitoring processes. The application should be multilingual and enable driver registration in various languages. The technology for this project is Blazor .NET. Requirements: • Experience with Blazor .NET • Experience in creating monitoring dashboards and self-service systems • Ability to collaborate and communicate in a remote project Please send us your",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "E-commerce Site Technical Specification Writing",
      description:
        "I'm looking for a professional with experience in writing technical specifications for e-commerce website development. The site will have the same features like website below : (please use translator to understand) Please review all features of this website as user and registered customer and specialist. Ideal candidates would have a strong background in e-commerce development, understanding of key e-commerce features, and excellent technical writing skills.",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "React Frontend Developer with Blockchain Expertise",
      description:
        "I'm developing a web application and I'm in need of a skilled frontend developer with extensive experience in blockchain technology, particularly in cryptocurrency integrations. The application is built on the React framework. Key Requirements: - Proficiency in React with a solid portfolio of web applications - Extensive experience with blockchain technology, specifically with cryptocurrency integrations - Strong understanding of frontend development principles - Ability to deliver clean, maintainable code Ideal",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "Odoo Events, send ticket to costumer via WhatsApp",
      description:
        "Are you able to make Odoo Events send the Event QR AUTOMATICALLY to the costumer? Workflow: User goes to website registers to event and enters whasapp NUMBER Pays via third party (just using testing patments for now) Odoo sends the event ticket QR via Whastapp Automatically CAn you do this? is Yes apply, will only pay once that workflow works. I can purchase any neccessary modules and setup META etc. Please explain your plan Settings: Odoo 17.0+e (Enterprise Edition). PAID VERSION",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "Virtual Assistant: don't bid without US",
      description:
        "This needs native English. I'm seeking a versatile Virtual Assistant to support various tasks. Key Responsibilities: - Handling Administrative Tasks: Organizing schedules, managing emails, and other office duties. - Customer Support: Assisting with client inquiries and providing quality service. - Social Media Management: Overseeing our social media presence and engagement. Ideal Candidate: - Bilingual Support: Ability to communicate in multiple languages is a plus. - Experience Level: All levels",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "Add Blog and Login Functionality to React/TypeScript Site 1",
      description:
        "I need an expert in React, TypeScript, Node.js, and PostgreSQL to enhance my website with a blog and login functionality. The project entails: - Implementing a login system for Admins to create, edit, and manage blogs. - Using Node.js (TypeScript) and PostgreSQL for the backend. - Designing a user-friendly admin dashboard for blog management. - Incorporating a Markdown editor for creating and editing blogs. The authentication method required is simple: Email and password only. There are no user roles",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "Self-Service Driver Registration App Development 2",
      description:
        "We are seeking an experienced developer to create a self-service application that allows drivers to register on-site, as well as to develop a dashboard for monitoring processes. The application should be multilingual and enable driver registration in various languages. The technology for this project is Blazor .NET. Requirements: • Experience with Blazor .NET • Experience in creating monitoring dashboards and self-service systems • Ability to collaborate and communicate in a remote project Please send us your",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "E-commerce Site Technical Specification Writing 3",
      description:
        "I'm looking for a professional with experience in writing technical specifications for e-commerce website development. The site will have the same features like website below : (please use translator to understand) Please review all features of this website as user and registered customer and specialist. Ideal candidates would have a strong background in e-commerce development, understanding of key e-commerce features, and excellent technical writing skills.",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "React Frontend Developer with Blockchain Expertise 4",
      description:
        "I'm developing a web application and I'm in need of a skilled frontend developer with extensive experience in blockchain technology, particularly in cryptocurrency integrations. The application is built on the React framework. Key Requirements: - Proficiency in React with a solid portfolio of web applications - Extensive experience with blockchain technology, specifically with cryptocurrency integrations - Strong understanding of frontend development principles - Ability to deliver clean, maintainable code Ideal",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "Odoo Events, send ticket to costumer via WhatsApp 5",
      description:
        "Are you able to make Odoo Events send the Event QR AUTOMATICALLY to the costumer? Workflow: User goes to website registers to event and enters whasapp NUMBER Pays via third party (just using testing patments for now) Odoo sends the event ticket QR via Whastapp Automatically CAn you do this? is Yes apply, will only pay once that workflow works. I can purchase any neccessary modules and setup META etc. Please explain your plan Settings: Odoo 17.0+e (Enterprise Edition). PAID VERSION",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
    {
      title: "Virtual Assistant: don't bid without US 6",
      description:
        "This needs native English. I'm seeking a versatile Virtual Assistant to support various tasks. Key Responsibilities: - Handling Administrative Tasks: Organizing schedules, managing emails, and other office duties. - Customer Support: Assisting with client inquiries and providing quality service. - Social Media Management: Overseeing our social media presence and engagement. Ideal Candidate: - Bilingual Support: Ability to communicate in multiple languages is a plus. - Experience Level: All levels",
      category: "web-development",
      status: "Incomplete",
      deadline: "7 days left",
    },
  ];

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
      <div className="flex flex-wrap gap-4 my-6">
        {datas.map((data) => (
          <ProjectItem key={data.title} data={data} />
        ))}
      </div>

      {addProject && <AddProjet open={addProject} setOpen={setAddProject} />}
    </div>
  );
};

export default Projects;
