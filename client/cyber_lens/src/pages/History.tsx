import React from "react";

type Row = {
  ioc: string;
  verdict: "Malicious" | "Clean" | "Suspicious" | "";
  timestamp: string;
  note: string;
};

export default function History() {
  const dummyData: Row[] = [
    {
      ioc: "8.8.8.8",
      verdict: "Malicious",
      timestamp: "2025-01-12 14:32",
      note: "Known public DNS abuse",
    },
    {
      ioc: "example.com",
      verdict: "Clean",
      timestamp: "2025-01-11 10:05",
      note: "No recent issues",
    },
    {
      ioc: "http://suspicious.example",
      verdict: "Suspicious",
      timestamp: "2025-01-10 08:14",
      note: "Low-confidence detection",
    },
  ];

  const badgeClass = (v: string) =>
    v === "Malicious"
      ? "bg-red-600/10 text-red-400 ring-red-600/20"
      : v === "Clean"
      ? "bg-emerald-600/10 text-emerald-400 ring-emerald-600/20"
      : v === "Suspicious"
      ? "bg-amber-500/10 text-amber-400 ring-amber-500/20"
      : "bg-slate-600/10 text-slate-400";

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-4 py-12">
      {/* Lens accent (sharp, subtle) */}
      <div className="absolute right-6 top-6 hidden lg:block">
        <div className="h-14 w-14 rounded-full border-2 border-cyan-500/30 flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Scan History
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Previously analyzed Indicators of Compromise — sorted newest
              first.
            </p>
          </div>

          {/* Small action area (visual only) */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <input
                aria-label="Search history"
                type="search"
                placeholder="Search IOC, note..."
                className="px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button className="px-3 py-2 rounded-md bg-cyan-600/10 text-cyan-300 border border-cyan-600/20 text-sm hover:bg-cyan-600/15">
              Export
            </button>
          </div>
        </div>

        {/* Card list for small screens */}
        <div className="space-y-4 md:hidden">
          {dummyData.map((row, idx) => (
            <article
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm text-slate-400 truncate">
                      {row.ioc || "—"}
                    </div>
                    <div
                      className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ring-1 ${badgeClass(
                        row.verdict
                      )}`}
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          background:
                            row.verdict === "Malicious"
                              ? undefined
                              : row.verdict === "Clean"
                              ? undefined
                              : undefined,
                        }}
                      />
                      {row.verdict || "Unknown"}
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-slate-300 line-clamp-3">
                    {row.note || "—"}
                  </p>

                  <div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
                    <span>{row.timestamp || "—"}</span>
                    <span className="hidden sm:inline">•</span>
                    <button className="text-cyan-400 hover:underline text-xs">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Table for md+ screens */}
        <div className="hidden md:block mt-4">
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70">
            <table className="min-w-full table-fixed">
              <thead className="bg-slate-800/80 text-slate-300">
                <tr>
                  <th className="w-2/5 px-4 py-3 text-left text-sm font-medium">
                    IOC
                  </th>
                  <th className="w-1/6 px-4 py-3 text-left text-sm font-medium">
                    Verdict
                  </th>
                  <th className="w-1/4 px-4 py-3 text-left text-sm font-medium">
                    Timestamp
                  </th>
                  <th className="w-1/5 px-4 py-3 text-left text-sm font-medium">
                    Note
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800">
                {dummyData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-4 py-4 align-top">
                      <div className="text-sm text-slate-100 truncate max-w-lg">
                        {row.ioc || "—"}
                      </div>
                    </td>

                    <td className="px-4 py-4 align-top">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ring-1 ${badgeClass(
                          row.verdict
                        )}`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            row.verdict === "Malicious"
                              ? "bg-red-400"
                              : row.verdict === "Clean"
                              ? "bg-emerald-400"
                              : row.verdict === "Suspicious"
                              ? "bg-amber-400"
                              : "bg-slate-400"
                          }`}
                        />
                        {row.verdict || "Unknown"}
                      </div>
                    </td>

                    <td className="px-4 py-4 align-top">
                      <div className="text-sm text-slate-400">
                        {row.timestamp || "—"}
                      </div>
                    </td>

                    <td className="px-4 py-4 align-top">
                      <div className="text-sm text-slate-300 truncate max-w-xs">
                        {row.note || "—"}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* lightweight footer / hint */}
          <div className="mt-4 text-xs text-slate-500">
            Showing {dummyData.length} recent scans — responsive view: table on
            wider screens, compact cards on mobile.
          </div>
        </div>
      </div>
    </div>
  );
}
