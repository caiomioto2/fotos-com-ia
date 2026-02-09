import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold">404</h1>
        <p className="mt-3 text-muted-foreground">Oops! Page not found</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
