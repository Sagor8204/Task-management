import { CiStar } from "react-icons/ci";
import { LuFileSpreadsheet } from "react-icons/lu";
import { GoProjectRoadmap } from "react-icons/go";
import vector1 from "../../assets/Vector.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";

export const tasksProjects = [
  {
    icon: <CiStar />,
    title: "Task Completed",
    quantity: "08",
    img: vector1,
    more: 10,
    duration: "from last week",
  },
  {
    icon: <LuFileSpreadsheet />,
    title: "New Task",
    quantity: "10",
    img: vector2,
    more: 10,
    duration: "from last week",
  },
  {
    icon: <GoProjectRoadmap />,
    title: "Project Done",
    quantity: "08",
    img: vector3,
    more: 10,
    duration: "from last week",
  },
];
