import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";

const technologies = [
  "Flutter & Dart",
  "State Management (BLoC / Cubit)",
  "REST APIs",
  "Unit & Widget Testing",
  "Integration Testing (Patrol)",
  "Clean Architecture",
  "Firebase",
  "Git & CI/CD",
  "Visual Studio Code",
  "Android Studio",
  "Xcode",
  "Postman",
  "Figma",
];

export default function Technologies() {
  return (
    <section id="aboutMe" className="min-h-screen flex flex-col justify-center gap-6">
      <h3 className="text-2xl font-bold mb-6">About Me</h3>
      <p className="text-gray-400">
        🚀 Hi, I’m Alessa, a Flutter Mobile Developer with hands-on experience building cross-platform applications using clean architecture and modern state management. I focus on writing clean, maintainable code and delivering reliable, user-focused mobile solutions.
      </p>
      <p className="text-gray-400">
        Outside of development, I enjoy exploring new places 🌍, photography 📸, and video editing 🎥, which helps me bring creativity and attention to detail into my work.
      </p>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="border rounded-lg p-3 text-center shadow hover:shadow-md transition-shadow duration-200"
          >
            {tech}
          </div>
        ))}
      </div> */}
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="flex items-center gap-1 px-3 py-1 text-sm
                      bg-blue-50 text-blue-600
                      dark:bg-blue-900 dark:text-blue-300"
          >
            <BadgeCheckIcon className="w-3 h-3" />
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
}
