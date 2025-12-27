import React, { useState } from "react";

const Home: React.FC = () => {
  const [iocValue, setIocValue] = useState("");
  const [iocType, setIocType] = useState("IP");

  const handleSearch = () => {
    // UI only — no API
    console.log(`Searching for ${iocType}: ${iocValue}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 pt-24 pb-32">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl font-bold leading-[1.15] pb-2 mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Cyber Lens
          </h1>
          <p className="text-lg sm:text-xl mb-10 text-gray-300">
            Illuminating the digital shadows. Stay ahead in cybersecurity with
            threat intelligence and IOC analysis.
          </p>

          {/* Search Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto mb-10">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter IOC value"
                value={iocValue}
                onChange={(e) => setIocValue(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <select
                value={iocType}
                onChange={(e) => setIocType(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="IP">IP Address</option>
                <option value="Domain">Domain</option>
                <option value="URL">URL</option>
                <option value="Hash">Hash</option>
              </select>

              <button
                onClick={handleSearch}
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Search
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Threats
            </button>
            <button className="border border-red-600 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-red-400">
                Real-time Monitoring
              </h3>
              <p className="text-gray-300">
                Track cyber threats as they emerge using continuously updated
                intelligence sources.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-red-400">
                Threat Analysis
              </h3>
              <p className="text-gray-300">
                Understand IOC behavior, reputation, and potential impact
                clearly.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-red-400">
                Expert Insights
              </h3>
              <p className="text-gray-300">
                Learn from curated insights and best practices in cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
