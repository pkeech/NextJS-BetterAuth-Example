import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-slate-900 md:text-6xl dark:text-white">
            Next-Generation
            <span className="text-primary block">Authentication</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600 dark:text-slate-300">
            Experience the power of better-auth with our comprehensive demo
            showcasing secure, scalable, and developer-friendly authentication
            solutions for modern web applications.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/auth/login?redirect=/home">
              <Button
                size="lg"
                className="px-8 py-3 text-lg hover:cursor-pointer"
              >
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg hover:cursor-pointer"
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="bg-white px-4 py-20 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              Why BetterAuth?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300">
              Built with modern security standards and developer experience in
              mind
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level security with OAuth 2.0, JWT tokens, and
                  industry-standard encryption
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized performance with edge computing support and minimal
                  latency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <CardTitle>Developer First</CardTitle>
                <CardDescription>
                  TypeScript support, intuitive APIs, and comprehensive
                  documentation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
                  <svg
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <CardTitle>User Experience</CardTitle>
                <CardDescription>
                  Seamless authentication flows with customizable UI components
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <CardTitle>Compliance Ready</CardTitle>
                <CardDescription>
                  GDPR, SOC 2, and HIPAA compliant with built-in audit trails
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/20">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <CardTitle>Scalable Architecture</CardTitle>
                <CardDescription>
                  Built for scale with microservices support and cloud-native
                  design
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Demo Section */}
      {/* <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              See It In Action
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300">
              Explore our interactive demo to experience the power of
              better-auth firsthand
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Authentication Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    Email & Password Authentication
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    OAuth Social Login Integration
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    Multi-Factor Authentication
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    Session Management
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    Role-Based Access Control
                  </span>
                </li>
              </ul>
            </div>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-900 dark:text-white">
                  Ready to Get Started?
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Experience the demo and see how easy it is to implement secure
                  authentication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Launch Demo
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}
