import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

export default function Signup() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 text-white">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md">
          {/* Branding */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">
              Thrift<span className="text-violet-400">Rocket</span>
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Start building better financial habits.
            </p>
          </div>

          {/* Signup Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold">
              Create an account
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Sign up to start tracking your finances.
            </p>

            <div className="mt-6 space-y-4">
              <MyInput
                type="email"
                placeholder="Email"
              />

              <MyInput
                type="password"
                placeholder="Password"
              />

              <MyInput
                type="password"
                placeholder="Confirm password"
              />
            </div>

            <div className="mt-6">
              <MyButton
                title="Sign up"
                href="/home"
              />
            </div>

            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-violet-400 transition hover:text-violet-300"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}