interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  style?: "purple" | "lime-green" | "dark";
  target?: "_blank" | "_self" | "_parent" | "_top";
  type?: "button" | "submit" | "reset";
  className?: string; // Add className prop for extra flexibility
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
  onClick,
  style = "purple",
  target = "_self",
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses = `inline-flex px-6 py-2.5 text-lg font-medium font-space-grotesk rounded-lg hover:-translate-y-1 transition-all cursor-pointer ${styles[style]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={baseClasses}>
      {children}
    </button>
  );
}
