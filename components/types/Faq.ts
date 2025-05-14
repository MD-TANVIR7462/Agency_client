import { JSX } from "react";

export interface FAQ {
  map(arg0: (faq: any, index: any) => JSX.Element): import("react").ReactNode;
  answer: string;
  question: string;
  isActive?: boolean;
  isDeleted?: boolean;
}
