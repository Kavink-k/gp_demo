"use client"; // This must be the very first line

import { Hero } from "@/components/Hero";
import Image from "next/image";
import { useState, useRef, useEffect, ReactNode, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  ArrowLeft,
  BookOpen,
  UserCheck,
  Star,
  X,
  FileText,
  ChevronDown,
} from "lucide-react";
import DataTable from "@/components/Datatable"; // Assuming DataTable is in your components folder

// --- IMPORT EXTERNAL DATA ---
import pharmacy_dept_data from "./cse-data.js";

// --- TYPE DEFINITIONS FOR CSE DATA ---
interface BaseItem {
  id: number;
}

interface DeptIntroItem extends BaseItem {
  Desc?: string;
  Bold_para1?: string;
  Bold_para2?: string;
  para_list?: string[];
  Image_1?: string;
}

interface VisionMissionItem extends BaseItem {
  descrption1?: string;
  desc_list?: string[];
}

interface FacilitiesItem extends BaseItem {
  Facilities?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface MouItem extends BaseItem {
  Mous?: Array<{
    Table_data?: (string | number)[][];
  }>;
}

interface LibraryItem extends BaseItem {
  Description?: string;
  Library?: Array<{
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface ValueAddedItem extends BaseItem {
  Value_added_course?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface ContentBeyondItem extends BaseItem {
  Content_beyond_syllabus?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface NptelItem extends BaseItem {
  NPTEL?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface AlumniItem extends BaseItem {
  Alumni_details?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface PlacementItem extends BaseItem {
  Placement_details?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface StudentProjectsItem extends BaseItem {
  Students_project?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface StudentParticipationItem extends BaseItem {
  Student_participation?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface EventsItem extends BaseItem {
  Event?: Array<{
    Heading?: string;
    List_heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
    List?: string[];
  }>;
}

interface ResearchItem extends BaseItem {
  Research_consultancy?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface GraduationItem extends BaseItem {
  Graduation_details?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface FacultyParticipationItem extends BaseItem {
  Faculty_participation?: Array<{
    Heading?: string;
    Table_heading?: string[];
    Table_data?: (string | number)[][];
  }>;
}

interface FacultyItem extends BaseItem {
  Faculty_deatails?: Array<{
    Heading?: string;
    Faculty_name?: string;
    Designation?: string;
  }>;
  Table_heading?: string[];
}

interface OutcomeItem extends BaseItem {
  Outcome?: Array<{
    Course?: string;
    Heading?: string;
    para?: string;
    _outcome?: Array<{
      category?: string;
      description?: string;
    }>;
  }>;
}

type CseDataItem =
  | (DeptIntroItem & BaseItem)
  | (VisionMissionItem & BaseItem)
  | (FacilitiesItem & BaseItem)
  | (MouItem & BaseItem)
  | (LibraryItem & BaseItem)
  | (ValueAddedItem & BaseItem)
  | (ContentBeyondItem & BaseItem)
  | (NptelItem & BaseItem)
  | (AlumniItem & BaseItem)
  | (PlacementItem & BaseItem)
  | (StudentProjectsItem & BaseItem)
  | (StudentParticipationItem & BaseItem)
  | (EventsItem & BaseItem)
  | (ResearchItem & BaseItem)
  | (GraduationItem & BaseItem)
  | (FacultyParticipationItem & BaseItem)
  | (FacultyItem & BaseItem)
  | (OutcomeItem & BaseItem)
  | BaseItem;

type CseDeptData = CseDataItem[];

// ================== FACULTY: NEW CONFIG + TYPES + HELPERS (ONLY FACULTY CHANGES) ==================
const DEPARTMENT_NAME = " Pharmacy "; // must match the top-level key in faculty_dept.json

type FacultyRow = {
  employee_id: number;
  first_name?: string | null;
  middle_name?: string | null;
  last_name?: string | null;
  designation?: string | null;
  desc?: string | null;
};
type FacultyDeptJson = Record<string, FacultyRow[]>;
type FacultyCard = {
  employeeId: number;
  name: string;
  occupation: string;
  bio?: string;
};

const joinName = (
  first?: string | null,
  middle?: string | null,
  last?: string | null
) =>
  [first, middle, last].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();

const PHOTO_EXTS = ["jpeg", "jpg", "png", "webp", "JPEG", "JPG", "PNG", "WEBP"];

const buildPhotoCandidates = (employeeId: number) => [
  ...PHOTO_EXTS.map((ext) => `/assets/facultyprofile/${employeeId}.${ext}`),
  "/assets/facultyprofile/fallback.jpg", // ensure this exists
];

function FacultyPhoto({
  employeeId,
  alt,
  className,
}: {
  employeeId: number;
  alt: string;
  className?: string;
}) {
  const candidates = useMemo(
    () => buildPhotoCandidates(employeeId),
    [employeeId]
  );
  const [idx, setIdx] = useState(0);

  return (
    <img
      src={candidates[idx]}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setIdx((i) => (i < candidates.length - 1 ? i + 1 : i))}
    />
  );
}
// ================== END FACULTY HELPERS ==================

// Extract relevant data from cse_dept_data with corrected mappings
const deptIntro =
  (pharmacy_dept_data.find((item) => item.id === 1) as DeptIntroItem | undefined) ||
  {};
const visionMission =
  (pharmacy_dept_data.find((item) => item.id === 2) as
    | VisionMissionItem
    | undefined) || {};
const facilitiesItem =
  (pharmacy_dept_data.find((item) => item.id === 5) as FacilitiesItem | undefined) ||
  {};
const mouItem =
  (pharmacy_dept_data.find((item) => item.id === 7) as MouItem | undefined) || {};
const libraryItem =
  (pharmacy_dept_data.find((item) => item.id === 8) as LibraryItem | undefined) ||
  {};
const valueAddedItem =
  (pharmacy_dept_data.find((item) => item.id === 17) as
    | ValueAddedItem
    | undefined) || {};
const contentBeyondItem =
  (pharmacy_dept_data.find((item) => item.id === 18) as
    | ContentBeyondItem
    | undefined) || {};
const nptelItem =
  (pharmacy_dept_data.find((item) => item.id === 19) as NptelItem | undefined) || {};

// Placeholder data for sections not explicitly present in cse-data.js
const graduationItem =
  (pharmacy_dept_data.find((item) => item.id === 14) as
    | GraduationItem
    | undefined) || {};
const alumniItem =
  (pharmacy_dept_data.find((item) => item.id === 15) as AlumniItem | undefined) ||
  {};
const placementItem =
  (pharmacy_dept_data.find((item) => item.id === 12) as PlacementItem | undefined) ||
  {};
const studentProjectsItem =
  (pharmacy_dept_data.find((item) => item.id === 11) as
    | StudentProjectsItem
    | undefined) || {};
const studentParticipationItem =
  (pharmacy_dept_data.find((item) => item.id === 10) as
    | StudentParticipationItem
    | undefined) || {};
const eventsItem =
  (pharmacy_dept_data.find((item) => item.id === 9) as EventsItem | undefined) || {};
const researchItem =
  (pharmacy_dept_data.find((item) => item.id === 6) as ResearchItem | undefined) ||
  {};
const facultyParticipationItem =
  (pharmacy_dept_data.find((item) => item.id === 15) as
    | FacultyParticipationItem
    | undefined) || {};
const facultyItem =
  (pharmacy_dept_data.find((item) => item.id === 4) as FacultyItem | undefined) ||
  {};
const outcomeItem =
  (pharmacy_dept_data.find((item) => item.id === 3) as OutcomeItem | undefined) ||
  {};

const graduationData =
  (graduationItem as GraduationItem)?.Graduation_details?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];
const alumniData =
  (alumniItem as AlumniItem)?.Alumni_details?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];
const placementData =
  (placementItem as PlacementItem)?.Placement_details?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];
const studentProjectsData =
  (studentProjectsItem as StudentProjectsItem)?.Students_project?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];
const studentParticipationData =
  (
    studentParticipationItem as StudentParticipationItem
  )?.Student_participation?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];
const eventsData =
  (eventsItem as EventsItem)?.Event?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];
const researchConsultancyData =
  (researchItem as ResearchItem)?.Research_consultancy?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];

// Process faculty data (UNCHANGED base, but we won’t use this table for rendering anymore)
const facultyTableData =
  (facultyItem as FacultyItem)?.Faculty_deatails?.filter(
    (item: { Faculty_name?: string; Designation?: string }) =>
      item.Faculty_name && item.Designation
  ).map(
    (item: { Faculty_name?: string; Designation?: string }, index: number) => [
      index + 1,
      item.Faculty_name!,
      item.Designation!,
    ]
  ) || [];

// Process facilities data
const facilitiesData = (facilitiesItem as FacilitiesItem)?.Facilities || [];

//po  peo pso
const poPeoPsoData = (outcomeItem as OutcomeItem)?.Outcome || [];
// Process MOU data
const mouRaw = (mouItem as MouItem)?.Mous?.[0]?.Table_data ?? [];

const mouData =
  mouRaw
    ?.filter((row: any) => Array.isArray(row) && row.length > 1)
    .map((row: (string | number)[], index: number) => {
      const institution = row.length > 1 ? String(row[1] ?? "") : "";
      const planned_activities = row.length > 2 ? [String(row[2] ?? "")] : [""];
      return {
        sNo: index + 1,
        institution,
        planned_activities,
      };
    }) || [];

// Process library data
const libraryData =
  (libraryItem as LibraryItem)?.Library?.[0]?.Table_data || [];

// Process value added courses data
const valueAddedCoursesData =
  (valueAddedItem as ValueAddedItem)?.Value_added_course?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];

// Process content beyond syllabus data
const contentBeyondData =
  (contentBeyondItem as ContentBeyondItem)?.Content_beyond_syllabus?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];

// Process NPTEL data
const nptelData =
  (nptelItem as NptelItem)?.NPTEL?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];
// Process faculty participation data
const facultyParticipationData =
  (
    facultyParticipationItem as FacultyParticipationItem
  )?.Faculty_participation?.filter(
    (item: { Table_heading?: string[]; Table_data?: (string | number)[][] }) =>
      item.Table_heading && item.Table_data
  ) || [];

// Dynamically import the viewer with SSR turned off to prevent server-side errors
const CustomPdfViewer = dynamic(() => import("@/components/CustomPdfViewer"), {
  ssr: false,
  loading: () => (
    <p className="text-center text-neutral-500 pt-10">Loading Viewer...</p>
  ),
});

// Helper component for stat cards
const Stat = ({
  value,
  label,
  Icon,
}: {
  value: string;
  label: string;
  Icon?: React.ElementType;
}) => (
  <div className="text-center flex flex-col items-center">
    {Icon && <Icon className="w-8 h-8 mb-2 text-primary" />}
    <p className="text-xl font-bold text-neutral-800">{value}</p>
    <p className="mt-1 text-sm text-neutral-600 font-semibold">{label}</p>
  </div>
);

// --- DYNAMICALLY GENERATED DATA FOR ACHIEVEMENTS SECTION ---
const achievementsData = {
  regulations_facilities: {
    title: "Regulations and Facilities",
    contentType: "folder",
    subItems: {
      regulation_syllabus: {
        title: "1.1. Regulation & Syllabus",
        contentType: "details",
        description:
          "Access the departments regulations and syllabus for all academic years.",
        links: [
          {
            text: "Undergraduate 2023",
            href: "/assets/docs/departments/cse/syllabus/reg-syl-23.pdf",
          },
          {
            text: "Undergraduate 2021",
            href: "/assets/docs/departments/cse/syllabus/reg-syl-21.pdf",
          },
          {
            text: "Undergraduate 2017",
            href: "/assets/docs/departments/cse/syllabus/reg-syl-17.pdf",
          },
          {
            text: "Postgraduate 2017",
            href: "/assets/docs/departments/cse/syllabus/reg-syl-PG-17.pdf",
          },
          {
            text: "Postgraduate 2021",
            href: "/assets/docs/departments/cse/syllabus/reg-syl-PG-21.pdf",
          },
          {
            text: "Postgraduate 2023",
            href: "/assets/docs/departments/cse/syllabus/reg-syl-PG-23.pdf",
          },
        ],
      },
      facilities: {
        title: "1.2. Facilities",
        contentType: "table",
        description:
          "Explore the advanced laboratories, workshops, and infrastructure available for students and research activities.",
        tables: facilitiesData.map((lab: any) => ({
          title: lab.Heading || "Laboratory",
          columns: lab.Table_heading?.map((header: any, index: number) => ({
            header,
            accessorKey: index.toString(),
          })) || [
              { header: "S.No", accessorKey: "0" },
              { header: "Equipment", accessorKey: "1" },
            ],
          data: lab.Table_data || [],
        })),
      },
      events: {
        title: "1.3. Events",
        contentType: "table",
        description:
          "List of seminars, symposiums, and events conducted by the Department of Computer Science and Pharmacy.",
        tables: eventsData
          .filter((event) => event.Heading || event.List_heading)
          .map((event) => {
            if (event.Heading) {
              return {
                title: event.Heading || "Event",
                columns: event.Table_heading?.map((header, index) => ({
                  header,
                  accessorKey: index.toString(),
                })) || [
                    { header: "S.No", accessorKey: "0" },
                    { header: "Date", accessorKey: "1" },
                    { header: "Topic/Course", accessorKey: "2" },
                    { header: "Resource Person", accessorKey: "3" },
                  ],
                data:
                  event.Table_data?.map((row: (string | number)[]) => ({
                    "0": row[0],
                    "1": row[1],
                    "2": row[2],
                    "3": row[3] || "-",
                  })) || [],
              };
            } else if (event.List_heading) {
              return {
                title: event.List_heading || "List of Events Organized",
                columns: [{ header: "Event Description", accessorKey: "0" }],
                data:
                  event.List?.map((item: string, index: number) => ({
                    "0": `${index + 1}. ${item}`,
                  })) || [],
              };
            }
            return null;
          })
          .filter((table) => table !== null),
      },
    },
  },
  po_peo_pso: {
    title: "PO, PEO & PSO",
    contentType: "details",
    description:
      "Programme Outcomes, Programme Educational Objectives, and Programme Specific Outcomes for B.E. and M.E. Computer Science and Pharmacy.",
    extraContent: (
      <div className="mt-10 space-y-8 text-lg text-neutral-700 leading-relaxed">
        {poPeoPsoData.map((item, index) => (
          <div key={index}>
            {/* Course Title */}
            {item.Course && (
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                {item.Course}
              </h3>
            )}

            {/* PROGRAMME OUTCOMES */}
            {(item._outcome || []).filter(
              (outcome) =>
                outcome?.category &&
                typeof outcome.category === "string" &&
                outcome.category.startsWith("PO")
            ).length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                  PROGRAMME OUTCOMES
                </h3>
                {(item._outcome || [])
                  .filter(
                    (outcome) =>
                      outcome?.category &&
                      typeof outcome.category === "string" &&
                      outcome.category.startsWith("PO")
                  )
                  .map((outcome, idx) =>
                    outcome ? (
                      <p key={idx} className="mb-2">
                        <strong>{outcome.category || "N/A"}:</strong>{" "}
                        {outcome.description || "No description available"}
                      </p>
                    ) : null
                  )}
              </div>
            )}

            {/* PROGRAM EDUCATIONAL OBJECTIVES (PEO’S) */}
            {(item._outcome || []).filter(
              (outcome) =>
                outcome?.category &&
                typeof outcome.category === "string" &&
                outcome.category.startsWith("PEO")
            ).length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                  PROGRAM EDUCATIONAL OBJECTIVES (PEO’S)
                </h3>
                {(item._outcome || [])
                  .filter(
                    (outcome) =>
                      outcome?.category &&
                      typeof outcome.category === "string" &&
                      outcome.category.startsWith("PEO")
                  )
                  .map((outcome, idx) =>
                    outcome ? (
                      <p key={idx} className="mb-2">
                        <strong>{outcome.category || "N/A"}:</strong>{" "}
                        {outcome.description || "No description available"}
                      </p>
                    ) : null
                  )}
              </div>
            )}

            {/* PROGRAM SPECIFIC OUTCOME (PSO’S) */}
            {(item._outcome || []).filter(
              (outcome) =>
                outcome?.category &&
                typeof outcome.category === "string" &&
                outcome.category.startsWith("PSO")
            ).length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                  PROGRAM SPECIFIC OUTCOME (PSO’S)
                </h3>
                {(item._outcome || [])
                  .filter(
                    (outcome) =>
                      outcome?.category &&
                      typeof outcome.category === "string" &&
                      outcome.category.startsWith("PSO")
                  )
                  .map((outcome, idx) => (
                    <p key={idx} className="mb-2">
                      <strong>{outcome?.category || "N/A"}:</strong>{" "}
                      {outcome?.description || "No description available"}
                    </p>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    ),
  },
  faculty: {
    title: "Faculty",
    contentType: "table",
    description:
      "Comprehensive list of faculty members with their qualifications, designations, and areas of expertise.",
    tables: [
      {
        title:
          (facultyItem as FacultyItem)?.Faculty_deatails?.find(
            (item) => item.Heading
          )?.Heading || "Faculty List",
        columns: (facultyItem as FacultyItem)?.Table_heading?.map(
          (header, index) => ({
            header,
            accessorKey: index.toString(),
          })
        ) || [
          { header: "S.No", accessorKey: "0" },
          { header: "Name", accessorKey: "1" },
          { header: "Designation", accessorKey: "2" },
        ],
        data: facultyTableData,
      },
    ],
    links: [
      {
        text: "Faculty List ",
        href: "/assets/images/Pharmacy_courses/cse/docs/sample.pdf",
      },
    ],
  },
  research_consultancy: {
    title: "Research & Consultancy",
    contentType: "details",
    description:
      "Faculty research works, publications, consultancy projects, and patents.",
    links: [
      {
        text: "Research and consultancy",
        href: "/assets/docs/departments/cse/r&c/Research and Consultancy.pdf",
      },
    ],
  },
  academic_calendar: {
    title: "Academic Calendar",
    contentType: "details",
    description:
      "Semester-wise academic calendar outlining class schedules, examinations, and events.",
    links: [
      {
        text: "2023 - 2024 ODD SEM",
        href: "/assets/docs/departments/cse/cal/23-24ood.pdf",
      },
      {
        text: "2024 - 2025 ODD SEM",
        href: "/assets/docs/departments/cse/cal/24-25ood.pdf",
      },
      {
        text: "2023 - 2024 EVEN SEM",
        href: "/assets/docs/departments/cse/cal/23-24even.pdf",
      },
    ],
  },
  bos: {
    title: "BoS",
    contentType: "folder",
    subItems: {
      bos_minutes: {
        title: "BOS Minutes",
        contentType: "details",
        description:
          "Minutes of the Board of Studies meetings detailing curriculum changes and decisions.",
        links: [
          {
            text: "BOS Minutes 2023 ",
            href: "/assets/docs/departments/cse/bos/2023.pdf",
          },
          {
            text: "BOS Minutes 2024 ",
            href: "/assets/docs/departments/cse/bos/2024.pdf",
          },
        ],
      },
      bos_members: {
        title: "BOS Members",
        contentType: "details",
        description:
          "List of Board of Studies members involved in curriculum review and development.",
        links: [
          {
            text: "BOS Members List",
            href: "/assets/docs/departments/cse/bos/BOS-MEMBERS.pdf",
          },
        ],
      },
    },
  },
  mou: {
    title: "MOU's",
    contentType: "table",
    description:
      "Memoranda of Understanding signed with industries and institutions for academic and research collaborations.",
    tables: [
      {
        title: "Signed Memorandums of Understanding",
        columns: [
          { header: "S.No", accessorKey: "sNo" },
          { header: "Institution", accessorKey: "institution" },
          {
            header: "Planned Activities",
            accessorKey: "planned_activities",
            cell: ({ row }: { row: any }) => (
              <div className="text-sm">
                {(row.original.planned_activities || []).map(
                  (activity: string, i: number) => (
                    <div key={i} className="py-1">
                      {activity}
                    </div>
                  )
                )}
              </div>
            ),
          },
        ],
        data: mouData,
      },
    ],
  },
  department_library: {
    title: "Department Library",
    contentType: "table",
    description:
      (libraryItem as LibraryItem)?.Description ||
      "Details of books, journals, and e-resources available in the Computer Science and Pharmacy departmental library.",
    tables: [
      {
        title: "Department Library Collection",
        columns: (libraryItem as LibraryItem)?.Library?.[0]?.Table_heading?.map(
          (header, index) => ({
            header,
            accessorKey: index.toString(),
          })
        ) || [
            { header: "S.No", accessorKey: "0" },
            { header: "Acc No.", accessorKey: "1" },
            { header: "Title", accessorKey: "2" },
            { header: "Author", accessorKey: "3" },
            { header: "Publisher", accessorKey: "4" },
            { header: "Volumes", accessorKey: "5" },
          ],
        data: libraryData,
      },
    ],
  },
  students_participation: {
    title: "Students Participation",
    contentType: "table",
    description:
      "Achievements and participations of students in technical and non-technical events across the country.",
    tables: studentParticipationData.map((achievement) => ({
      title: achievement.Heading || "Student Achievements",
      columns: achievement.Table_heading?.map((header, index) => ({
        header,
        accessorKey: index.toString(),
      })) || [
          { header: "S.No", accessorKey: "0" },
          { header: "Details", accessorKey: "1" },
        ],
      data: achievement.Table_data || [],
    })),
  },
  students_project: {
    title: "Students Project",
    contentType: "table",
    description:
      "Innovative projects undertaken by students of the department.",
    tables: studentProjectsData.map((project) => ({
      title: project.Heading || "Student Projects",
      columns: project.Table_heading?.map((header, index) => ({
        header,
        accessorKey: index.toString(),
        ...(header === "Name of the Student"
          ? {
              cell: ({ row }: { row: any }) => (
                <div>{row.original[index]?.join(", ") || "N/A"}</div>
              ),
            }
          : {}),
      })) || [
        { header: "S.No", accessorKey: "0" },
        {
          header: "Name of the Student",
          accessorKey: "1",
          cell: ({ row }: { row: any }) => (
            <div>{row.original[1]?.join(", ") || "N/A"}</div>
          ),
        },
        { header: "Name of the Title", accessorKey: "2" },
      ],
      data: project.Table_data || [],
    })),
  },
  placement_details: {
    title: "Placement Details",
    contentType: "table",
    description:
      "Comprehensive placement statistics, recruiters, and annual placement reports.",
    tables: placementData
      .filter((item: any) => item.Table_heading && item.Table_data)
      .map((item: any) => ({
        title: item.Heading || "Placement Statistics",
        columns: item.Table_heading!.map((header:string, index:string) => ({
          header,
          accessorKey: index.toString(),
        })),
        data: item.Table_data || [],
      })),
  },
  distinguished_alumni: {
    title: "Distinguished Alumni",
    contentType: "details",
    description:
      "Profiles of notable alumni who have excelled in their professional careers.",
    extraContent: (
      <div className="mt-10 space-y-8 text-lg text-neutral-700 leading-relaxed">
        <div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/Pharmacy_courses/cse/csealumni.png" // Fixed path
              alt="Distinguished Alumni"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-contain"
            />
          </div>
        </div>
      </div>
    ),
  },

  graduation_details: {
    title: "Graduation Details",
    contentType: "table",
    description:
      "Graduation statistics for various batches, including total strength and graduation percentage.",
    tables: graduationData.map((item: any) => ({
      title: item.Heading || "Graduation Statistics",
      columns: item.Table_heading?.map((header: any, index: number) => ({
        header,
        accessorKey: index.toString(),
      })) || [
          { header: "S.No", accessorKey: "0" },
          { header: "Batch", accessorKey: "1" },
          { header: "Total Strength", accessorKey: "2" },
          { header: "Number of Student Graduated", accessorKey: "3" },
          { header: "Graduate Percentage", accessorKey: "4" },
        ],
      data: item.Table_data || [],
    })),
  },
  faculty_participation: {
    title: "Faculty Participation",
    contentType: "table",
    description:
      "Faculty participation in workshops, seminars, conferences, and training programs.",
    tables: facultyParticipationData.map((item: any) => ({
      title: item.Heading || "Faculty Participation",
      columns: item.Table_heading?.map((header: any, index: number) => ({
        header,
        accessorKey: index.toString(),
      })) || [
          { header: "S.No", accessorKey: "0" },
          { header: "Details", accessorKey: "1" },
        ],
      data: item.Table_data || [],
    })),
  },
 
  magazine: {
    title: "Magazine",
    contentType: "details",
    description:
      "Departmental magazines showcasing innovations and creative works by students and staff.",
    links: [
      {
        text: "Magazine 2024-2025",
        href: "/assets/docs/departments/cse/magazine/Magazine  2024-25.pdf",
      },
    ],
  },
  e_resource: {
    title: "E-resource",
    contentType: "details",
    description:
      "ICT-enabled content and e-learning materials developed by the department.",
    links: [
      {
        text: "E-resource",
        href: "/assets/docs/departments/cse/eresource/E Resource.pdf",
      },
    ],
  },
  professional_society: {
    title: "Professional Society",
    contentType: "details",
    description:
      "Information about student chapters and professional bodies associated with the department.",
    links: [
      {
        text: "Professional Society",
        href: "/assets/images/Pharmacy_courses/cse/docs/sample.pdf",
      },
    ],
  },
  newsletter: {
    title: "NewsLetter",
    contentType: "details",
    description:
      "Periodic newsletters highlighting department updates, achievements, and events.",
    links: [
      {
        text: "Newsletter",
        href: "/assets/docs/departments/cse/news/Newsletter 2024-25.pdf",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    contentType: "details",
    description:
      "Feedback and testimonials from students, alumni, and industry partners.",
    links: [
      {
        text: "Testimonials",
        href: "/assets/docs/departments/cse/testi/cse_testimonials.pdf",
      },
    ],
  },
  valued_added_courses: {
    title: "Value Added Courses",
    contentType: "table",
    description:
      "Courses offered beyond the curriculum to enhance employability and technical skills.",
    tables: valueAddedCoursesData.map((course: any) => ({
      title: course.Heading || "Value Added Courses",
      columns: course.Table_heading?.map((header: any, index: number) => ({
        header,
        accessorKey: index.toString(),
      })) || [
          { header: "Program", accessorKey: "0" },
          { header: "Year", accessorKey: "1" },
          { header: "Duration", accessorKey: "2" },
          { header: "Enrolled", accessorKey: "3" },
          { header: "Completed", accessorKey: "4" },
        ],
      data: course.Table_data || [],
    })),
  },
  content_beyond_syllabus: {
    title: "Content Beyond Syllabus",
    contentType: "table",
    description:
      "Special sessions and workshops conducted on advanced topics beyond the prescribed syllabus.",
    tables: contentBeyondData.map((content: any) => ({
      title: "Content Beyond Syllabus",
      columns: content.Table_heading?.map((header: any, index: number) => ({
        header,
        accessorKey: index.toString(),
      })) || [
          { header: "S.No", accessorKey: "0" },
          { header: "Activity", accessorKey: "1" },
        ],
      data: content.Table_data || [],
    })),
  },
  nptel: {
    title: "NPTEL",
    contentType: "table",
    description:
      "Details of NPTEL courses completed by students and faculty under SWAYAM.",
    tables: nptelData.map((item: any) => ({
      title: item.Heading || "NPTEL Courses",
      columns: item.Table_heading?.map((header: any, index: number) => ({
        header,
        accessorKey: index.toString(),
      })) || [
          { header: "S.No", accessorKey: "0" },
          { header: "Course Name", accessorKey: "1" },
          { header: "Year", accessorKey: "2" },
        ],
      data: item.Table_data || [],
    })),
  },
};

// Helper function to find a content item by its key in the nested structure
const findItemByKey = (key: string) => {
  const root = achievementsData as Record<string, any>;
  for (const parentKey of Object.keys(root)) {
    const parentItem: any = root[parentKey];
    if (parentKey === key && parentItem?.contentType !== "folder") {
      return parentItem;
    }
    if (parentItem?.subItems) {
      const subItems = parentItem.subItems as Record<string, any>;
      const subItem = subItems[key];
      if (subItem) return subItem;
    }
  }
  return null;
};

export default function CSEDepartmentPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // ================== FACULTY: NEW STATE (ONLY FOR FACULTY) ==================
  const [facultyCards, setFacultyCards] = useState<FacultyCard[]>([]);
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyCard | null>(
    null
  );
  // ===========================================================================

  const detailsRef = useRef<HTMLDivElement | null>(null);
  const facultyDetailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeTab && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  useEffect(() => {
    if (selectedFaculty && facultyDetailsRef.current) {
      facultyDetailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedFaculty]);

  // ================== FACULTY: LOAD JSON FROM /public/assets/data/faculty_dept.json ==================
  useEffect(() => {
    const loadFaculty = async () => {
      try {
        const res = await fetch("/assets/data/faculty_dept.json", {
          cache: "no-store",
        });
        if (!res.ok)
          throw new Error(`Failed to load faculty_dept.json: ${res.status}`);
        const json: FacultyDeptJson = await res.json();
        const deptRows: FacultyRow[] = json[DEPARTMENT_NAME] || [];
        const mapped: FacultyCard[] = deptRows.map((r) => ({
          employeeId: r.employee_id,
          name: joinName(r.first_name, r.middle_name, r.last_name),
          occupation: r.designation || "",
          bio: r.desc || "",
        }));
        setFacultyCards(mapped);
      } catch (e) {
        console.error(e);
        setFacultyCards([]);
      }
    };
    loadFaculty();
  }, []);
  // ===========================================================================

  const handleItemClick = (key: string, item: any) => {
    if (item.contentType === "folder") {
      setExpandedKey((prevKey) => (prevKey === key ? null : key));
    } else {
      setActiveTab(key);
      setPdfUrl(null);
      // FACULTY: reset selection when entering/leaving
      if (key !== "faculty") setSelectedFaculty(null);
    }
  };

  const activeContent = activeTab ? findItemByKey(activeTab) : null;

  const renderNavItems = (items: object, isSublevel = false): ReactNode => {
    return Object.keys(items).map((key, index, arr) => {
      const item = (items as any)[key];
      const isExpanded = expandedKey === key;

      return (
        <div
          key={key}
          className={isSublevel ? "pl-4 border-l-2 border-neutral-200" : ""}
        >
          <button
            onClick={() => handleItemClick(key, item)}
            className={`flex items-center justify-between w-full text-left py-3 font-semibold hover:underline transition-colors ${activeTab === key ? "text-neutral-900" : "text-primary"
              }`}
          >
            <span>{item.title}</span>
            {item.contentType === "folder" && (
              <ChevronDown
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                  }`}
                size={16}
              />
            )}
          </button>

          {item.subItems && (
            <div
              className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isExpanded ? "max-h-96" : "max-h-0"
                }`}
            >
              {renderNavItems(item.subItems, true)}
            </div>
          )}

          {!isSublevel && index < arr.length - 1 && (
            <hr className="border-neutral-200" />
          )}
        </div>
      );
    });
  };

  return (
    <>
      <Hero
        title="Bachelor of Pharmacy"
        desc="To develop Pharmacy , practical experience with  responsibility."
        image="/assets/images/engineering_courses/bpharm.png"
      />

      <section className="bg-neutral-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-center max-w-4xl mx-auto">
            <Stat
              Icon={Star}
              value="1st NBA Accredited"
              label="Academic Years 2020-2021 to 2022-2023 (Upto 30.06.2023)"
            />
            <Stat
              Icon={BookOpen}
              value="MGR University"
              label="Permanent Affiliation"
            />
            <Stat
              Icon={UserCheck}
              value="60 Intake"
              label=" B.Pharm Program"
            />
            <Stat
              Icon={UserCheck}
              value="18 Intake"
              label=" M.Pharm Program"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="inline-block text-3xl font-bold tracking-tight border-b-4 border-primary pb-2">
              Course Details
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
                About the Department
              </h2>
              <div className="prose max-w-none prose-p:font-semibold prose-p:text-justify text-xl">
                <p>
                  {(deptIntro as DeptIntroItem)?.Desc +
                    ((deptIntro as DeptIntroItem)?.Bold_para1
                      ? " " + (deptIntro as DeptIntroItem).Bold_para1
                      : "") +
                    ((deptIntro as DeptIntroItem)?.Bold_para2
                      ? " " + (deptIntro as DeptIntroItem).Bold_para2
                      : "") ||
                    "The Department of Computer Science and Pharmacy offers a B.E. program with an intake of 60 students, focusing on cutting-edge technologies in software development, AI, and data science."}
                </p>
                {(deptIntro as DeptIntroItem)?.para_list?.map(
                  (para: string, index: number) => (
                    <p key={index} className="mt-6">
                      {para}
                    </p>
                  )
                )}
              </div>
            </div>
            <div>
              <Image
                src={
                  (deptIntro as DeptIntroItem)?.Image_1 ||
                  "/assets/images/engineering_courses/about.jpg"
                }
                alt="Computer Science lab"
                width={800}
                height={450}
                className="rounded-lg object-cover shadow-md w-full h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 md:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="inline-block text-3xl font-bold tracking-tight border-b-4 border-primary pb-2">
              Mission and Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center md:grid-flow-row-dense">
            <div className="md:col-start-2">
              <div className="prose max-w-none prose-p:font-semibold prose-p:text-justify prose-li:font-semibold prose-li:text-justify prose-h3:font-bold">
                <h3 className="mt-6 text-2xl font-bold">Vision</h3>
                <p className="mt-6 text-xl">
                  {(visionMission as VisionMissionItem)?.descrption1 ||
                    "To create a holistic environment for developing globally employable Computer Science and Pharmacy graduates through comprehensive educational programs and quality research."}
                </p>
                <h3 className="mt-6 text-2xl font-bold">Mission</h3>
                <ul className="mt-6 text-xl list-disc list-inside">
                  {(
                    (visionMission as VisionMissionItem)?.desc_list || [
                      "Ensuring academic growth by establishing centers of excellence and promoting collaborative learning.",
                      "Promoting research-based projects in emerging areas of technology convergence for the benefit of students and faculty.",
                      "Motivating students to be successful, ethical, and industry-ready.",
                    ]
                  ).map((mission: string, index: number) => (
                    <li key={index}>{mission}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-start-1">
              <Image
                src="/assets/images/engineering_courses/mission.png"
                alt="Students working on a computer science project"
                width={800}
                height={450}
                className="rounded-lg object-cover shadow-md w-full h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 md:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
            Computer Science and Pharmacy Achievements
          </h2>
          <p className="text-center text-lg text-neutral-600 mb-12 max-w-4xl mx-auto">
            Explore the remarkable progress and recognition earned by our
            students and faculty.
          </p>

          <div className="md:flex md:gap-12 min-h-[auto]">
            <div
              className={`transition-all duration-500 ease-in-out ${!activeTab
                  ? "w-full flex-shrink-0"
                  : "md:w-1/3 lg:w-1/4 flex-shrink-0"
                }`}
            >
              <div
                className={`w-full not-prose transition-all duration-500 ease-in-out ${!activeTab ? "max-w-md mx-auto" : "max-w-none"
                  }`}
              >
                {renderNavItems(achievementsData)}
              </div>
            </div>

            {activeTab && activeContent && (
              <div
                ref={detailsRef}
                className="w-full md:w-2/3 lg:w-3/4 animate-fade-in mt-8 md:mt-0"
              >
                {pdfUrl ? (
                  <div className="h-full flex flex-col">
                    <div className="flex-shrink-0 mb-4">
                      <button
                        onClick={() => setPdfUrl(null)}
                        className="flex items-center gap-2 text-primary font-semibold hover:underline"
                      >
                        <ArrowLeft size={16} /> Back to Details
                      </button>
                    </div>
                    <div className="flex-grow rounded-lg overflow-hidden border border-neutral-200">
                      {pdfUrl ? (
                        <CustomPdfViewer file={pdfUrl} />
                      ) : (
                        <p className="text-center text-neutral-500">
                          No PDF selected
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-neutral-50 p-6 sm:p-8 rounded-lg h-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-neutral-800">
                        {activeContent.title}
                      </h3>
                      <button
                        onClick={() => {
                          setActiveTab(null);
                          setExpandedKey(null);
                        }}
                        className="p-2 rounded-full hover:bg-neutral-200 transition-colors"
                      >
                        <X size={20} className="text-neutral-600" />
                      </button>
                    </div>

                    <p className="text-neutral-600 mb-6">
                      {activeContent.description}
                    </p>

                    {activeContent.title === "Faculty" ? (
                      <div className="mt-2">
                        {selectedFaculty ? (
                          <div
                            ref={facultyDetailsRef}
                            className="flex flex-col md:flex-row gap-6"
                          >
                            <div className="w-full md:w-2/3">
                              <button
                                onClick={() => setSelectedFaculty(null)}
                                className="flex items-center gap-2 text-primary font-semibold hover:underline mb-4"
                              >
                                <ArrowLeft size={16} /> Back to Faculty List
                              </button>
                              <h1 className="text-4xl font-bold">
                                {selectedFaculty.name}
                              </h1>
                              <p className="text-xl font-medium uppercase mt-2">
                                | {selectedFaculty.occupation}
                              </p>
                              <p className="mt-4 text-justify">
                                {selectedFaculty.bio ||
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                              </p>
                            </div>
                            <div className="w-full md:w-1/3">
                              <FacultyPhoto
                                employeeId={selectedFaculty.employeeId}
                                alt={selectedFaculty.name}
                                className="w-64 h-auto object-cover"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {facultyCards.length === 0 && (
                              <p className="text-neutral-500">
                                No faculty data found for "{DEPARTMENT_NAME}".
                              </p>
                            )}
                            {facultyCards.map((f, i) => (
                              <div
                                key={i}
                                className="group overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-lg border-b-2 border-neutral-700"
                                onClick={() => setSelectedFaculty(f)}
                              >
                                <div className="relative h-58">
                                  <FacultyPhoto
                                    employeeId={f.employeeId}
                                    alt={f.name}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                  />
                                </div>
                                <div className="p-4 text-left flex flex-col">
                                  <p className="mt-3 font-semibold text-neutral-900 underline decoration-gray-300 decoration-2 transition-all duration-300 group-hover:decoration-gray-700 text-shadow-light-gray min-h-[3rem]">
                                    {f.name}
                                  </p>
                                  <p className="text-sm text-neutral-600 font-medium inline-flex items-center mt-1">
                                    <span className="font-bold text-2xl group-hover:text-gray-700 inline-block w-6 leading-normal">
                                      |
                                    </span>
                                    {f.occupation}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        {activeContent.contentType === "table" &&
                          activeContent.tables &&
                          activeContent.tables.length > 0 && (
                            <div className="space-y-8">
                              {activeContent.tables.map(
                                (table: any, index: number) => (
                                  <DataTable
                                    key={index}
                                    title={table.title}
                                    columns={table.columns}
                                    data={table.data}
                                  />
                                )
                              )}
                            </div>
                          )}
                        {activeContent.links &&
                          activeContent.links.length > 0 && (
                            <div className="flex flex-col gap-3 mt-6">
                              <h4 className="font-semibold text-neutral-700">
                                Downloads
                              </h4>
                              {activeContent.links.map(
                                (link: any, i: number) => (
                                  <button
                                    key={i}
                                    onClick={() => setPdfUrl(link.href)}
                                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                                  >
                                    <FileText size={16} />
                                    {link.text}
                                  </button>
                                )
                              )}
                            </div>
                          )}
                        {activeContent.extraContent && (
                          <div>{activeContent.extraContent}</div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-brand-sand py-16 text-center">
        <div className="container">
          <h3 className="text-sm uppercase tracking-wider text-neutral-600 font-semibold">
            Message From The
          </h3>
          <p className="text-2xl md:text-3xl font-bold mt-2 max-w-3xl mx-auto text-neutral-800">
            Head of the Department
          </p>
          <p className="text-xl font-semibold mt-4">Dr. P. Nandhini</p>
          <a
            href="mailto:hod.cse@shanmugha.edu.in"
            className="btn btn-primary mt-6"
          >
            Contact HOD
          </a>
        </div>
      </section>
    </>
  );
}
