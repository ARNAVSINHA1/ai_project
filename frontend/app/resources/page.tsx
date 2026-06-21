import Link from 'next/link';

async function getResources() {
  const res = await fetch('http://localhost:3000/api/resources', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to load resources');
  }
  return res.json();
}

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Resources</p>
              <h1 className="text-3xl font-semibold text-white">Learning content library</h1>
            </div>
            <Link href="/resources/new" className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Add new resource
            </Link>
          </div>
          <p className="text-slate-400">Browse curated learning materials for modern learners. Add and manage resources with a focus on clean UX and fast workflows.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/80 p-10 text-center text-slate-400">
              No resources yet. Add your first learning item to get started.
            </div>
          ) : (
            resources.map((resource: any) => (
              <article key={resource.id} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1 hover:border-cyan-500/50">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{resource.category}</p>
                    <h2 className="mt-3 text-xl font-semibold text-white">{resource.title}</h2>
                  </div>
                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slate-300">{resource.level}</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300">{resource.description}</p>
                <a href={resource.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-medium text-cyan-300 hover:text-cyan-200">
                  Open resource →
                </a>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
