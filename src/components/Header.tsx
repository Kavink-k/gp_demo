"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = {
  about: [
    { name: "GP", href: "/about" },
    { name: "Chairman", href: "/about#chairman" },
    { name: "Principal", href: "/about#principal" },
    { name: "Mission", href: "/about#mission" },
    { name: "Vision", href: "/about#vision" },
  ],
  courses: [
    { name: "Bachelor of Pharmacy", href: "/departments/cse" },
    { name: "Diplomo in Pharmacy", href: "/departments/cse" },
    { name: "Doctor of Pharmacy", href: "/departments/cse" },
    { name: "Master of Pharmacy", href: "/departments/cse" },
  ],
  departments: [
    { name: "Pharmaceutical Analysis", href: "/departments/cse" },
    { name: "Pharmaceutics", href: "/departments/cse" },
    { name: "Pharmacognosy", href: "/departments/cse" },
    { name: "Pharmacology", href: "/departments/cse" },
    { name: "Pharmacy Practices", href: "/departments/cse" },
    { name: "Pharm Chemistry", href: "/departments/cse" },
  ],
  features: [
    { name: "Facilities", href: "/" },
    
  ],
  // contact: [
  //   { name: "FAQs", href: "/faq" },
  //   { name: "Contact Us", href: "/contact" },
  // ],
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ===== Top information bar ===== */}
      <div className="transition-colors duration-500 bg-primary">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo instead of site title */}
          <Link href="/" aria-label="GP">
            <Image
              src="/GP-Logo-neww.png" // ✅ replace with your logo path
              alt="GP Logo"
              width={80}
              height={0}
              className="object-contain"
              priority
            />
          </Link>

          {/* Information bar (desktop) */}
          <div className="hidden lg:flex items-center gap-5 text-white/90">
            <span className="font-extrabold">Information for:</span>
            <Link href="/Recognitions-Certificates" className="hover:underline">Recognitions-Certificates</Link>
            <Link href="/" className="hover:underline whitespace-nowrap">Anti Ragging</Link>
            <Link href="/footer/poshcell" className="hover:underline whitespace-nowrap">Posh Cell</Link>
            <Link href="/footer/feedback" className="hover:underline whitespace-nowrap">Feedback</Link>
            <Link href="/footer/aicte" className="hover:underline whitespace-nowrap">AICTE Approval Copies</Link>
          </div>
        </div>

        {/* Contact row (mobile only) */}
        <div className="container mx-auto px-6 pb-2 flex items-center justify-between text-sm text-white/95 lg:hidden">
          <div className="flex items-center gap-4">
            <a href="tel:+917373672999" className="flex items-center gap-1">
              <Phone size={14} /> <span>+91 73736 72999</span>
            </a>
            <a href="mailto:info@shanmugha.edu.in" className="flex items-center gap-1">
              <Mail size={14} /> <span>info@gp.edu.in</span>
            </a>
          </div>
          <button aria-label="Search">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* ===== Main nav ===== */}
      <nav className="transition-all duration-500 bg-white text-black shadow-md">
        <div className="container mx-auto px-6 py-3">
          <ul className="hidden md:flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            <NavItem href="/" label="Home" />
            {/* <NavItem href="/about" label="About Us" /> */}
            <NavItem href="/admission" label="Admission" />
            <Dropdown label="About" links={navLinks.about} />
            <Dropdown label="Courses" links={navLinks.courses} />
            <Dropdown label="Departments" links={navLinks.departments} wide />
            <Dropdown label="Features" links={navLinks.features} />
        <NavItem label="Contact" href="/contact"  />
          </ul>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Sub Components ---------- */
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li className="group relative inline-block">
      <Link
        href={href}
        className="relative font-semibold tracking-tight text-black transition-colors duration-300 hover:text-primary text-lg md:text-2xl"
      >
        {label}
        <span
          className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-primary
                     -translate-x-1/2 transform transition-all duration-300
                     group-hover:w-full"
        ></span>
      </Link>
    </li>
  );
}

function Dropdown({
  label,
  links,
  wide,
}: {
  label: string;
  links: { name: string; href: string }[];
  wide?: boolean;
}) {
  return (
    <li className="relative group">
      <button
        className="flex items-center gap-1 font-semibold tracking-tight transition text-black hover:text-primary
        text-lg md:text-2xl relative"
      >
        {label}
        <span className="absolute bottom-0 left-1/2 h-0.5 bg-primary transform -translate-x-1/2 transition-all duration-300 w-0 group-hover:w-full"></span>
        <ChevronDown size={18} />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white shadow-xl rounded-md mt-3 py-2 ml-12 z-50 ${
          wide ? "w-72" : "w-60"
        }`}
      >
        {links?.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block px-4 py-2 text-left text-sm text-gray-800 hover:bg-primary hover:text-white transition-colors duration-200 rounded-md"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </li>
  );
}

