export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex min-h-[80vh] max-w-[1200px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="h-3 w-40 rounded-full bg-foreground/10" />
          <div className="h-10 w-28 rounded-full bg-gold/20" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <div className="h-4 w-44 rounded-full bg-gold/30" />
            <div className="space-y-4">
              <div className="h-16 w-full max-w-2xl rounded bg-foreground/10" />
              <div className="h-16 w-10/12 max-w-xl rounded bg-foreground/10" />
            </div>
            <div className="h-5 w-full max-w-lg rounded-full bg-foreground/10" />
            <div className="h-12 w-44 rounded-full bg-gold/25" />
          </div>
          <div className="aspect-[4/5] w-full rounded-sm bg-foreground/10" />
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-foreground/10">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-gold" />
        </div>
      </div>
    </main>
  );
}
