import MotionWraper from "@/components/Shared/MotionWraper";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950">
      <MotionWraper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-3 md:p-6"
      >
        {children}
      </MotionWraper>
    </div>
  );
}
