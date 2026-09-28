import MyButton from "./components/MyButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          {/* Logo */}
          <div className="mb-6">
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              Your money, simplified.
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Thrift<span className="text-violet-400">Rocket</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-400">
            Take control of your finances, track your spending,
            and build better money habits — all in one place.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <MyButton
              title="Get started"
              href="/signup"
            />

            <MyButton
              title="Log in"
              href="/login"
            />
          </div>

          <p className="mt-8 text-xs text-slate-600">
            Simple tools for smarter financial decisions.
          </p>
        </div>
      </div>
    </main>
  );
}