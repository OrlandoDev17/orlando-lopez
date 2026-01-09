interface ButtonProps {
  children: React.ReactNode;
  href: string;
  style?: "purple" | "lime-green" | "dark";
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const styles = {
  purple: "border-2 border-purple bg-purple text-white hover:bg-purple/90",
  "lime-green":
    "border-2 border-lime-green text-lime-green hover:bg-lime-green hover:text-white",
  dark: "border-2 border-dark bg-dark text-white hover:bg-dark/90",
};

export function Button({
  children,
  href,
  style = "purple",
  target = "_self",
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      className={`inline-flex px-6 py-2.5 text-lg font-medium font-space-grotesk rounded-lg ${styles[style]} hover:-translate-y-1 transition-all cursor-pointer`}
    >
      {children}
    </a>
  );
}
