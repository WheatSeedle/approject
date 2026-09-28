
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import Transaction from "../components/Transaction";

export default function page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Welcome */}
        <div className="mb-8">
          <p className="text-sm text-slate-400">Welcome back</p>

          <h1 className="mt-1 text-3xl font-bold">
            Your financial overview
          </h1>
        </div>

        {/* Balance */}
        <section className="mb-6 rounded-2xl bg-violet-500 p-6 text-slate-950">
          <p className="text-sm font-medium opacity-80">
            Total Balance
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            $12,450.00
          </h2>

          <p className="mt-3 text-sm opacity-80">
            +8.4% from last month
          </p>
        </section>

        {/* Stats */}
        <section className="mb-8 grid gap-6 md:grid-cols-3">
          <StatCard
            title="Income"
            amount="$5,240"
            description="This month"
            positive
          />

          <StatCard
            title="Expenses"
            amount="$2,180"
            description="This month"
          />

          <StatCard
            title="Savings"
            amount="$3,060"
            description="This month"
          />
        </section>

        {/* Transactions + Actions */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* Recent transactions */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Recent Transactions
              </h2>

              <button className="text-sm text-violet-400 hover:text-violet-300">
                View all
              </button>
            </div>

            <div className="space-y-4">
              <Transaction
                name="Grocery Store"
                category="Food"
                amount="-$84.20"
              />

              <Transaction
                name="Salary"
                category="Income"
                amount="+$4,200.00"
                positive
              />

              <Transaction
                name="Netflix"
                category="Entertainment"
                amount="-$15.99"
              />

              <Transaction
                name="Electric Bill"
                category="Bills"
                amount="-$120.40"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">
              Quick Actions
            </h2>

            <div className="mt-5 space-y-3">
              <button className="w-full rounded-xl bg-violet-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-violet-400">
                + Add Transaction
              </button>

              <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-sm transition hover:bg-slate-800">
                Create Budget
              </button>

              <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-sm transition hover:bg-slate-800">
                View Reports
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
