"use client";

export default function AdmissionEnquiryForm() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-2">
        Admission Enquiry 2025
      </h3>
      <p className="text-sm text-center text-gray-600 mb-6">
        Our admissions team will contact you shortly.
      </p>

      <form className="space-y-4">
        <input className="w-full border px-4 py-2 rounded" placeholder="Name" required />
        <input className="w-full border px-4 py-2 rounded" placeholder="Email" type="email" required />
        <input className="w-full border px-4 py-2 rounded" placeholder="Phone" required />

        <select className="w-full border px-4 py-2 rounded" required>
          <option value="">Select Degree</option>
          <option>Diploma</option>
          <option>Undergraduate</option>
          <option>Postgraduate</option>
        </select>

        <select className="w-full border px-4 py-2 rounded" required>
          <option value="">Select Program</option>
          <option>D.Pharm</option>
          <option>B.Pharm</option>
          <option>M.Pharm</option>
          <option>Pharm.D</option>
        </select>

        <select className="w-full border px-4 py-2 rounded" required>
          <option value="">Select Country</option>
          <option>India</option>
          <option>Other</option>
        </select>

        <select className="w-full border px-4 py-2 rounded" required>
          <option value="">Select State</option>
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
        </select>

        <button className="w-full bg-primary text-white py-3 rounded font-semibold">
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}
