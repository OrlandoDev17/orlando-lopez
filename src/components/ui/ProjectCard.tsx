import type { Project } from "@/lib/types";

export function ProjectCard({
  title,
  description,
  image,
  techs,
  links,
  order,
}: Project) {
  return (
    <article className="flex flex-col md:flex-row gap-8 p-6 bg-dark/10 rounded-xl items-center">
      <div className={`w-full md:w-1/2 ${order}`}>
        <img
          className="rounded-lg w-full h-full object-cover shadow-lg"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl 2xl:text-3xl text-purple font-semibold">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <a
                href={link.url}
                key={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="size-7 hover:text-lime-green hover:scale-110 transition" />
              </a>
            ))}
          </div>
        </header>
        <p className="text-base 2xl:text-lg text-dark/90">{description}</p>
        <ul className="flex items-center gap-2 flex-wrap">
          {techs.map((tech) => (
            <li
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-green/20 border-2 border-lime-green"
              key={tech.name}
            >
              <tech.icon className="size-6 text-dark/90" />
              <span className="font-medium text-base 2xl:text-lg">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
