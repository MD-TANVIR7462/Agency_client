import { Service } from "@/components/types/services";
import {
    Code2,
    Smartphone,
    Globe,
    Database,
    Cloud,
    Shield,
    
  } from "lucide-react";


  // const services = [
  //   {

  //     gradient: "bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500",
  //   },
  //   {
  //     icon: Palette,
  //     title: "UI/UX Design",
  //     description:
  //       "Create intuitive and engaging user experiences that delight your customers and drive conversions.",
  //     gradient: "bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500",
  //   },
  //   {
  //     icon: Globe2,
  //     title: "Digital Strategy",
  //     description:
  //       "Develop comprehensive digital strategies that align with your business goals and market demands.",
  //     gradient: "bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500",
  //   },
  //   {
  //     icon: Cpu,
  //     title: "AI Solutions",
  //     description:
  //       "Leverage artificial intelligence to automate processes and gain valuable business insights.",
  //     gradient: "bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500",
  //   },
  //   {
  //     icon: BarChart3,
  //     title: "Data Analytics",
  //     description:
  //       "Transform raw data into actionable insights that drive informed business decisions.",
  //     gradient: "bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500",
  //   },
  //   {
  //     icon: Shield,
  //     title: "Cyber Security",
  //     description:
  //       "Protect your digital assets with enterprise-grade security solutions and best practices.",
  //     gradient: "bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500",
  //   },
  // ];
  
  export const services: Service[] = [
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
      // gradient: "bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500",
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
      shortDescription:
        "Beautiful, intuitive interfaces that users love.",
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
      shortDescription:
        "Scalable database architecture and optimization.",
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
      shortDescription:
        "Cloud infrastructure and deployment solutions.",
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
      shortDescription:
        "Comprehensive security audits and implementation.",
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