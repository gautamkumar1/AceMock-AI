/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ixXzZM5o1YO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Header from "../dashboard/_components/Header"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-muted dark:bg-background">
        <nav>
            <Header/>
        </nav>
        {/* Heading Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Conquer Interview Anxiety With AI
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-muted-foreground md:text-xl">
              Practice job interview questions tailored to your job description. Get instant AI feedback and suggestions to improve your answers.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/dashboard"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="https://www.linkedin.com/in/gautamkum4r/"
                target="blank"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background dark:bg-muted px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                prefetch={false}
              > 
              Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-muted">
        <p className="text-xs text-muted-foreground dark:text-muted-foreground">
          &copy; 2024 AceMock AI Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 dark:text-muted-foreground"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 dark:text-muted-foreground"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}