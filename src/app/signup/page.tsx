import { SignupForm } from "@/components/signup-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full">
      {/* Left side - Signup Form */}
      <div className="flex w-full flex-col items-center justify-center p-6 md:w-1/2 md:p-10">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
      
      {/* Right side - Placeholder with color */}
      <div className="hidden bg-muted md:block md:w-1/2" />
    </div>
  )
}

