export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-[85vh]
        flex flex-col
        px-6
        pt-24
        md:pt-0
        md:justify-center
      "
    >
      {/* Main Content */}
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-10 md:gap-12
          items-start md:items-center
          flex-1
        "
      >
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Let’s Talk 👋
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto md:mx-0">
            I’m open to freelance, full-time opportunities, or collaboration.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto md:mx-0">
          <a
            href="mailto:alessajohar@gmail.com"
            className="
              p-4 rounded-xl
              border border-gray-300 dark:border-neutral-700
              text-center
              text-neutral-800 dark:text-gray-200
              hover:text-white hover:bg-blue-500
              transition
            "
          >
            📧 Email Me
          </a>

          <a
            href="https://github.com/aafiqah"
            className="
              p-4 rounded-xl
              border border-gray-300 dark:border-neutral-700
              text-center
              text-neutral-800 dark:text-gray-200
              hover:text-white hover:bg-blue-500
              transition
            "
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alessaafiqah/"
            className="
              p-4 rounded-xl
              border border-gray-300 dark:border-neutral-700
              text-center
              text-neutral-800 dark:text-gray-200
              hover:text-white hover:bg-blue-500
              transition
            "
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>

      {/* Footer Signature */}
      <div className="text-center py-8">
        <div className="w-20 h-px bg-gray-300 dark:bg-neutral-700 mx-auto mb-4" />
        <p className="text-sm text-gray-400">
          © 2026 Designed & Built by{" "}
          <a
            href="https://github.com/aafiqah/aafiqah-portfolio-v3"
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-medium
              text-gray-500 dark:text-gray-300
              hover:text-blue-500 dark:hover:text-blue-400
              transition
            "
          >
            Alessa Afiqah
          </a>
        </p>
      </div>
    </section>
  );
}
