import { useEffect } from "react";
import { fadeBottom, fadeTopStagger } from "@/lib/animations";

import { WORKFLOW } from "@/lib/constants";

export function Workflow() {
  useEffect(() => {
    fadeBottom(".workflow-title");
    fadeTopStagger(".workflow-item", ".workflow-list", 0, 0.8);
  }, []);

  return (
    <section className="flex flex-col mt-16 bg-dark/10 py-8 w-full">
      <div className="flex flex-col items-center max-w-9/12 mx-auto">
        <h2 className="text-3xl 2xl:text-4xl text-purple font-bold mb-6 workflow-title">
          Mi Flujo de Trabajo
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full workflow-list">
          {WORKFLOW.map((workflow) => (
            <li
              className="flex flex-col items-center workflow-item"
              key={workflow.step}
            >
              <span className="text-lg text-purple font-medium font-space-grotesk">
                Paso 0{workflow.step}
              </span>
              <workflow.icon className="size-12 p-2 bg-purple text-white rounded-lg" />
              <h4 className="text-xl 2xl:text-2xl font-bold">
                {workflow.title}
              </h4>
              <p className="text-sm 2xl:text-base text-center text-dark/90">
                {workflow.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
