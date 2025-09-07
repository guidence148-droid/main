export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl w-full rounded-2xl shadow-md bg-white p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚀 guidence.AI
        </h1>
        <p className="text-gray-600 mb-8">
          Your AI-powered career companion – Resume, Roadmap, Interview Prep & Job Finder.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="/resume"
            className="rounded-xl border p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">📄 Resume Builder</h2>
            <p className="text-sm text-gray-500">
              Upload and optimize your ATS-friendly resume.
            </p>
          </a>

          <a
            href="/roadmap"
            className="rounded-xl border p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">🛤 Career Roadmap</h2>
            <p className="text-sm text-gray-500">
              Personalized learning path for your dream role.
            </p>
          </a>

          <a
            href="/interview"
            className="rounded-xl border p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">🎤 Interview Prep</h2>
            <p className="text-sm text-gray-500">
              Practice Q&A with instant AI feedback.
            </p>
          </a>

          <a
            href="/jobs"
            className="rounded-xl border p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">💼 Job Finder</h2>
            <p className="text-sm text-gray-500">
              Discover jobs tailored to your resume & skills.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
