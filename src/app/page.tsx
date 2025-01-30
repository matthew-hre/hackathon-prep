import { Button } from "@/components/ui/button";
import { Paperclip, ArrowRight } from "lucide-react";

import { auth } from "@/auth";
import Link from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";

export default async function HomePage() {
  const session = await auth();

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <Paperclip className="h-6 w-6" />
          <span className="text-xl">Hackathon Prep</span>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitch />
          {!session?.user ? (
            <Link href="/login" passHref>
              <Button
                variant="outline"
                className="text-foreground hover:text-muted-foreground"
              >
                Login
              </Button>
            </Link>
          ) : (
            <Link href="/dashboard" passHref>
              <Button
                variant="outline"
                className="text-foreground hover:text-muted-foreground"
              >
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center space-y-8 max-w-2xl px-6">
          <h1 className="text-5xl font-bold tracking-tight">
            RAG Powered Studying.
          </h1>
          <p className="text-xl text-muted-foreground">
            Time to structure your last minute studying.
          </p>
          <div className="flex justify-center space-x-4">
            {session?.user ? (
              <Link href="/dashboard" passHref>
                <Button className="bg-foreground text-background hover:bg-muted-foreground relative group pr-12">
                  Dashboard
                  <ArrowRight className="absolute h-4 w-4 right-5 group-hover:right-3 transition-all" />
                </Button>
              </Link>
            ) : (
              <Link href="/login" passHref>
                <Button className="bg-foreground text-background hover:bg-muted-foreground relative group pr-12">
                  Login
                  <ArrowRight className="absolute h-4 w-4 right-5 group-hover:right-3 transition-all" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>

      <footer className="p-6">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>&copy; 2025 Hackathon Prep</span>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
