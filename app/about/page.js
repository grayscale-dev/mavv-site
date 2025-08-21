export default function About() {
  return (
    <div className="text-left">
      <div className="py-20 text-6xl sm:text-7xl font-bold tracking-tight">
        <h1 className="text-neutral-400 dark:text-neutral-700">
          Most
          <span className="text-neutral-900 dark:text-neutral-400">
            {" "}
            banking apps are noisy.
          </span>
          &nbsp;Mavv isn’t.
        </h1>
      </div>
      <h2 className="text-2xl font-normal pb-20 text-neutral-400 dark:text-neutral-500">
        Our mission with Mavv is simple: fix what’s broken in banking apps with
        a human-centered design and a frictionless experience. No clutter, no
        gimmicks—just a clean, reliable view of your money you won’t dread
        opening every day.
      </h2>
    </div>
  );
}
