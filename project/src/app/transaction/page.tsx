import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";
import StatCard from "../components/StatCard";

export default function Transactions() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm text-slate-400">
            Your financial activity
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Transaction History
          </h1>
        </div>

        {/* Summary */}
        <section className="mb-8 grid gap-6 md:grid-cols-3">
          <StatCard
            title="Total Income"
            amount="$8,450"
            description="All recorded income"
            positive
          />

          <StatCard
            title="Total Expenses"
            amount="$3,280"
            description="All recorded expenses"
          />

          <StatCard
            title="Transactions"
            amount="24"
            description="Total recorded"
          />
        </section>

        {/* History */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">
              All Transactions
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              A record of your past financial activity.
            </p>
          </div>

          <div className="space-y-4">
            {/* September */}
            <div>
              <p className="mb-4 text-sm font-medium text-violet-400">
                September 2026
              </p>

              <div className="space-y-4">
                <Transaction
                  name="Salary"
                  category="Income"
                  amount="+$4,200.00"
                  positive
                />

                <Transaction
                  name="Grocery Store"
                  category="Food"
                  amount="-$84.20"
                />

                <Transaction
                  name="Electric Bill"
                  category="Bills"
                  amount="-$120.40"
                />

                <Transaction
                  name="Netflix"
                  category="Entertainment"
                  amount="-$15.99"
                />
              </div>
            </div>

            {/* August */}
            <div className="border-t border-slate-800 pt-6">
              <p className="mb-4 text-sm font-medium text-violet-400">
                August 2026
              </p>

              <div className="space-y-4">
                <Transaction
                  name="Salary"
                  category="Income"
                  amount="+$4,200.00"
                  positive
                />

                <Transaction
                  name="Rent"
                  category="Housing"
                  amount="-$1,200.00"
                />

                <Transaction
                  name="Coffee Shop"
                  category="Food"
                  amount="-$6.50"
                />

                <Transaction
                  name="Internet Bill"
                  category="Bills"
                  amount="-$65.00"
                />
              </div>
            </div>

            {/* July */}
            <div className="border-t border-slate-800 pt-6">
              <p className="mb-4 text-sm font-medium text-violet-400">
                July 2026
              </p>

              <div className="space-y-4">
                <Transaction
                  name="Salary"
                  category="Income"
                  amount="+$4,200.00"
                  positive
                />

                <Transaction
                  name="Rent"
                  category="Housing"
                  amount="-$1,200.00"
                />

                <Transaction
                  name="Gas Station"
                  category="Transportation"
                  amount="-$48.30"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}