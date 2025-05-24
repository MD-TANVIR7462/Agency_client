import type { Metadata } from "next";
import { MouseFollower } from "@/components/ui/mouse-follower";

import { Footer } from "@/components/Shared/footer";
import ScrollButton from "@/components/ScrollButton/ScrollButtonTop";
import Navindex from "@/components/Shared/navbar";


export const metadata: Metadata = {
  title: "SiSCOTEK",
  description: "Your IT soluation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MouseFollower />
      <Navindex />
      <div className="-gray-900"> {children}</div>
      <ScrollButton />
      <Footer />
    </>
  );
}
