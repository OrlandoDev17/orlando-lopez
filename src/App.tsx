import { Header } from "@sections/Header";
import { Hero } from "@sections/Hero";
import { About } from "@sections/About";
import { Projects } from "@sections/Projects";
import { Workflow } from "@sections/Workflow";
import { Skills } from "@sections/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Workflow />
      <Skills />
      <About />
      <footer className="flex flex-col mb-4">
        <hr className="w-10/12 mx-auto py-4 text-gray-200" />
        <span className="text-center text-gray-500">
          Creado con ❤️ por Orlando López © 2026.
        </span>
      </footer>
    </>
  );
}
