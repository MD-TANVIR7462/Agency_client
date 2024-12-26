"use client";

import { Testimonial } from '@/components/types/Testimonial';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Trash2 } from 'lucide-react';


interface TestimonialCardProps {
  testimonial: Testimonial;
  onViewDetails: (testimonial: Testimonial) => void;
  onStatusChange: (testimonial: Testimonial, status: 'active' | 'inactive') => void;
  onDelete: (testimonial: Testimonial) => void;
}

export function TestimonialCard({ 
  testimonial, 
  onViewDetails,
  onStatusChange,
  onDelete
}: TestimonialCardProps) {
  const isActive = testimonial.status === 'active';

  return (
    <div className={`bg-gray-900/50 rounded-lg p-6 space-y-4 transition-all duration-200 ${
      isActive ? 'border border-purple-400/20' : 'border border-red-400/20 opacity-60'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className={`w-12 h-12 rounded-full object-cover ring-2 ${
              isActive ? 'ring-purple-400/40' : 'ring-red-400/40'
            }`}
          />
          <div>
            <h3 className="font-semibold text-white">{testimonial.author}</h3>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        <Badge 
          variant="outline" 
          className={isActive 
            ? 'border-purple-400 text-purple-400' 
            : 'border-red-400 text-red-400'
          }
        >
          {isActive ? 'Active' : 'Inactive'}
        </Badge>
      </div>

      <p className="text-sm line-clamp-3 text-gray-300">{testimonial.content}</p>

      <div className="flex items-center justify-between pt-2">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onStatusChange(testimonial, isActive ? 'inactive' : 'active')}
            className={isActive 
              ? 'border-red-400/20 text-red-400 hover:bg-red-400/10'
              : 'border-purple-400/20 text-purple-400 hover:bg-purple-400/10'
            }
          >
            {isActive ? 'Deactivate' : 'Activate'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(testimonial)}
            className="border-red-400/20 text-red-400 hover:bg-red-400/10"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
        <button
          onClick={() => onViewDetails(testimonial)}
          className="p-2 text-purple-400 hover:bg-purple-400/10 rounded-full transition-colors"
          title="View Details"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}