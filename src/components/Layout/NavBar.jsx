import React, { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavBar = () => {
  const { user, logout, setUser } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    if (user) {
      logout()
        .then((res) => console.log("LogOut Success"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0">
      <div className="nav flex items-center py-2 justify-between shadow-sm px-3">
        <div className="flex items-center pl-10">
          <input
            className="search_input bg-transparent w-80 py-2 px-3 outline-none rounded-l-full"
            type="text"
            placeholder="Search your todo..."
          />
          <button className="search_button text-2xl w-[42px] flex items-center justify-center h-[42px] border-l-0 rounded-r-full">
            <IoIosSearch />
          </button>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <button className="text-[26px]">
            <IoMdNotificationsOutline />
          </button>
          <div className="text-[28px] w-8 h-8 profile rounded-full p-[2px] overflow-hidden cursor-pointer">
            <img
              className="w-8 h-8 rounded-full object-contain"
              src="https://static.vecteezy.com/system/resources/thumbnails/011/675/374/small_2x/man-avatar-image-for-profile-png.png"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
