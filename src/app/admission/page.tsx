"use client";

import { useState } from "react";
import AdmissionEnquiryForm from "../../components/AdmissionForm";

export default function AdmissionPage() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      {/* HERO WITH IMAGE */}
      <section
        className="relative h-[80vh] pt-[140px] flex items-center justify-center px-4 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/assets/images/admission/admissionhero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl animate-fadeIn">
          <p className="text-lg mb-4">Admissions Open 2025 – 2026</p>
          <p className="text-lg mb-8 opacity-90">
            PCI Approved Pharmacy Programs | Scholarships Available |
            Career-Focused Education
          </p>
          <button
            onClick={() => setOpenForm(true)}
            className="bg-primary px-8 py-3 rounded-md text-lg font-semibold
                       transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* PROGRAMS OFFERED */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          PROGRAMS OFFERED
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "D.Pharm", desc: "Diploma in Pharmacy", dur: "2 Years" },
            { title: "B.Pharm", desc: "Bachelor of Pharmacy", dur: "4 Years" },
            { title: "M.Pharm", desc: "Master of Pharmacy", dur: "2 Years" },
            { title: "Pharm.D", desc: "Doctor of Pharmacy", dur: "6 Years" },
          ].map((p) => (
            <div
              key={p.title}
              className="
                group bg-white border rounded-xl p-6 text-center
                shadow-sm transition-all duration-300 ease-out
                hover:-translate-y-3 hover:scale-[1.03]
                hover:shadow-2xl hover:border-primary hover:bg-primary/5
              "
            >
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                {p.title}
              </h3>

              <p className="text-gray-600">{p.desc}</p>

              <p className="mt-2 font-medium text-gray-800">{p.dur}</p>
            </div>
          ))}
        </div>
      </section>
      

      {/* FORM MODAL */}
      {openForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative animate-slideUp">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              ✕
            </button>
            <AdmissionEnquiryForm />
          </div>
        </div>
      )}
    </>
  );
}
