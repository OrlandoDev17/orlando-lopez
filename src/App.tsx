import { lazy, Suspense } from "react";
import { Header } from "@sections/Header";
import { Hero } from "@sections/Hero";

const Projects = lazy(() =>
  import("@sections/Projects").then((m) => ({ default: m.Projects })),
);
const Workflow = lazy(() =>
  import("@sections/Workflow").then((m) => ({ default: m.Workflow })),
);
const Skills = lazy(() =>
  import("@sections/Skills").then((m) => ({ default: m.Skills })),
);
const About = lazy(() =>
  import("@sections/About").then((m) => ({ default: m.About })),
);

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <Projects />
        <Workflow />
        <Skills />
        <About />
      </Suspense>
      <footer className="flex flex-col mb-4">
        <hr className="w-10/12 mx-auto py-4 text-gray-200" />
        <span className="text-center text-gray-500">
          Creado con ❤️ por Orlando López © 2026.
        </span>
      </footer>
    </>
  );
}
