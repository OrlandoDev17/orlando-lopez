import { PRINCIPLES, STATS } from "@/lib/constants";
import { useEffect } from "react";
import { fadeBottom, fadeRightStagger, fadeTopStagger } from "@/lib/animations";

export function About() {
  useEffect(() => {
    fadeBottom(".title");
    fadeRightStagger(".principle", "principles-container");
    fadeTopStagger(".stats-item", "stats-container");
  }, []);

  return (
    <section
      id="about"
      className="max-w-9/12 mx-auto w-full py-24 flex flex-col md:flex-row gap-16 items-start"
    >
      <div className="w-full md:w-5/12 flex flex-col gap-10">
        <header className="title">
          <h2 className="text-3xl 2xl:text-4xl text-purple font-semibold font-space-grotesk mb-3">
            Principios de Desarrollo
          </h2>
          <p className="text-lg text-dark/80 font-dm-sans leading-relaxed">
            Pilares fundamentales que guían mi proceso creativo y técnico.
          </p>
        </header>

        <ul className="flex flex-col gap-5 principles-container">
          {PRINCIPLES.map(({ id, title, description, icon: Icon }) => (
            <li
              key={id}
              className="flex gap-4 items-center p-4 rounded-xl group principle"
            >
              <Icon className="p-2 size-11 bg-purple rounded-lg text-white" />
              <div>
                <h3 className="text-xl font-bold text-dark group-hover:text-purple transition-colors font-space-grotesk">
                  {title}
                </h3>
                <p className="text-dark/70 mt-1 font-dm-sans text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-7/12 flex flex-col gap-8 pt-2">
        <header className="title">
          <h2 className="text-3xl 2xl:text-4xl text-purple font-semibold font-space-grotesk">
            Sobre Mí
          </h2>
        </header>

        <article className="flex flex-col gap-6 text-lg text-dark/90 font-dm-sans leading-relaxed text-pretty">
          <p>
            Con más de{" "}
            <span className="text-purple font-semibold">
              tres años de experiencia en desarrollo web
            </span>
            , he pasado de los fundamentos básicos en HTML a dominar tecnologías
            modernas como{" "}
            <span className="text-lime-green font-semibold">
              React, Next.js, JavaScript y TypeScript
            </span>
            .{" "}
            <span className="text-purple font-semibold">
              Mi especialidad está en el frontend
            </span>
            , donde utilizo Tailwind CSS para construir interfaces escalables
            con precisión visual y rapidez.{" "}
            <span className="text-lime-green font-semibold">
              Me enfoco en mantener un código modular y semántico
            </span>
            , asegurando siempre una base técnica sólida que respalde la
            estética y la experiencia del usuario.
          </p>
          <p>
            Soy creativo y me apasiona diseñar soluciones con un enfoque moderno
            y minimalista, transmitiendo claridad y profesionalismo desde la
            primera impresión.{" "}
            <span className="text-purple font-semibold">
              Me inspiro en la comunidad de desarrolladores para perfeccionar
              mis prácticas y adoptar patrones avanzados
            </span>
            , manteniéndome en constante evolución. Actualmente busco crecer
            como frontend técnico y dar el siguiente paso hacia el trabajo
            remoto,{" "}
            <span className="text-lime-green font-semibold">
              colaborando en proyectos reales
            </span>{" "}
            que me permitan aportar valor visual y funcional mientras sigo
            construyendo herramientas que reflejen mi estilo y compromiso
            profesional.
          </p>
        </article>

        <ul className="grid grid-cols-3 gap-4 md:gap-8 stats-container mt-4">
          {STATS.map(({ label, value, suffix }) => (
            <div className="stats-item" key={label}>
              <article className="relative group p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-purple/10 hover:border-purple/20 transition-all duration-500 overflow-hidden">
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="text-4xl text-purple font-space-grotesk font-semibold">
                    {value}
                    {suffix}
                  </h3>
                  <h4 className="text-dark/70 font-dm-sans font-medium">
                    {label}
                  </h4>
                </div>
              </article>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
