import ThemeToggle from "../theme/theme-toggle";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-6">
       <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold">
        Hi, I’m <span className="text-blue-500">Alessa Afiqah Johar</span> 👋
      </h1>

      <h2 className="text-2xl text-gray-500">
        Flutter Mobile Developer
      </h2>

      <p className="max-w-xl text-gray-400">
        Flutter Mobile Developer building clean, reliable, and user-focused cross-platform applications.
      </p>


      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-5 py-2 rounded-lg bg-blue-500 text-white"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg border border-gray-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
