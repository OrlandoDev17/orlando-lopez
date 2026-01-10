import { SKILLS } from "@/lib/constants";
import { SkillCard } from "@ui/SkillCard";

import { useEffect } from "react";
import { fadeRight, fadeLeft, fadeTop } from "@/lib/animations";

export function Skills() {
  useEffect(() => {
    fadeRight(".fade-right");
    fadeLeft(".fade-left", 1);
    fadeTop(".fade-top", 0.5);
    fadeTop(".skills-title");
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col gap-4 mt-16 mb-4 max-w-11/12 xl:max-w-9/12 mx-auto w-full"
    >
      <header className="flex flex-col gap-2 skills-title">
        <h2 className="text-3xl 2xl:text-4xl text-purple font-semibold">
          Habilidades Técnicas
        </h2>
        <p className="text-lg text-dark/90">
          Sección en la que muestro mis mayores virtudes en el ámbito del
          desarrollo.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 mt-8">
        {SKILLS.map((skill) => (
          <div key={skill.title} className={skill.animation}>
            <SkillCard {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
