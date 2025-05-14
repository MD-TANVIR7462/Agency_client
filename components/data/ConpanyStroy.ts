import { Rocket, Eye } from 'lucide-react';
import { CompanyInfo } from '../types/ConpanyStroy';


export const initialCompanyInfo: CompanyInfo = {
  stats: {
    years: "10",
    projects: "500",
    teamSize: "50",
    satisfaction: "98"
  },
  story: {
    title: "Our Story",
    content: "Founded in 2014, we've grown from a small team of passionate developers to a full-service software agency. Our journey has been driven by a simple mission: to help businesses thrive in the digital age through innovative technology solutions and exceptional service."
  },
  mission: {
    title: "Our Mission",
    content: "To empower businesses through innovative digital solutions that drive growth, efficiency, and competitive advantage. We strive to deliver exceptional value through cutting-edge technology and unparalleled expertise.",
    icon: Rocket
  },
  vision: {
    title: "Our Vision",
    content: "To be the leading force in digital transformation, recognized globally for our innovative solutions, technical excellence, and commitment to client success. We aim to shape the future of technology while maintaining the highest standards of quality and integrity.",
    icon: Eye
  }
};