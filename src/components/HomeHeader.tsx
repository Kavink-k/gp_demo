
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = {
  about: [
    { name: "GP", href: "/about" },
    { name: "Trust", href: "/about#trust" },
    { name: "Chairman", href: "/about#chairman" },
    { name: "Vice Chairman", href: "/about#vicechairman" },
    { name: "Executive Director", href: "/about#executive-director" },
    { name: "CEO", href: "/about#ceo" },
    { name: "Principal", href: "/about#principal" },
    { name: "Mission", href: "/about#mission" },
    { name: "Vision", href: "/about#vision" },
  ],
  // ourInstitutions: [
  //   { name: 'Pharmacy', href: '#' },
  //   { name: 'Pharmacy', href: 'https://shanmughapharmacy.edu.in' },
  //   { name: 'Nursing for women', href: 'https://shanmughanursing.edu.in' },
  //   { name: 'Medical Science & research', href: 'https://shanmugha.edu.in/Medical_Science&Research_College' },
  //   { name: 'Allied Health Science', href: 'https://shanmugha.edu.in/DHI_College' },
  // ],
departments: [
    { name: "Bachelor of Pharmacy", href: "/departments/cse" },
    { name: "Diplomo in Pharmacy", href: "/departments/cse" },
    { name: "Doctor of Pharmacy", href: "/departments/cse" },
    { name: "Master of Pharmacy", href: "/departments/cse" },
  ],
  features: [
    { name: 'Facilities', href: '/features/facilities' },
  
  ],
  // contact: [
  //   { name: 'FAQs', href: '/faq' },
  //   { name: 'Contact Us', href: '/contact' },
  // ],
};
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setIsScrolled(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
<header className="fixed top-0 left-0 w-full z-50">
  {/* Gradient overlay */}
  <div
    className="absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-500"
    style={{
      background: isScrolled
        ? "#15803D" // solid red after scroll
        : "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))", // transparent gradient
    }}
  ></div>

  {/* Top info bar */}
  <div
    className={`relative container mx-60 px-8  py-2 flex items-center justify-between transition-colors duration-500`}
  >
    <Link href="/" aria-label="GP">
      <Image
        src="/GP-Logo-neww.png"
        alt="GP Logo"
        width={80}
        height={0}
        className="object-contain"
        priority
      />
    </Link>

    <div
      className={`hidden lg:flex items-center gap-5 transition-colors duration-500 ${
        isScrolled ? "text-white" : "text-white/90"
      }`}
    >
      <span className="font-extrabold">Information for:</span>
      {/* <Link href="https://aakam360.com/" target="_blank" className="hover:underline transition">
        Aakam360
      </Link> */}
      <Link href="/Recognitions-Certificates" className="hover:underline">
        Recognitions-Certificates
      </Link>
      {/* <Link href="/header/faculty-staff" className="hover:underline">
        Faculty &amp; Staff
      </Link> */}
      <Link href="/footer/antiragging" className="hover:underline whitespace-nowrap">
        Anti Ragging
      </Link>
      <Link href="/footer/poshcell" className="hover:underline whitespace-nowrap">
        Posh Cell
      </Link>
      <Link href="/footer/feedback" className="hover:underline whitespace-nowrap">
        Feedback
      </Link>
      <Link href="/footer/aicte" className="hover:underline whitespace-nowrap">
        AICTE Approval Copies
      </Link>
    </div>
  </div>

  {/* Main nav */}
  <nav
    className={`relative transition-colors duration-500 ${
      isScrolled ? "bg-white" : "bg-transparent"
    }`}
  >
    <div className="container mx-auto px-6 py-3">
      <ul className="hidden md:flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
        <NavItem href="/" label="Home" isScrolled={isScrolled} />
        <NavItem href="/admission" label="Admission" isScrolled={isScrolled} />
        <Dropdown label="About" links={navLinks.about} isScrolled={isScrolled} />
        {/* <Dropdown label="Our Institutions" links={navLinks.ourInstitutions} isScrolled={isScrolled} /> */}
        <Dropdown label="Departments" links={navLinks.departments} isScrolled={isScrolled} wide />
        <Dropdown label="Features" links={navLinks.features} isScrolled={isScrolled} />
        <NavItem label="Contact" href="/contact" isScrolled={isScrolled} />
      </ul>
    </div>
  </nav>
</header>


  );
}

/* ---------- sub components ---------- */
/* ---------- NavItem with scroll + hover + underline ---------- */
function NavItem({
  href,
  label,
  isScrolled,
}: {
  href: string;
  label: string;
  isScrolled: boolean;
}) {
  return (
    <li className="relative group">
      <Link
        href={href}
        className={`
          relative text-lg md:text-2xl font-semibold
          transition-colors duration-300 ease-in-out
          ${
            isScrolled
              ? "text-black hover:text-[#b60000]"
              : "text-white hover:text-white/80"
          }
        `}
      >
        {label}
        {/* Underline */}
        <span
          className={`absolute left-1/2 bottom-0 h-[2px] w-full 
              ${isScrolled ? "bg-[#b60000]" : "bg-white"}
              scale-x-0 group-hover:scale-x-100 
              transition-transform duration-300 ease-in-out origin-center -translate-x-1/2`}
        />
      </Link>
    </li>
  );
}

/* ---------- Dropdown with same transition ---------- */

function Dropdown({
  label,
  links,
  wide,
  isScrolled, // 👈 passed from parent (true when scrolled)
}: {
  label: string;
  links: { name: string; href: string }[];
  wide?: boolean;
  isScrolled?: boolean;
}) {
  return (
    <li className="relative group">
      <button
        className={`flex items-center gap-1 font-semibold tracking-tight transition text-lg md:text-2xl relative
          ${
            isScrolled
              ? "text-black hover:text-[#b60000]" // after scroll
              : "text-white hover:text-white" // static (top)
          }`}
      >
        {label}

        {/* ✅ Dynamic underline animation */}
        <span
          className={`absolute left-1/2 bottom-0 h-[2px] w-full 
            ${isScrolled ? "bg-[#b60000]" : "bg-white"} 
            scale-x-0 group-hover:scale-x-100 
            transition-transform duration-300 ease-in-out origin-center -translate-x-1/2`}
        />

        <ChevronDown size={18} />
      </button>

      {/* Dropdown list */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white shadow-xl rounded-md mt-3 py-2 ml-12 z-50 ${
          wide ? "w-72" : "w-60"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block px-4 py-2 text-left text-sm text-gray-800 hover:bg-[#b1040e] hover:text-white transition-colors duration-200 rounded-md"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </li>
  );
}

