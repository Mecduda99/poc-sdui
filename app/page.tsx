export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 text-zinc-950">
      <main className="grid max-w-2xl gap-6">
        <p className="text-sm font-bold uppercase tracking-wide text-teal-700">
          Server-Driven UI
        </p>
        <h1 className="text-4xl font-bold tracking-normal">
          PoC Next.js com Atomic Design, SASS e Zod
        </h1>
        <p className="text-lg leading-8 text-zinc-600">
          A rota dinamica renderiza uma pagina a partir de JSON validado no build.
        </p>
        <a
          className="inline-flex w-fit items-center rounded-lg bg-teal-700 px-5 py-3 font-bold text-white"
          href="/content/graduacao"
        >
          Abrir PoC
        </a>
      </main>
    </div>
  );
}
