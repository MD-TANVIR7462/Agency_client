import React from "react";
import FAQItem from "./FAQItem";
import Tittle from "../Tittle";
import Link from "next/link";
import { FAQ } from "@/components/types/Faq";
import { getData } from "@/server/ServerActions";

const FAQSection = async ({ hide }: { hide: boolean }) => {
  const faqs: FAQ[] = (await getData("faq?isActive=true"))?.data;

  return (
    <section className="py-8  md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Tittle tittle=" Frequently Asked Questions" />
            <p className="text-gray-400">Get answers to common questions about our services and processes</p>
          </div>
          <div className="bg-gray-950/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-400/10">
            {faqs && faqs?.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>

          {hide !== true && (
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
