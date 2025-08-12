// IMPORTS
import RegisterForm from "@/components/auth/register";

// REGISTER PAGE
export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">
            Create your account
          </h1>
          <RegisterForm />
        </div>
      </section>
    </div>
  );
}
