import React, { useState } from "react";
import TabButtons from "./TabButtons";
import General from "./General";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <div className="px-8 py-8">
      <h3 className="gray_text_color mb-2">Account Settings</h3>
      {/* settings tab button should be in the top section */}
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "general" ? (
        <General />
      ) : activeTab === "billing" ? (
        "billing"
      ) : activeTab === "members" ? (
        "members"
      ) : activeTab === "security" ? (
        "security"
      ) : activeTab === "notifications" ? (
        "notifications"
      ) : (
        ""
      )}
    </div>
  );
};

export default Settings;
