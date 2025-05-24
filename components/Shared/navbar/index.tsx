import { getSettings } from "@/server/ServerActions";
import React from "react";
import { Navbar } from "./navbar";

const Navindex = async () => {
  const data = await getSettings();
  return <>{data && <Navbar name={data?.companyName} />}</>;
};

export default Navindex;
