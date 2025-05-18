export interface Testimonial {
  _id?: string;
  content: string,
    author: string,
    role?: string,
    image:string
    isActive?: boolean,
    isDeleted?:boolean,
 }