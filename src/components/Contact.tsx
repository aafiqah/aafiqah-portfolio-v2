export default function Contact() {
  return (
    <section className="py-20">
      <h3 className="text-2xl font-bold mb-6">Contact</h3>

      <p className="text-gray-700 mb-4">
        Interested in working together? Feel free to reach out.
      </p>

      <div className="flex gap-6">
        <a href="mailto:your@email.com" className="text-blue-500">
          Email
        </a>
        <a href="https://github.com/yourusername" className="text-blue-500">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" className="text-blue-500">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
