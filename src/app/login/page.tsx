import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full">
      {/* Left side - Login Form */}
      <div className="flex w-full flex-col items-center justify-center p-6 md:w-1/2 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
      
      {/* Right side - Placeholder with color */}
      <div className="hidden bg-muted md:block md:w-1/2" />
    </div>
  )
}

