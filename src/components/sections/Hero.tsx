import { useEffect } from "react";
import { fadeLeft, fadeRightStagger, fadeTopStagger } from "@/lib/animations";

import { BRANDS_LIST } from "@/lib/constants";
import { Button } from "@ui/Button";

export function Hero() {
  useEffect(() => {
    fadeRightStagger(".hero-content", ".hero-container", 0.5);
    fadeTopStagger(".buttons", "button-container", 1.2);
    fadeLeft(".avatar", 1.6);
  }, []);

  return (
    <>
      <section className="flex flex-col xl:flex-row items-center justify-between mt-4 2xl:mt-16 max-w-11/12 xl:max-w-9/12 mx-auto">
        <div className="flex flex-col gap-2 2xl:gap-4 hero-container">
          <h1 className="text-6xl 2xl:text-8xl text-dark font-extrabold hero-content">
            Hola! Soy <br />
            <span className="text-purple">Orlando López</span>
          </h1>
          <h2 className="text-3xl 2xl:text-5xl text-lime-green font-semibold hero-content">
            Desarrollador Frontend
          </h2>
          <h3 className="text-2xl 2xl:text-3xl text-dark font-medium hero-content">
            Ingeniero Informático en Formación
          </h3>
          <p className="text-lg 2xl:text-2xl text-balance max-w-2xl hero-content">
            Construyo experiencias web{" "}
            <span className="text-purple font-semibold">un pixel a la vez</span>{" "}
            para obtener siempre los mejores resultados posibles. Soy un
            apasionado del diseño y experiencias digitales excepcionales, que
            sean{" "}
            <span className="text-purple font-semibold">
              intuitivas, eficientes y agradables
            </span>{" "}
            para el usuario.
          </p>
          <div className="flex items-center gap-4 button-container">
            <button className="buttons">
              <Button href="#projects">Ver Proyectos</Button>
            </button>
            <button className="buttons">
              <Button
                target="_blank"
                href="/docs/Currículum Orlando López.pdf"
                style="lime-green"
              >
                Descargar CV
              </Button>
            </button>
          </div>
        </div>
        <div>
          <img src="/avatar.png" className="avatar" alt="Avatar" />
        </div>
      </section>
      <ul className="flex items-center justify-between gap-8 mt-16 h-30 max-w-11/12 xl:max-w-9/12 mx-auto w-full relative wrapper">
        {BRANDS_LIST.map(({ name, icon: Icon }, index) => (
          <li
            className="item"
            key={name}
            style={{
              animationDelay: `calc(30s / ${BRANDS_LIST.length} * (${BRANDS_LIST.length} - ${index}) * -1)`,
              left: "100%",
            }}
          >
            <Icon className="size-16 text-purple" />
          </li>
        ))}
      </ul>
    </>
  );
}
