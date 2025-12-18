export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center gap-6">
      <h3 className="text-2xl font-bold mb-6">Projects</h3>

      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <h4 className="text-xl font-semibold">PCARI User App</h4>
          <p className="text-gray-700 mt-2">
            A Flutter mobile application featuring authentication, onboarding,
            KYC verification, Google Maps integration, and end-to-end integration
            testing using Patrol.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Flutter · Firebase · Google Maps · BLoC · Patrol
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h4 className="text-xl font-semibold">Clean Up Community App</h4>
          <p className="text-gray-700 mt-2">
            Community-focused mobile app built with Flutter using clean
            architecture, Cubit state management, and location-based features.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Flutter · Clean Architecture · Cubit · REST API
          </p>
        </div>
      </div>
    </section>
  );
}
