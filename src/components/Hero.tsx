export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-6">
      <h1 className="text-4xl md:text-5xl font-bold">
        Hi, I’m <span className="text-blue-500">Alessa</span> 👋
      </h1>

      <h2 className="text-2xl text-gray-600">
        Flutter Mobile Developer
      </h2>

      <p className="max-w-xl text-gray-700">
        I build high-quality cross-platform mobile applications using Flutter,
        focusing on clean architecture, performance, and great user experience.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-5 py-2 rounded-lg bg-blue-500 text-white"
        >
          View Projects
        </a>
        <a
          href="/Alessa_CV.pdf"
          className="px-5 py-2 rounded-lg border border-gray-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
