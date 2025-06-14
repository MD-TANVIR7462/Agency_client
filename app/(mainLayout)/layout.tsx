import type { Metadata } from "next";
import { MouseFollower } from "@/components/ui/mouse-follower";

import { Footer } from "@/components/Shared/footer";
import ScrollButton from "@/components/ScrollButton/ScrollButtonTop";
import Navindex from "@/components/Shared/navbar";


export const metadata: Metadata = {
  title: "SiSCOTEK",
  description: "Your next web destination",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MouseFollower />
      <Navindex />
      <div className="bg-gray-900"> {children}</div>
      <ScrollButton />
      <Footer />
    </>
  );
}
