import type { Skill } from "@/lib/types";

export function SkillCard({
  title,
  description,
  icon: Icon,
  techs,
  bgColor,
  textColor,
  hoverShadow,
}: Skill) {
  return (
    <article
      className={`flex flex-col gap-4 p-6 relative overflow-hidden rounded-xl h-[550px] ${bgColor} ${hoverShadow} shadow-xl group transition-all duration-300 z-20 hover:scale-105`}
    >
      <Icon className="-z-10 absolute left-1/2 -translate-x-1/2 -bottom-32 group-hover:-bottom-8 group-hover:-rotate-12 transition-all duration-300 size-80" />
      <div className="flex flex-col gap-4">
        <h3 className={`text-3xl font-bold ${textColor}`}>{title}</h3>
        <p className="text-lg text-white">{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className={`text-xl ${textColor}`}>
          {title === "Conocimientos Clave"
            ? "Conocimientos"
            : "Tecnologías que uso"}
        </h4>
        <ul className="grid grid-cols-3 gap-2 place-items-center">
          {techs.map((tech) => (
            <li className="flex flex-col items-center" key={tech.name}>
              <tech.icon className="size-10 text-white" />
              <span className="text-white font-semibold font-space-grotesk">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
