export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h3 className="text-4xl font-bold mb-4">
            Let’s Talk 👋
          </h3>
          <p className="text-gray-500 mb-6">
            I’m open to freelance, full-time opportunities, or collaboration.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <a
            href="mailto:alessajohar@gmail.com"
            className="p-4 rounded-xl border dark:border-neutral-700 text-center hover:text-white hover:bg-blue-500 transition"
          >
            📧 Email Me
          </a>
          <a
            href="https://github.com/aafiqah"
            className="p-4 rounded-xl border dark:border-neutral-700 text-center hover:text-white hover:bg-blue-500 transition"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alessaafiqah/"
            className="p-4 rounded-xl border dark:border-neutral-700 text-center hover:text-white hover:bg-blue-500 transition"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
