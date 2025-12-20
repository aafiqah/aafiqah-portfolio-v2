"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const categories = [
    "All",
    "Mobile Application",
    "UI/UX",
    "Website",
    "Desktop Application",
  ];

  const projects = [
    {
      title: "Advanced Medicine Halal Verification App",
      category: ["Mobile Application"],
      period: "Oct 2020 - June 2021",
      image: "/projects/medicine_halal_demo.png",
      link: "/projects/medicine_halal_verification",
    },
    {
      title: "The HUB App",
      category: ["Mobile Application"],
      period: "Apr 2021 - May 2021",
      image: "/projects/hub_app_demo.png",
      link: "/projects/the_hub_app",
    },
    {
      title: "Smile To Pay App",
      category: ["Mobile Application"],
      period: "Nov 2021 – April 2022",
      image: "/projects/smile_to_pay_demo.png",
      link: "/projects/smile_to_pay",
    },
    {
      title: "Clean Up Community App",
      category: ["Mobile Application", "UI/UX"],
      period: "Oct 2024 - Ongoing",
      image: "/projects/cleanup_community_app_demo.png",
      link:"/projects/clean_up",
    },
    {
      title: "Week Habit UI/UX",
      category: ["UI/UX"],
      period: "Aug 2023 - Sept 2023",
      image: "/projects/weekhabit_demo.png",
      link:"/projects/week_habit",
    },
    {
      title: "Personal Website V1",
      category: ["Website"],
      period: "4 Nov 2023",
      image: "/projects/v1_demo.png",
      link: "/projects/personal_website_v1",
    },
    {
      title: "Personal Website V2",
      category: ["Website"],
      period: "24 Nov 2023",
      image: "/projects/v2_demo.png",
      link: "/projects/personal_website_v2",
    },
    {
      title: "Class Attendance Using Face Recognition System",
      category: ["Desktop Application"],
      period: "Sept 2019 - Dec 2019",
      image: "/projects/class_face_demo.png",
      link: "/projects/class_attendance_face_recognition",
    },
    {
      title: "Face Mask Detection and Alert Message System",
      category: ["Desktop Application"],
      period: "Apr 2021 - May 2021",
      image: "/projects/face_mask_demo.png",
      link: "/projects/face_mask_detection",
    },
    {
      title: "Bookstore System",
      category: ["Desktop Application"],
      period: "May 2020",
      image: "/projects/bookstore_online_demo.png",
      link: "/projects/bookstore",
    },
    {
      title: "Local Account System",
      category: ["Desktop Application"],
      period: "Aug 2022",
      image: "/projects/local_account_demo.png",
      link: "/projects/local_account",
    },
    {
      title: "Pcari Booking App",
      category: ["Mobile Application"],
      period: "Sept 2024 - June 2025",
      image: "/projects/pcari_booking_demo.png",
      link: "/projects/pcari_booking",
    },
    {
      title: "Pcari Connect App",
      category: ["Mobile Application"],
      period: "Feb 2024 - June 2025",
      image: "/projects/pcari_booking_demo.png",
      link: "/projects/pcari_connect",
    },
    {
      title: "Kad Pekerja Madani Digital App",
      category: ["Mobile Application"],
      period: "Oct 2025 - Nov 2025",
      image: "/projects/kad_pekerja_demo.png",
      link: "/projects/kad_pekerja",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  // 🔍 Detect external links
  const isExternalLink = (url: string) =>
    url.startsWith("http://") || url.startsWith("https://");

  // 🔢 Category counts
  const categoryCounts = categories.reduce<Record<string, number>>(
    (acc, cat) => {
      if (cat === "All") {
        acc[cat] = projects.length;
      } else {
        acc[cat] = projects.filter((p) => p.category.includes(cat)).length;
      }
      return acc;
    },
    {}
  );

  // 🧠 Extract year from period string
  const getYear = (period: string) => {
    const match = period.match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
  };

  // 🎯 Filter by category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  // 🔃 Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const yearA = getYear(a.period);
    const yearB = getYear(b.period);
    return sortOrder === "latest" ? yearB - yearA : yearA - yearB;
  });

  return (
    <section id="projects" className="min-h-screen max-w-6xl mx-auto py-35 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold">Projects</h3>
        <Link
          href="/projects/list_projects"
          className="inline-block mt-2 text-blue-500 font-medium hover:underline"
        >
          ✨ A collection of projects ✨
        </Link>
      </div>

      {/* Filters + Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-14">
        {/* Categories */}
        <div className="flex gap-4 flex-wrap text-sm font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition px-4 py-1 rounded-full ${
                activeCategory === cat
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-blue-500 hover:dark:text-white"
              }`}
            >
              {cat} ({categoryCounts[cat]})
            </button>
          ))}
        </div>
        {/* Sort Button */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">Sort:</span>
          <button
            onClick={() =>
              setSortOrder(sortOrder === "latest" ? "oldest" : "latest")
            }
            className="px-4 py-1 rounded-full border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
          >
            {sortOrder === "latest"
              ? "Latest → Oldest"
              : "Oldest → Latest"}
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedProjects.map((project, index) => (
          <div key={index}>
            {/* Card */}
            <div className="relative bg-white dark:bg-neutral-900 rounded-3xl h-56 shadow-lg overflow-hidden hover:scale-[1.02] transition group">
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {project.link && (
                <Link
                  href={project.link}
                  target={
                    isExternalLink(project.link) ? "_blank" : undefined
                  }
                  rel={
                    isExternalLink(project.link)
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={`View ${project.title} project`}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </Link>
              )}
            </div>

            {/* Text */}
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-400 text-sm">
              {project.category.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
