import { Header } from "@sections/Header";
import { Hero } from "@sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Workflow } from "./components/sections/Workflow";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Workflow />
    </>
  );
}
