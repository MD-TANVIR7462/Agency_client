"use client";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Delivered", value: "500+" },
  { label: "Team Members", value: "50+" },
  { label: "Client Satisfaction", value: "98%" },
];

export function Stats() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}