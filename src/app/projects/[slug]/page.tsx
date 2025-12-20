"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/lib/projects";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();

  const project = params?.slug
    ? projectsData[params.slug as keyof typeof projectsData]
    : undefined;

  if (!project) return <p>Project not found</p>;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* Back */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 mb-8"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
        <p className="text-gray-500 text-sm">
          {project.category.join(" • ")} • {project.period}
        </p>
      </header>

      {/* Image */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full h-80 rounded-3xl overflow-hidden mb-12 shadow-lg cursor-zoom-in group"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
          {project.description}
        </p>
      </section>

      {/* Tech */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 rounded-full text-sm bg-gray-100 dark:bg-neutral-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 🔗 Optional Links (only render if exist) */}
      {(project.figmaLink ||
        project.githubLink ||
        project.youtubeLink ||
        project.externalLink) && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Project Links</h2>

          <div className="flex flex-wrap gap-4">
            {/* Figma */}
            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                          bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300
                          hover:bg-blue-500 hover:text-white transition"
              >
                <Image src="/assets/icons/figma.svg" alt="Figma" width={20} height={20} />
                View Design on Figma
                <span>↗</span>
              </a>
            )}

            {/* GitHub */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                          bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300
                          hover:bg-blue-500 hover:text-white transition"
              >
                <Image src="/assets/icons/github.svg" alt="GitHub" width={20} height={20} />
                View Source Code
                <span>↗</span>
              </a>
            )}

            {/* YouTube */}
            {project.youtubeLink && (
              <a
                href={project.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                          bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300
                          hover:bg-blue-500 hover:text-white transition"
              >
                <Image src="/assets/icons/youtube.svg" alt="YouTube" width={20} height={20} />
                Watch Demo
                <span>↗</span>
              </a>
            )}

            {/* External */}
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                          bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300
                          hover:bg-blue-500 hover:text-white transition"
              >
                <Image src="/assets/icons/external.svg" alt="External" width={20} height={20} />
                Visit Website
                <span>↗</span>
              </a>
            )}
          </div>
        </section>
      )}


      {/* Lightbox */}
      {isOpen && ( <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6" onClick={() => setIsOpen(false)} > <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()} > {/* Close button */} <button onClick={() => setIsOpen(false)} className="absolute -top-10 right-0 text-white text-2xl hover:opacity-70" > ✕ </button> <div className="relative w-full h-[80vh] rounded-xl overflow-hidden"> <Image src={project.image} alt={project.title} fill className="object-contain" /> </div> </div> </div> )}
    </main>
  );
}
