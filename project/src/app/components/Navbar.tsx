
export default function Navbar() {
  return (
    <nav className="border-b border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          Thrift<span className="text-violet-400">Rocket</span>
        </a>

        {/* Navigation */}
        <div className="hidden gap-6 text-sm text-slate-400 md:flex">
          <a
            href="/"
            className="text-white"
          >
            Dashboard
          </a>

          <a
            href="/transaction"
            className="transition hover:text-white"
          >
            Transactions
          </a>

          <a
            href="/budget"
            className="transition hover:text-white"
          >
            Budgets
          </a>

        </div>

        {/* Profile */}
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm font-medium">
          JD
        </button>
      </div>
    </nav>
  );
}

