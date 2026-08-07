type Stat = {
  value: string;
  label: string;
};

const defaultStats: Stat[] = [
  { value: '2,500+', label: 'Clients Served' },
  { value: '12+', label: 'Years of Experience' },
  { value: '50+', label: 'Free Zone Partners' },
  { value: '100%', label: 'Compliance Rate' },
];

type StatsBarProps = {
  stats?: Stat[];
};

export default function StatsBar({ stats = defaultStats }: StatsBarProps) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-900 p-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-display text-3xl font-bold text-teal-400">{stat.value}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
