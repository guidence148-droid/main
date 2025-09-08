"use client";

import { useEffect, useState } from "react";

// Define the type for Guidence data
interface Guidence {
  id?: number;
  name?: string;
  error?: string;
  [key: string]: any; // fallback for unknown fields
}

export default function Home() {
  const [helloMsg, setHelloMsg] = useState<string>("Loading...");
  const [guidenceData, setGuidenceData] = useState<Guidence[]>([]);

  // Fetch backend /hello on load
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`)
      .then((res) => res.text())
      .then((data) => setHelloMsg(data))
      .catch(() => setHelloMsg("❌ Failed to connect to backend"));
  }, []);

  // Handler to fetch Guidence_T1 table
  const fetchGuidence = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guidence`);
      const data: Guidence[] = await res.json();
      setGuidenceData(data);
    } catch (error) {
      console.error(error); // log the error for debugging
      setGuidenceData([{ error: "❌ Failed to fetch from DB" }]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl w-full rounded-2xl shadow-md bg-white p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🚀 guidence.AI</h1>
        <p className="text-gray-600 mb-8">
          Your AI-powered career companion – Resume, Roadmap, Interview Prep & Job Finder.
        </p>

        {/* Feature cards */}
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

        {/* Backend Test Section */}
        <div className="mt-10 text-left">
          <h2 className="text-2xl font-bold text-gray-700 mb-3">
            🔗 Connected Backend
          </h2>
          <p className="text-gray-600 mb-4">
            This shows real data from your Render backend and Supabase DB.
          </p>

          <div className="rounded-lg border bg-gray-50 p-4 mb-6">
            <h3 className="text-lg font-semibold">/hello Response:</h3>
            <p className="text-gray-800 mt-2">{helloMsg}</p>
          </div>

          <button
            onClick={fetchGuidence}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Fetch Guidence_T1 Data
          </button>

          {guidenceData.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">/guidence Data:</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                {JSON.stringify(guidenceData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
