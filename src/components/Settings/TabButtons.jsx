import React from "react";

const TabButtons = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center gap-3 shadow-sm mb-2">
      <button
        onClick={() => setActiveTab("general")}
        className={`${
          activeTab === "general" && "border_color"
        } py-1 border-b-[3px]`}
      >
        General
      </button>
      <button
        onClick={() => setActiveTab("billing")}
        className={`${
          activeTab === "billing" && "border_color"
        } py-1 border-b-[3px]`}
      >
        Billing
      </button>
      <button
        onClick={() => setActiveTab("members")}
        className={`${
          activeTab === "members" && "border_color"
        } py-1 border-b-[3px]`}
      >
        Members
      </button>
      <button
        onClick={() => setActiveTab("security")}
        className={`${
          activeTab === "security" && "border_color"
        } py-1 border-b-[3px]`}
      >
        Security
      </button>
      <button
        onClick={() => setActiveTab("notifications")}
        className={`${
          activeTab === "notifications" && "border_color"
        } py-1 border-b-[3px]`}
      >
        Notifications
      </button>
    </div>
  );
};

export default TabButtons;
