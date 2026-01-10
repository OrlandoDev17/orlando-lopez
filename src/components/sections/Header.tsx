import { useEffect, useState } from "react";

import { NAV_ITEMS } from "@lib/constants";
import { fadeRight, fadeBottomStagger } from "@lib/animations";
import { Button } from "@ui/Button";
import { ContactModal } from "@ui/ContactModal";

export function Header() {
  const [isActive, setIsActive] = useState("#");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fadeRight(".logo");
    fadeBottomStagger(".nav-item", ".nav", 0.5);
  }, []);

  const handleActive = (href: string) => {
    setIsActive(href);
  };

  return (
    <>
      <header className="flex justify-between items-center h-20 max-w-9/12 mx-auto">
        <picture>
          <img
            className="w-16 logo"
            src="/logo.svg"
            alt="Logo de Orlando López"
          />
        </picture>
        <nav>
          <ul className="flex items-center gap-4 nav">
            {NAV_ITEMS.map(({ label, href }) => (
              <li className="flex flex-col gap-px group nav-item" key={label}>
                <a
                  onClick={() => handleActive(href)}
                  href={href}
                  className={`text-lg font-space-grotesk px-1 group-hover:text-purple group-hover:font-medium transition-all duration-300 ${
                    isActive === href ? "text-purple font-medium" : ""
                  }`}
                >
                  {label}
                </a>
                <span
                  className={`w-0 h-1 bg-purple rounded group-hover:w-full transition-all duration-300 ${
                    isActive === href ? "w-full" : ""
                  }`}
                ></span>
              </li>
            ))}
            <li className="nav-item">
              <Button onClick={() => setIsModalOpen(true)} style="dark">
                ¡Hablemos!
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
