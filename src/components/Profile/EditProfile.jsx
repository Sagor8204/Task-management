import React from "react";

const EditProfile = () => {
  return (
    <div className="w-4/6 rounded-md p-4 bg-white">
      <h3 className="gray_text_color mb-3">Edit Profile</h3>

      <form>
        <div className="flex gap-2 mb-3">
          <div className="w-full">
            <label className="mb-1 inline-block text-[15px]" htmlFor="username">
              User Name
            </label>
            <input
              className="w-full search_input rounded-md  px-3 py-2 outline-none"
              type="text"
            />
          </div>
          <div className="w-full">
            <label className="mb-1 inline-block text-[15px]" htmlFor="email">
              Email
            </label>
            <input
              className="w-full search_input rounded-md  px-3 py-2 outline-none"
              type="email"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-3">
          <div className="w-full">
            <label
              className="mb-1 inline-block text-[15px]"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="w-full search_input rounded-md  px-3 py-2 outline-none"
              type="text"
            />
          </div>
          <div className="w-full">
            <label className="mb-1 inline-block text-[15px]" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="w-full search_input rounded-md  px-3 py-2 outline-none"
              type="text"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="mb-1 inline-block text-[15px]" htmlFor="address">
            Address
          </label>
          <input
            className="w-full search_input rounded-md  px-3 py-2 outline-none"
            type="text"
          />
        </div>
        <div className="flex gap-2 mb-3">
          <div>
            <label className="mb-1 inline-block text-[15px]" htmlFor="city">
              City
            </label>
            <input
              className="w-full search_input rounded-md  px-3 py-2 outline-none"
              type="text"
            />
          </div>
          <div>
            <label
              className="mb-1 inline-block text-[15px]"
              htmlFor="postal-code"
            >
              Postal Code
            </label>
            <input
              className="w-full search_input rounded-md  px-3 py-2 outline-none"
              type="text"
            />
          </div>
          <div>
            <label className="mb-1 inline-block text-[15px]" htmlFor="country">
              Country
            </label>
            <input
              className="w-full search_input rounded-md  px-3 py-2 outline-none"
              type="text"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="mb-1 inline-block text-[15px]" htmlFor="about me">
            About Me
          </label>
          <textarea className="resize-none w-full h-[120px] search_input rounded-md px-3 py-2 outline-none"></textarea>
        </div>
        <button className="add_project px-4 py-2 rounded-md transition-all duration-300 text-sm">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
