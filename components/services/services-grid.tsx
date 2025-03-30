"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./service-card";
import Tittle from "../Shared/Tittle";
import { Service } from "../types/services";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
} from "lucide-react";

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
}

export const ServicesGrid = ({ onServiceClick }: ServiceGridProps) => {
 const services: Service[] = [
    {
      id: "web-development",
      icon: Code2,
      title: "Custom Development",
      shortDescription:
        "Build scalable solutions with cutting-edge technologies tailored to your unique business needs.",
      fullDescription:
        "We create sophisticated web applications that drive business growth. Our development team combines technical expertise with creative problem-solving to deliver scalable, high-performance solutions that exceed expectations.",
      features: [
        "Custom Web Applications",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development",
        "Performance Optimization",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "GraphQL",
      ],
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: Smartphone,
      shortDescription:
        "Native and cross-platform mobile apps for iOS and Android.",
      fullDescription:
        "Transform your mobile presence with our expert app development services. We build intuitive, feature-rich mobile applications that provide seamless user experiences across all platforms.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Mobile UI/UX Design",
        "App Maintenance",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "AWS Amplify",
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      icon: Globe,
      shortDescription: "Beautiful, intuitive interfaces that users love.",
      fullDescription:
        "Our design team creates engaging digital experiences that captivate users and drive conversions. We combine aesthetics with functionality to build interfaces that are both beautiful and effective.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Framer",
        "Principle",
        "InVision",
      ],
    },
    {
      id: "database-solutions",
      title: "Database Solutions",
      icon: Database,
      shortDescription: "Scalable database architecture and optimization.",
      fullDescription:
        "We design and implement robust database solutions that ensure data integrity, security, and performance. Our expertise covers both SQL and NoSQL databases, optimized for your specific needs.",
      features: [
        "Database Design",
        "Performance Tuning",
        "Data Migration",
        "Backup Solutions",
        "High Availability",
        "Monitoring",
      ],
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "Elasticsearch",
        "Cassandra",
      ],
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      icon: Cloud,
      shortDescription: "Cloud infrastructure and deployment solutions.",
      fullDescription:
        "Leverage the power of cloud computing with our comprehensive cloud services. We help businesses migrate, optimize, and scale their infrastructure in the cloud.",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Serverless Architecture",
        "Auto-scaling Solutions",
        "Cost Optimization",
        "24/7 Monitoring",
      ],
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
    {
      id: "security",
      title: "Security Solutions",
      icon: Shield,
      shortDescription: "Comprehensive security audits and implementation.",
      fullDescription:
        "Protect your digital assets with our advanced security solutions. We provide comprehensive security assessments, implementation, and ongoing monitoring to keep your systems safe.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
        "Authentication Systems",
        "Data Encryption",
        "Security Training",
      ],
      technologies: [
        "OAuth 2.0",
        "JWT",
        "SSL/TLS",
        "WAF",
        "SIEM",
        "Zero Trust",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 ">
      <div className="absolute right-1/4 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Tittle tittle={"Our Services"} />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Comprehensive solutions to drive your digital transformation
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onClick={() => onServiceClick(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
