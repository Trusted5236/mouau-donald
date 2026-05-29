import { Link } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-6">
            <Stethoscope className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">MediFind</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">Home</Link>
          <Link to="/search" className="text-muted-foreground transition-colors hover:text-foreground">Search</Link>
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">About</Link>
          <Link to="/admin" className="text-muted-foreground transition-colors hover:text-foreground">Admin</Link>
        </nav>
        <Link
          to="/login"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}
