import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      year: "2023",
      title: "Personal Website V1",
      category: "Website Development",
      tech: "Jekyll · SCSS · HTML · GitHub Pages",
      builtAt: "—",
      link: "https://github.com",
    },
    {
      year: "2023",
      title: "Week Habit UI/UX",
      category: "UI/UX Design",
      tech: "Figma · Adobe XD · Illustrator",
      builtAt: "—",
      link: "https://figma.com",
    },
    {
      year: "2022",
      title: "Local Account System",
      category: "Desktop App Development",
      tech: "Java · NetBeans · MySQL",
      builtAt: "Great Vital",
      link: "https://github.com",
    },
    {
      year: "2021",
      title: "Smile to Pay App",
      category: "Android App Development",
      tech: "Java · Firebase · Android Studio · Figma",
      builtAt: "Me12Pay Digital",
      link: "https://github.com",
    },
    {
      year: "2021",
      title: "Medicine Halal App",
      category: "Android App Development",
      tech: "Java · Firebase · Android Studio · Figma",
      builtAt: "—",
      link: "https://github.com",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 mb-6"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold mb-4">List Projects</h1>
      <p className="text-gray-500 mb-12">
        A collection of projects I’ve worked on
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 text-sm font-semibold text-gray-500 border-b pb-3">
        <div>Year</div>
        <div className="col-span-2">Title</div>
        <div>Category</div>
        <div>Built with</div>
        <div>Built at</div>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 py-4 text-sm items-center hover:bg-gray-50 dark:hover:bg-gray-900 transition"
          >
            <div className="text-blue-500 font-medium">
              {project.year}
            </div>

            <div className="col-span-2 font-semibold">
              {project.title}
            </div>

            <div>{project.category}</div>

            <div className="text-gray-500">
              {project.tech}
            </div>

            <div className="flex items-center gap-2">
              <span>{project.builtAt}</span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
