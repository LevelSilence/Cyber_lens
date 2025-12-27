import React from "react";

type NewsItem = {
  title: string;
  summary: string;
  category?: "Threat" | "Vulnerability" | "Advisory";
};

export default function News() {
  const newsItems: NewsItem[] = [
    {
      title: "New Ransomware Campaign Targets Indian Enterprises",
      summary:
        "Security researchers report a surge in ransomware operations targeting mid-size Indian enterprises through phishing and exposed services.",
      category: "Threat",
    },
    {
      title: "Zero-Day Vulnerability Found in Popular Web Framework",
      summary:
        "A critical zero-day vulnerability allows remote code execution. Active exploitation has been observed in the wild.",
      category: "Vulnerability",
    },
    {
      title: "Threat Actors Exploit Misconfigured Cloud Buckets",
      summary:
        "Public cloud storage misconfigurations continue to leak sensitive data at scale across industries.",
      category: "Advisory",
    },
  ];

  const categoryStyle = (cat?: string) =>
    cat === "Threat"
      ? "bg-red-500/10 text-red-400 ring-red-500/20"
      : cat === "Vulnerability"
      ? "bg-amber-500/10 text-amber-400 ring-amber-500/20"
      : "bg-cyan-500/10 text-cyan-400 ring-cyan-500/20";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Cyber Threat News
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Structured security bulletins and intelligence updates
          </p>
        </header>

        {/* News Feed */}
        <section className="space-y-4">
          {newsItems.map((item, idx) => (
            <article
              key={idx}
              className="relative rounded-xl border border-slate-800 bg-slate-900 p-5 hover:bg-slate-800/60 transition"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-cyan-500/60" />

              <div className="pl-4">
                {/* Meta */}
                <div className="mb-2 flex items-center gap-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ring-1 ${categoryStyle(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    Cyber Intelligence
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                  {item.summary}
                </p>

                {/* Action */}
                <div className="mt-3 text-sm font-medium text-cyan-400 hover:underline cursor-pointer">
                  View details →
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Footer note */}
        <div className="mt-8 text-xs text-slate-500">
          All updates follow a unified bulletin format for consistent review.
        </div>
      </div>
    </div>
  );
}
