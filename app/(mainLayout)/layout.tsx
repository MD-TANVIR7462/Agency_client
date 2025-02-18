
import type { Metadata } from "next";
import { MouseFollower } from "@/components/ui/mouse-follower";
import { Navbar } from "@/components/Shared/navbar";
import { Footer } from "@/components/Shared/footer";
import ScrollButton from "@/components/ScrollButton/ScrollButtonTop";



export const metadata: Metadata = {
  title: "SiSCOTEK",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
      <>
        <MouseFollower />
        <Navbar />
        <div className="bg-gray-900"> {children}</div>
        <ScrollButton />
        <Footer />
      </>

  );
}
