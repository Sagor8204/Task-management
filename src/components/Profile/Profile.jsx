import React from "react";
import MyProfile from "./MyProfile";
import Skills from "./Skills";
import EditProfile from "./EditProfile";

const Profile = () => {
  return (
    <div className="px-8 py-8 flex gap-10 justify-between">
      <div className="w-full">
        <MyProfile />
        <div className="flex gap-4 items-start">
          <Skills />
          <EditProfile />
        </div>
      </div>
      <div className="w-[390px] h-screen border border-gray-300"></div>
    </div>
  );
};

export default Profile;
