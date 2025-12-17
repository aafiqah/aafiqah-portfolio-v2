export default function Experience() {
  return (
    <section className="py-20">
      <h3 className="text-2xl font-bold mb-6">Experience</h3>

      <div className="border rounded-lg p-6">
        <h4 className="text-xl font-semibold">
          Flutter Mobile Developer
        </h4>
        <p className="text-gray-500">
          Software Company · Contract
        </p>

        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
          <li>
            Developed and maintained Flutter mobile applications using clean
            architecture.
          </li>
          <li>
            Implemented authentication, onboarding, KYC flows, and location-based
            features.
          </li>
          <li>
            Wrote comprehensive integration tests using Patrol to ensure app
            stability.
          </li>
        </ul>
      </div>
    </section>
  );
}
