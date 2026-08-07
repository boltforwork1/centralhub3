import AnimatedCounter from '@/components/AnimatedCounter';

type Stat = {
  endValue: number;
  suffix?: string;
  label: string;
};

const defaultStats: Stat[] = [
  { endValue: 2500, suffix: '+', label: 'Clients Served' },
  { endValue: 12, suffix: '+', label: 'Years of Experience' },
  { endValue: 50, suffix: '+', label: 'Free Zone Partners' },
  { endValue: 100, suffix: '%', label: 'Compliance Rate' },
];

type StatsBarProps = {
  stats?: Stat[];
};

export default function StatsBar({ stats = defaultStats }: StatsBarProps) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-900 p-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-display text-3xl font-bold text-teal-400">
            <AnimatedCounter endValue={stat.endValue} suffix={stat.suffix} />
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
