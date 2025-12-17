const skills = [
  "Flutter & Dart",
  "Clean Architecture",
  "BLoC / Cubit",
  "Firebase",
  "REST APIs",
  "Google Maps",
  "Integration Testing (Patrol)",
  "Git & CI/CD",
];

export default function Skills() {
  return (
    <section className="py-20">
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border rounded-lg p-3 text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
