"use client"
import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Search, Share2 } from "lucide-react";
import TabButton from "./TabButton";

const tabs = [
  { id: "all", label: "All", icon: Share2 },
  { id: "web", label: "Web", icon: Code2 },
  { id: "seo", label: "SEO", icon: Search },
  { id: "graphics", label: "Graphics", icon: Palette },
];

interface TabListProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabList({ activeTab, onTabChange }: TabListProps) {
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const ele = tabListRef.current;
    if (!ele) return;

    let pos = { left: ele.scrollLeft, x: e.clientX };

    const mouseMoveHandler = (e: MouseEvent) => {
      const dx = e.clientX - pos.x;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <motion.div
      ref={tabListRef}
      className="no-scrollbar flex touch-pan-x overflow-x-auto scroll-smooth pb-4"
      onMouseDown={handleMouseDown}
    >
      <div className="flex space-x-2 px-4 md:justify-center">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            label={tab.label}
            icon={tab.icon}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}