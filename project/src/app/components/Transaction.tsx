
type TransactionProps = {
  name: string;
  category: string;
  amount: string;
  positive?: boolean;
};

export default function Transaction({
  name,
  category,
  amount,
  positive = false,
}: TransactionProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0">
      <div>
        <p className="font-medium">
          {name}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {category}
        </p>
      </div>

      <p
        className={`font-semibold ${
          positive
            ? "text-violet-400"
            : "text-slate-200"
        }`}
      >
        {amount}
      </p>
    </div>
  );
}

