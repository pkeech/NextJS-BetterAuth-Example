// IMPORTS
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/styles/globals.css";

// METDATA
import { type Metadata } from "next";
import { Anaheim } from "next/font/google";

// METADATA
export const metadata: Metadata = {
  title: "BetterAuth Demo",
  description:
    "Demonstrating the future of web authentication with better-auth",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// FONT
const anaheim = Anaheim({
  subsets: ["latin"],
  variable: "--font-anaheim",
});

// LAYOUT
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anaheim.variable}`}>
      <body className="dark">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link href="/">
                  <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
                    <span className="text-sm font-bold text-white">BA</span>
                  </div>
                </Link>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  BetterAuth Demo
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="https://www.better-auth.com/">
                  <Button
                    variant="ghost"
                    className="hover:cursor-pointer"
                    size="sm"
                  >
                    Documentation
                  </Button>
                </Link>
                <Link href="/admin">
                  <Button
                    variant="outline"
                    className="hover:cursor-pointer"
                    size="sm"
                  >
                    Admin
                  </Button>
                </Link>
                {/* <Link href="/auth/login?redirect=/home">
                  <Button size="sm" className="hover:cursor-pointer">
                    Login
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content   */}
        <main className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 px-4 py-12 text-white">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-sm font-bold text-white">BA</span>
                  </div>
                  <span className="text-xl font-bold">BetterAuth Demo</span>
                </div>
                <p className="text-slate-400">
                  Demonstrating the future of web authentication with
                  better-auth
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold">Features</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>Secure Authentication</li>
                  <li>OAuth Integration</li>
                  <li>Multi-Factor Auth</li>
                  <li>Session Management</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold">Resources</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>Examples</li>
                  <li>Community</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold">Connect</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>GitHub</li>
                  <li>Discord</li>
                  <li>Twitter</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-400">
              <p>
                &copy; 2024 BetterAuth Demo. Built with Next.js and better-auth.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
