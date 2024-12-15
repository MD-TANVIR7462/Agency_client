"use client";

import { ServicesHero } from "@/components/services/services-hero";
import { Users, Code2, Trophy, Target } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Delivered", value: "500+" },
  { label: "Team Members", value: "50+" },
  { label: "Client Satisfaction", value: "98%" },
];

const values = [
  {
    icon: <Code2 className="w-12 h-12 text-primary mb-4" />,
    title: "Technical Excellence",
    description: "We maintain the highest standards of code quality and technical innovation.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary mb-4" />,
    title: "Client Partnership",
    description: "We build lasting relationships based on trust and mutual success.",
  },
  {
    icon: <Target className="w-12 h-12 text-primary mb-4" />,
    title: "Result Driven",
    description: "We focus on delivering measurable business outcomes for our clients.",
  },
  {
    icon: <Trophy className="w-12 h-12 text-primary mb-4" />,
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

export default function ProtfolioPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <ServicesHero/>

      {/* Stats Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2014, we've grown from a small team of passionate developers to a full-service software agency. 
              Our journey has been driven by a simple mission: to help businesses thrive in the digital age through 
              innovative technology solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg text-center">
                {value.icon}
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}