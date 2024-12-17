"use client";

import { usePathname } from "next/navigation";
import FAQSection from "./FAQSection";

const FAQ = () => {
  const Path = usePathname();
  return <FAQSection path={Path}/>
};

export default FAQ
