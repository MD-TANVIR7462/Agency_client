import { getData } from "@/server/ServerActions";
import React from "react";
import SettingsIndex from "./settingsIndex";

const WebsiteSettings = async () => {
  const settingsData = (await getData("settings"))?.data?.[0];

  return <div>{settingsData && <SettingsIndex settings={settingsData} />}</div>;
};

export default WebsiteSettings;
