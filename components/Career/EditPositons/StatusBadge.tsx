import { ApplicationStatus } from "@/components/types/career";


type StatusBadgeProps = {
  status: ApplicationStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    pending: "bg-yellow-500/20 text-yellow-400",
    selected: "bg-green-500/20 text-green-400",
    rejected: "bg-red-500/20 text-red-400",
  };

  const labels = {
    pending: "Pending",
    selected: "Selected",
    rejected: "Rejected",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
