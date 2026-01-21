"use client"; // This must be the very first line

import Link from "next/link";
import  Hero  from "@/components/Hero";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Linkedin, Youtube } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Hero
        title="Contact Us"
        desc="Reach out to GP College of Pharmacy for admissions, academic inquiries, research collaborations, and general information."
        image="/assets/images/Pharmacy_courses/contact/contact.jpg"
      />

      <section className="bg-white py-12 md:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="inline-block text-3xl font-bold tracking-tight border-b-4 border-primary pb-2">
              Contact Us
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                  GP College of Pharmacy
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  GP College of Pharmacy is committed to excellence in
                  pharmaceutical education, research, and healthcare services.
                  The institution provides a student-centric learning
                  environment with modern laboratories and industry-oriented
                  training.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-neutral-800">Address</p>
                    <p className="text-neutral-600">
                      Vaniyambadi Main Road,
                      <br />
                      Mandalavadi (Vill & Po),
                      <br />
                      Jolarpet – 635851,
                      <br />
                      Tirupattur Taluk & District,
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail
                    className="text-primary flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-neutral-800">Email</p>
                    <p className="text-neutral-600">
                      gppharmacycollege@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-neutral-800">Telephone</p>
                    <p className="text-neutral-600">
                      +91 94434 37487 <br />
                      +91 95786 27535 <br />
                      +91 94432 29324 <br />
                      +91 63857 59996 <br />
                      04179 299723
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-4">
                <Link
                  href="https://www.instagram.com/shanmughainstitutions"
                  target="_blank"
                  aria-label="Instagram"
                >
                 
                </Link>

                <Link
                  href="https://www.linkedin.com/company/sri-shanmugha-educational-institutions"
                  target="_blank"
                  aria-label="LinkedIn"
                >

                </Link>

                <Link
                  href="https://www.youtube.com/@G.P.PHARMACYCOLLEGETirupattur"
                  target="_blank"
                  aria-label="YouTube"
                >
                  {/* <Youtube
                    size={20}
                    className="text-primary hover:text-neutral-900 "
                  /> */}
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-neutral-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                Get in Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#b1040e]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#b1040e]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#b1040e]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#b1040e]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red text-white py-3 rounded-md font-medium hover:bg-brand-red/90"
                >
                  Submit Message ➜
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-50 py-12">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-6 text-center">
            Find Us on the Map
          </h3>

          <div className="rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17379.18611362447!2d78.59963548316965!3d12.612617781319589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badab4e2f3777b5%3A0xa2842979384d8d57!2sGP%20PHARMACY%20COLLEGE!5e1!3m2!1sen!2sin!4v1767547810110!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              allowFullScreen
              className="w-full"
              title="GP College of Pharmacy Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
