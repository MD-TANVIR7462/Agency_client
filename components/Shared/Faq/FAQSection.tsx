import React from "react";
import FAQItem from "./FAQItem";
import Tittle from "../Tittle";
import Link from "next/link";

const FAQSection = ({ path }: any) => {

  const faqs = [
    {
      question: "What is your development process?",
      answer:
        "Our development process follows an agile methodology with iterative development cycles. We begin with thorough requirement analysis, followed by design, development, testing, and deployment phases. Regular client communication and feedback are integral parts of our process.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We maintain high quality standards through comprehensive code reviews, automated testing, continuous integration/deployment (CI/CD), and regular quality audits. Our team follows industry best practices and uses modern development tools to ensure robust and scalable solutions.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in a wide range of modern technologies including React, Node.js, Python, AWS, and more. Our tech stack is constantly evolving to incorporate the latest innovations while maintaining stability and performance.",
    },
    {
      question: "How do you handle project maintenance?",
      answer:
        "We provide comprehensive maintenance services including regular updates, security patches, performance optimization, and 24/7 monitoring. Our support team is always available to address any issues and ensure smooth operation of your systems.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. The specific model is chosen based on project requirements, scope, and client preferences to ensure the best value for your investment.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "Security is our top priority. We implement industry-standard security measures, follow OWASP guidelines, use encryption for sensitive data, and regularly conduct security audits. Our team is trained in the latest security practices to protect your valuable data.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Tittle tittle=" Frequently Asked Questions" />
            <p className="text-gray-400">
              Get answers to common questions about our services and processes
            </p>
          </div>
          <div className="bg-gray-950/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-400/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
          {path != "/Contact" && (
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Still have questions?</p>
              <Link href={"/Contact"}>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
