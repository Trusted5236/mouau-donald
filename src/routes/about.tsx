import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="animate-fade-up font-display text-5xl font-semibold tracking-tight">About MediFind</h1>
        <div className="prose prose-lg mt-8 max-w-none text-muted-foreground">
          <p className="animate-fade-up delay-100">
            MediFind is a final-year computer-science project by <strong className="text-foreground">Agbata Donald Chidera</strong> at
            Michael Okpara University of Agriculture, Umudike. It tackles a real Nigerian problem:
            patients can find the <em>nearest</em> hospital, but not necessarily the <em>right</em> one.
          </p>
          <p className="animate-fade-up delay-200">
            By indexing verified specialists alongside hospital profiles, MediFind enables
            condition-aware discovery — so a stroke patient is routed to a hospital with a neurologist,
            not just one nearby.
          </p>
          <h2 className="animate-fade-up delay-300 mt-10 font-display text-2xl text-foreground">The stack</h2>
          <p className="animate-fade-up delay-300">
            MongoDB · Express.js · React · Node.js — wrapped in a clean, responsive UI.
          </p>
        </div>
      </section>
    </div>
  );
}
