import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Johana Romero
        </h1>

        {/* Description */}
        <p className="text-lg text-center sm:text-left">
          A Technical Support Analyst & Programming Enthusiast
        </p>

        {/* Projects */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="#about-me" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Download CV Button */}
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/Johana Romero - Resume.pdf"
          download
        >
          Download CV
        </a>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Johana Romero. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
