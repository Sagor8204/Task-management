import React from "react";
import avatar from "../../assets/avatar.jpg";

const MyProfile = () => {
  return (
    <div className="bg-white px-4 py-4 rounded-md mb-4">
      <h3 className="gray_text_color mb-3">My Profile</h3>

      <div className="flex gap-8">
        <img
          className="w-48 h-60 avatar rounded-xl"
          src={avatar}
          alt="profile_image"
        />
        <div>
          <h2 className="text-2xl mb-1">Sagor Miah</h2>
          <span className="text-[15px] mb-2 inline-block">
            sagormiah497@gmail.com
          </span>
          <p className="text-[15px] mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla et
            reiciendis nisi asperiores, obcaecati veniam minus fugit.Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Nulla et
            reiciendis nisi asperiores, obcaecati veniam minus fugit.Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Nulla et
            reiciendis nisi asperiores, obcaecati veniam minus fugit.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <button className="add_project px-5 py-2 transition-all duration-300 rounded-md bg-white text-[15px]">
              Follow
            </button>
            <button className="add_project px-5 py-2 transition-all duration-300 rounded-md bg-white text-[15px]">
              Message
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="profile_footer_card py-3 px-4 rounded-md">
              <span className="text-sm">City</span>
              <h2 className="text-2xl font-normal">Rangpur</h2>
            </div>
            <div className="profile_footer_card py-3 px-4 rounded-md">
              <span className="text-sm">Awards</span>
              <h2 className="text-2xl font-normal">13</h2>
            </div>
            <div className="profile_footer_card py-3 px-4 rounded-md">
              <span className="text-sm">Experience</span>
              <h2 className="text-2xl font-normal">10+</h2>
            </div>
            <div className="profile_footer_card py-3 px-4 rounded-md">
              <span className="text-sm">Total Earnings</span>
              <h2 className="text-2xl font-normal">$8705</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
