"use client";


import { ServicesHero } from "@/components/services/services-hero";
import { Users, Code2, Trophy, Target, ArrowRight } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Delivered", value: "500+" },
  { label: "Team Members", value: "50+" },
  { label: "Client Satisfaction", value: "98%" },
];

const values = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: "Technical Excellence",
    description: "We maintain the highest standards of code quality and technical innovation.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: "Client Partnership",
    description: "We build lasting relationships based on trust and mutual success.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: "Result Driven",
    description: "We focus on delivering measurable business outcomes for our clients.",
  },
  {
    icon: <Trophy className="w-8 h-8 text-blue-400" />,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ServicesHero />
      
      {/* Stats Section with Gradient Border */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with Animated Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl leading-relaxed text-gray-300 text-center">
              Founded in 2014, we've grown from a small team of passionate developers to a full-service software agency. 
              Our journey has been driven by a simple mission: to help businesses thrive in the digital age through 
              innovative technology solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section with Hover Effects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative">
                  <div className="mb-4 p-3 bg-gray-900/50 rounded-lg inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Card Effects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-gray-800 group-hover:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <button className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Connect <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}