"use client";

import { Eye, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Testimonial } from '@/components/types/Testimonial';


interface TestimonialsTableProps {
  testimonials: Testimonial[];
  onViewDetails: (testimonial: Testimonial) => void;
  onStatusChange: (testimonial: Testimonial, status: 'active' | 'inactive') => void;
  onDelete: (testimonial: Testimonial) => void;
}

export function TestimonialsTable({ 
  testimonials, 
  onViewDetails,
  onStatusChange,
  onDelete
}: TestimonialsTableProps) {
  return (
    <div className="w-full overflow-x-auto bg-gray-900/50 rounded-lg shadow-xl text-sm">
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
        <tbody className="divide-y divide-purple-400/10">
          {testimonials.map((testimonial) => (
            <tr 
              key={testimonial.id} 
              className="hover:bg-purple-400/5 transition-colors duration-150"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-400/20 "
                  />
                  <span className="font-medium text-white text-sm">{testimonial.author}</span>
                </div>
              </td>
              <td className="p-4 text-gray-300">{testimonial.role}</td>
              <td className="p-4 text-gray-300 hidden lg:block">
                <p className="truncate max-w-md">{testimonial.content}</p>
              </td>
              <td className="p-4">
                <Badge 
                  variant="outline" 
                  className={`${
                    testimonial.status === 'active'
                      ? 'border-purple-400 text-purple-400'
                      : 'border-red-400 text-red-400'
                  }`}
                >
                  {testimonial.status === 'active' ? 'Active' : 'Inactive'}
                </Badge>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onViewDetails(testimonial)}
                    className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(testimonial)}
                    className="p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
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