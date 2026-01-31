"use client"; // This must be the very first line

import Link from "next/link";
import  Hero  from "@/components/Hero";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <section
      className="
        relative h-[80vh]
        pt-[140px]
        flex items-center justify-center
        px-4 text-white
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/assets/images/contact/contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK FADE OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-lg md:text-xl opacity-90">
          Reach out to GP College of Pharmacy for admissions, academic inquiries, research collaborations, and general information.
        </p>
      </div>
    </section>
 <section className="bg-white py-12 md:py-20">
  <div className="px-4 sm:px-6 lg:px-8">

    {/* SECTION TITLE */}
    <div className="text-center mb-10">
      <h2 className="inline-block text-3xl font-bold tracking-tight border-b-4 border-primary pb-2">
        Contact Us
      </h2>
    </div>

    {/* GRID CONTAINER */}
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT CARD */}
        <div
          className="
            bg-white rounded-xl shadow-lg
            p-8 md:p-10
            flex flex-col justify-center
            animate-fade-in-right
            transition-all duration-200
            hover:shadow-2xl hover:-translate-y-1
          "
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                GP College of Pharmacy
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                GP College of Pharmacy is committed to excellence in
                pharmaceutical education, research, and healthcare services.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <p className="font-semibold text-neutral-800">Address</p>
                <p className="text-neutral-600 text-sm">
                  Vaniyambadi Main Road,<br />
                  Mandalavadi (Vill & Po),<br />
                  Jolarpet – 635851,<br />
                  Tirupattur District,<br />
                  Tamil Nadu
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="text-primary" size={20} />
              <p className="text-neutral-600">
                gppharmacycollege@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <Phone className="text-primary mt-1" size={20} />
              <p className="text-neutral-600 text-sm">
                +91 94434 37487<br />
                +91 95786 27535<br />
                04179 299723
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-6">
            <Link href="https://www.instagram.com/" target="_blank">
              <Instagram className="text-primary hover:scale-110 transition" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <Linkedin className="text-primary hover:scale-110 transition" />
            </Link>
            <Link href="https://www.youtube.com/@G.P.PHARMACYCOLLEGETirupattur" target="_blank">
              <Youtube className="text-primary hover:scale-110 transition" />
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="
            bg-white rounded-xl shadow-lg
            p-8 md:p-10
            flex flex-col justify-center
            animate-fade-in-right
            transition-all duration-200
            hover:shadow-2xl hover:-translate-y-1
          "
        >
          <h3 className="text-2xl font-semibold text-center text-neutral-800 mb-6">
            Get in Touch
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-brand-red"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-brand-red"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-brand-red"
              required
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-brand-red"
              required
            />

            <button
              type="submit"
              className="
                w-full bg-brand-red text-white py-3 rounded-md
                font-medium transition
                hover:bg-brand-red/90 hover:scale-[1.02]
              "
            >
              Submit Message →
            </button>
          </form>
        </div>

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
