"use client";

import Link from "next/link";
import { useState } from "react";
import { projectsData, Project } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = Object.values(projectsData);

  // Extract last year from period
  const getYear = (period: string) => {
    const matches = period.match(/\d{4}/g);
    if (!matches) return 0;
    return parseInt(matches[matches.length - 1]);
  };

  // Sorting state
  const [sortBy, setSortBy] = useState<"year" | "category">("year");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Sort function
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "year") {
      return sortOrder === "desc"
        ? getYear(b.period) - getYear(a.period)
        : getYear(a.period) - getYear(b.period);
    } else if (sortBy === "category") {
      const catA = a.category.join(", ").toLowerCase();
      const catB = b.category.join(", ").toLowerCase();
      if (catA < catB) return sortOrder === "asc" ? -1 : 1;
      if (catA > catB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    }
    return 0;
  });

  // Handle column click
  const handleSort = (column: "year" | "category") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder(column === "year" ? "desc" : "asc");
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 mb-6"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold mb-4">List Projects</h1>
      <p className="text-gray-500 mb-12">A collection of projects I’ve worked on</p>

      {/* Table Header for desktop */}
      <div className="hidden sm:grid grid-cols-6 gap-4 text-sm font-semibold text-gray-500 border-b pb-3 cursor-pointer">
        <div onClick={() => handleSort("year")}>Year {sortBy === "year" ? (sortOrder === "asc" ? "↑" : "↓") : ""}</div>
        <div className="col-span-2">Title</div>
        <div onClick={() => handleSort("category")}>
          Category {sortBy === "category" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </div>
        <div>Built with</div>
        <div>Links</div>
      </div>

      {/* Project Rows */}
      <div className="space-y-4">
        {sortedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col sm:grid sm:grid-cols-6 sm:gap-4 items-start sm:items-center">
              <div className="text-blue-500 font-medium">{getYear(project.period)}</div>
              <div className="col-span-2 font-semibold">{project.title}</div>
              <div className="text-gray-500 dark:text-neutral-500">{project.category.join(" • ")}</div>
              <div className="text-gray-500 dark:text-neutral-500 text-sm mt-1 sm:mt-0">{project.tech.join(" · ")}</div>
              <div className="flex items-center gap-2 mt-1 sm:mt-0">
                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Figma
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    YouTube
                  </a>
                )}
                {project.externalLink && (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
