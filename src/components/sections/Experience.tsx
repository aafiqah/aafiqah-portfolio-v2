"use client";

import { useState } from "react";
import LiquidGlass from "@/components/ui/liquid-glass";

const experience = [
  {
    place: "RF Laiyon Interactive Sdn. Bhd., Cyberjaya, Malaysia",
    roles: [
      {
        period: "Sep 2025 – Present",
        title: "Software Engineer",
        description: [
          "Built core features of the government mobile app in 1 month.",
          "Collaborated with UI/UX team to design user-friendly interfaces.",
          "Implemented features based on approved requirements, reducing rework.",
          "Guided clients during FAT sessions, improving adoption and support.",
        ],
      },
      {
        period: "Sep 2024 – Aug 2025",
        title: "Junior Mobile Developer",
        description: [
          "Maintained and enhanced cross-platform mobile apps using Flutter.",
          "Applied BLoC and Clean Architecture to speed up development.",
          "Contributed to integration tests to increase automated coverage.",
          "Refactored legacy code and optimized app performance.",
        ],
      },
      {
        period: "Feb 2024 – Aug 2024",
        title: "Intern Mobile Developer",
        description: [
          "Fixed critical app bugs and improved stability.",
          "Added new features to enhance user management.",
          "Integrated Google Maps and background music for engagement.",
        ],
      },
    ],
  },
  {
    place: "Me12Pay Digital Sdn. Bhd., Shah Alam, Malaysia",
    roles: [
      {
        period: "Nov 2021 – Apr 2022",
        title: "Intern IT",
        description: [
          "Participated in the development of the Smile to Pay app.",
          "Improved checkout workflow in an in-house shopping app.",
          "Assisted in product inventory management, reducing errors.",
          "Configured devices for SME Grant deployment.",
        ],
      },
    ],
  },
  {
    place: "Scrap Computer Trading Sdn. Bhd., Shah Alam, Malaysia",
    roles: [
      {
        period: "Mar 2019 – Jun 2019",
        title: "Intern IT Technician",
        description: [
          "Provided technical support and troubleshooting for hardware/software issues.",
          "Assisted in setting up and maintaining computer systems.",
          "Conducted regular maintenance to ensure optimal performance of IT equipment.",
        ],
      },
    ],
  },
  {
    place: "Management and Science University (MSU), Shah Alam, Malaysia",
    roles: [
      {
        period: "Feb 2020 – Jun 2022",
        title: "Bachelor in Computer Forensics",
        description: [
          "Graduated with Dean's List honors.",
          "Bachelor Final Year Project: Developed Advanced Medicine Halal Verification mobile app.",
          "Learned advanced topics: encryption, cyber law, and cybersecurity principles.",
        ],
      },
      {
        period: "Mar 2017 – Oct 2020",
        title: "Diploma in Computer Forensics",
        description: [
          "Graduated with Dean's List honors.",
          "Diploma Final Year Project: Created Face Recognition-based Class Attendance system.",
          "Hands-on experience with forensic tools: Wireshark, ProDiscover, Autopsy, EnCase.",
        ],
      },
    ]
  },
];

export default function ExperienceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="min-h-screen max-w-6xl mx-auto py-35">
      <h3 className="text-2xl font-bold mb-10">My Journey</h3>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left company list */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible md:w-64 gap-4 md:gap-2">
          {experience.map((group, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left px-4 py-2 rounded-md transition ${
                activeIndex === index
                  ? "bg-blue-500 text-white font-semibold"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900"
              }`}
            >
              {group.place.split(",")[0]}
            </button>
          ))}
        </div>

        {/* Right details */}
        <div className="flex-1 flex flex-col gap-4">
          {experience[activeIndex].roles.map((role, idx) => (
            <LiquidGlass key={idx} className="p-6 rounded-xl shadow-lg">
              <span className="text-sm text-blue-500 font-semibold">
                {role.period}
              </span>
              <h4 className="text-lg font-bold mt-1">{role.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {experience[activeIndex].place}
              </p>
              {role.description.length > 0 && (
                <ul className="mt-2 text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
                  {role.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </LiquidGlass>
          ))}
        </div>
      </div>
    </section>
  );
}
