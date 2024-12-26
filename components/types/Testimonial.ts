export interface Testimonial {
   content: string;
   author: string;
   role: string;
   image: string;
   status?: 'active' | 'inactive';
   id?: string;
 }