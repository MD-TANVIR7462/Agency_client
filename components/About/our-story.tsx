"use client";

import Tittle from "../Shared/Tittle";

export function OurStory() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Tittle tittle="Our Story" />
          <p className="text-lg text-gray-400 mt-4">
            Founded in 2014, we've grown from a small team of passionate developers to a full-service software agency. 
            Our journey has been driven by a simple mission: to help businesses thrive in the digital age through 
            innovative technology solutions and exceptional service.
          </p>
        </div>
      </div>
    </section>
  );
}