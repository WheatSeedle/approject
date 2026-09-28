import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

export default function Login() {
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
              Welcome back. Let's manage your money.
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold">
              Login
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Enter your details to access your account.
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
            </div>

            <div className="mt-6">
              <MyButton
                title="Log in"
                href="/home"
              />
            </div>

            <p className="mt-6 text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-violet-400 transition hover:text-violet-300"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}