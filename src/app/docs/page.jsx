import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div className="w-full px-4 py-6 sm:px-6 ">
      <div className=" max-w-5xl">
        {/* Hero */}
        <section className="mb-10 sm:mb-14">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight">
            Introduction
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Zure UI is a modern, accessible, and customizable React
            component library built with Tailwind CSS for fast and
            consistent UI development.
          </p>
        </section>

        {/* What is Zure UI */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            What is Zure UI?
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl">
            Zure UI provides production-ready components that balance
            design, accessibility, and performance. It is designed to
            be flexible, composable, and easy to integrate into any
            React project.
          </p>
        </section>

        {/* Features */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-semibold mb-5">
            Key Features
          </h2>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Tailwind CSS based",
              "Accessible by default",
              "Highly customizable",
              "Tree-shakeable",
              "Modern React patterns",
              "Minimal design system",
            ].map((feature) => (
              <li
                key={feature}
                className="rounded-lg border p-4 text-sm sm:text-base"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Code Example */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Example
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-2xl">
            Use Zure UI components directly in your React application.
          </p>

          <div className="relative overflow-x-auto rounded-lg bg-zinc-900">
            <pre className="p-4 text-xs sm:text-sm text-white min-w-[320px]">
              <code>{`import { Button } from "zure-ui";

export default function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Design Philosophy
          </h2>

          <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-muted-foreground max-w-3xl">
            <li>Composition over configuration</li>
            <li>Accessibility-first approach</li>
            <li>Minimal styling, maximum control</li>
            <li>Clear and practical documentation</li>
          </ul>
        </section>

        {/* Getting Started */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Getting Started
          </h2>

          <ol className="space-y-2 pl-5 list-decimal text-sm sm:text-base text-muted-foreground max-w-3xl">
            <li>Install Zure UI</li>
            <li>Set up Tailwind CSS</li>
            <li>Import components</li>
            <li>Build your UI</li>
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-xl border p-5 sm:p-6 lg:p-8 bg-muted/40">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Ready to build?
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-2xl">
            Follow the installation guide and start using Zure UI in your
            project today.
          </p>

          <Link
            href="/docs/installation"
            className="inline-flex w-full sm:w-auto justify-center rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-black/90"
          >
            Go to Installation →
          </Link>
        </section>
      </div>
    </div>
  );
}
