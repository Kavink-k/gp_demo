"use client"; // This must be the very first line

import { Hero } from "@/components/Hero";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Dummy FAQ data
const faqData = [
  {
    question: "What programs does GP College of Pharmacy  (GP) offer?",
    answer: "GP offers undergraduate programs like B.E. and B.Tech, postgraduate programs like M.E. and M.Tech, and some Ph.D. programs in various Pharmacy disciplines."
  },
  {
    question: "How can I apply for admission to GP?",
    answer: "Admissions can be made through the online application portal on the GP website. You can apply for programs like B.E./B.Tech via entrance exams or merit-based selection. Detailed admission procedures are available on the admissions page."
  },
  {
    question: "What are the eligibility criteria for B.E./B.Tech programs?",
    answer: "For B.E./B.Tech programs, candidates must have passed 10+2 with Physics, Chemistry, and Mathematics as core subjects. A minimum aggregate of 50-60% is typically required. Admission is based on entrance exam scores or merit."
  },
  {
    question: "Does GP provide hostel facilities?",
    answer: "Yes, GP provides separate hostel facilities for boys and girls with modern amenities, including Wi-Fi, mess, and recreational areas. Hostels are located within the campus for easy access to academic buildings."
  },
  {
    question: "What extracurricular activities are available at GP?",
    answer: "GP offers a variety of extracurricular activities including sports, cultural events, clubs, NCC, NSS, and technical festivals. Students can participate in clubs related to robotics, coding, arts, and more."
  },
  {
    question: "Are there scholarships available for students?",
    answer: "Yes, GP offers merit-based scholarships, need-based financial aid, and special scholarships for outstanding performance in sports, arts, and academics. Details are available on the admissions and financial aid sections."
  },
  {
    question: "What is the campus placement record at GP?",
    answer: "GP has a good placement record with companies visiting the campus annually. The average salary packages are competitive, and students are placed in various sectors."
  },
  {
    question: "How can I contact the admissions office?",
    answer: "You can contact the admissions office via email at admissions@GP.edu.in or by phone. More contact details are available on the contact page."
  },
  {
    question: "Does GP have collaborations with other institutions?",
    answer: "Yes, GP has collaborations with industries and institutions for internships, research, and exchange programs."
  },
  {
    question: "What facilities are available for research at GP?",
    answer: "GP provides laboratories, libraries, computing resources, and support for research projects. The college encourages research in Pharmacy ."
  }
];

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        desc="Find answers to common questions about admissions, programs, facilities, and more at GP College of Pharmacy  (GP)."
        image="/assets/images/Pharmacy_courses/contact/faq.jpg" // Using a placeholder image; update if needed
      />

      <section className="bg-neutral-50 py-12 md:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="inline-block text-3xl font-bold tracking-tight border-b-4 border-primary pb-2">FAQs</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex justify-between items-center transition-colors rounded-lg group"
                  >
                    <h3 className="relative text-lg font-semibold">
                      <span className={`relative z-10 ${expandedIndex === index ? 'text-primary' : 'text-neutral-800 group-hover:text-primary'} transition-colors duration-300`}>{faq.question}</span>
                      <span className={`absolute bottom-0 left-1/2 h-0.5 bg-primary transform -translate-x-1/2 transition-all duration-300 w-0 group-hover:w-full`}></span>
                    </h3>
                    <ChevronDown
                      className="transition-transform duration-300" 
                      size={20}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
