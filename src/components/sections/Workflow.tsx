import { useEffect } from "react";
import { fadeBottom, fadeTopStagger } from "@/lib/animations";

import { WORKFLOW } from "@/lib/constants";

export function Workflow() {
  useEffect(() => {
    fadeBottom(".workflow-title");
    fadeTopStagger(".workflow-item", ".workflow-list");
  }, []);

  return (
    <section className="flex flex-col mt-16 bg-dark/10 py-8 w-full">
      <div className="flex flex-col items-center max-w-9/12 mx-auto">
        <h2 className="text-4xl text-purple font-bold mb-6 workflow-title">
          Mi Flujo de Trabajo
        </h2>
        <ul className="flex items-center justify-between workflow-list">
          {WORKFLOW.map((workflow) => (
            <li
              className="flex flex-col items-center workflow-item"
              key={workflow.step}
            >
              <span className="text-lg text-purple font-medium font-space-grotesk">
                Paso 0{workflow.step}
              </span>
              <workflow.icon className="size-12 p-2 bg-purple text-white rounded-lg" />
              <h4 className="text-2xl font-bold">{workflow.title}</h4>
              <p className="text-center text-dark/90">{workflow.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
