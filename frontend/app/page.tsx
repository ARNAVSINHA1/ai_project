export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">EduFlow</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Fast-deploy hybrid learning productivity platform
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
            A production-ready system with React frontend, Java backend, and Python AI service.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <h2 className="text-xl font-semibold text-white">Resource Library</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Manage learning resources, search by topic, and track progress from a polished dashboard.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <h2 className="text-xl font-semibold text-white">Study Plans</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Create study plans, attach resources, and monitor your workflow in one place.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
