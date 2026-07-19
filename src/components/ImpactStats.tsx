const stats = [
  { value: "$12,500", label: "Annual funding provided to member organizations" },
  { value: "3,750+", label: "Attendance across all of our signature events" },
  { value: "1,000+", label: "Total members served across 33 organizations" },
  { value: "5,000+", label: "USC Undergraduates identify as APIDA" },
];

export function ImpactStats() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 lg:px-20">
      <h2 className="font-satoshi text-2xl font-bold text-black lg:text-3xl">
        Our Impact and Reach
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-start">
            <p className="font-satoshi text-4xl font-black tracking-[-0.01em] text-apasa-teal lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-1 text-base font-medium tracking-[-0.02em] text-black">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
