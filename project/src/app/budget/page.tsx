import Navbar from "../components/Navbar";

export default function Budgets() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-slate-400">
            Plan your spending
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Budgets
          </h1>

          <p className="mt-2 text-slate-400">
            Keep track of how much you're planning to spend.
          </p>
        </div>

        {/* Monthly Overview */}
        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-400">
                Monthly Budget
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                $3,000.00
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                $1,820.00 remaining
              </p>
            </div>

            <button className="rounded-xl bg-violet-500 px-4 py-3 font-medium text-white transition hover:bg-violet-400">
              + Create Budget
            </button>
          </div>

          {/* Overall Progress */}
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-400">
                $1,180 spent
              </span>

              <span className="text-slate-400">
                39.3%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-violet-500"
                style={{ width: "39.3%" }}
              />
            </div>
          </div>
        </section>

        {/* Budget Categories */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Budget Categories
            </h2>

            <button className="text-sm text-violet-400 hover:text-violet-300">
              Manage
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <BudgetCard
              category="Food & Dining"
              spent="$320"
              budget="$500"
              percentage={64}
            />

            <BudgetCard
              category="Transportation"
              spent="$180"
              budget="$300"
              percentage={60}
            />

            <BudgetCard
              category="Entertainment"
              spent="$95"
              budget="$200"
              percentage={47.5}
            />

            <BudgetCard
              category="Shopping"
              spent="$240"
              budget="$400"
              percentage={60}
            />
          </div>
        </section>

        {/* Future Feature */}
        <section className="mt-8 rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-8 text-center">
          <h2 className="text-lg font-semibold">
            More budgeting tools coming soon
          </h2>


        </section>
      </div>
    </main>
  );
}




function BudgetCard({
  category,
  spent,
  budget,
  percentage,
}: {
  category: string;
  spent: string;
  budget: string;
  percentage: number;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {category}
        </h3>

        <span className="text-sm text-slate-400">
          {percentage}%
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold">
            {spent}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            of {budget} budget
          </p>
        </div>

        <p className="text-sm text-slate-400">
          {budget}
        </p>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-violet-500"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
}