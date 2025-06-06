import { Eye, Trash2 } from "lucide-react";
import { Testimonial } from "@/components/types/Testimonial";

interface TestimonialsTableProps {
  testimonials: Testimonial[];
  onViewDetails: (testimonial: Testimonial) => void;
  onStatusChange: (id: string, status: "active" | "inactive") => void;
  onDelete: (id: string) => void;
}

export function TestimonialsTable({ testimonials, onViewDetails, onStatusChange, onDelete }: TestimonialsTableProps) {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm ring-1 ring-purple-500/20">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-purple-400/20">
            <th className="p-4 text-left text-purple-400">Author</th>
            <th className="p-4 text-left text-purple-400">Role</th>
            <th className="p-4 text-left text-purple-400 hidden lg:block">Content</th>
            <th className="p-4 text-left text-purple-400">Status</th>
            <th className="p-4 text-left text-purple-400">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-400/10 ">
          {Array.isArray(testimonials) &&
            testimonials?.map((testimonial) => (
              <tr key={testimonial?._id as string} className="hover:bg-purple-400/5 transition-colors duration-150">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-400/20 hidden sm:block"
                    />
                    <span className="font-medium text-white text-sm truncate">{testimonial.author}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-300 truncate">{testimonial.role}</td>
                <td className="p-4 text-gray-300 hidden md:block">
                  <p className="truncate max-w-md">{testimonial.content}</p>
                </td>
                <td className="p-4">
                  <select
                    className="bg-gray-900 text-white border border-purple-400/40 rounded px-2 py-1 cursor-pointer"
                    onChange={(e) =>
                      onStatusChange(testimonial?._id as string, e.target.value as "active" | "inactive")
                    }
                    defaultValue={testimonial.isActive === true ? "active" : "inactive"}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onViewDetails(testimonial)}
                      className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors "
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(testimonial?._id as string)}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors "
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
