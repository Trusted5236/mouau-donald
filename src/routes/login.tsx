import { createFileRoute, Link } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="relative hidden gradient-warm md:block">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary text-primary-foreground animate-float">
              <Stethoscope className="h-8 w-8" />
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold">MediFind Admin</h2>
            <p className="mt-2 max-w-xs text-muted-foreground">Manage hospitals and specialists across Nigeria.</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <form className="animate-fade-up w-full max-w-sm space-y-6">
          <div>
            <h1 className="font-display text-3xl font-semibold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to your account</p>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="admin@hospital.gov.ng" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button type="button" className="w-full">Sign in</Button>
          <p className="text-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">← Back to MediFind</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
