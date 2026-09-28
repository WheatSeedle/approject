
type StatCardProps = {
  title: string;
  amount: string;
  description: string;
  positive?: boolean;
};

export default function StatCard({
  title,
  amount,
  description,
  positive = false,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <p
        className={`mt-2 text-2xl font-bold ${
          positive ? "text-violet-400" : "text-white"
        }`}
      >
        {amount}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}
