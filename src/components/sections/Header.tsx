import { useEffect, useState } from "react";

import { NAV_ITEMS } from "@lib/constants";
import { fadeRight, fadeBottomStagger } from "@lib/animations";
import { Button } from "@ui/Button";
import { ContactModal } from "@ui/ContactModal";

export function Header() {
  const [isActive, setIsActive] = useState("#");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fadeRight(".logo");
    fadeBottomStagger(".nav-item", ".nav", 0.5);
  }, []);

  const handleActive = (href: string) => {
    setIsActive(href);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex justify-between items-center h-20 max-w-11/12 xl:max-w-9/12 mx-auto relative z-50">
        <picture>
          <img
            className="w-16 logo relative z-50"
            src="/logo.svg"
            alt="Logo de Orlando López"
          />
        </picture>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 nav">
            {NAV_ITEMS.map(({ label, href }) => (
              <li className="flex flex-col gap-px group nav-item" key={label}>
                <a
                  onClick={() => handleActive(href)}
                  href={href}
                  className={`text-base 2xl:text-lg font-space-grotesk px-1 group-hover:text-purple group-hover:font-medium transition-all duration-300 ${
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

        <button
          className="md:hidden relative z-50 p-2 text-purple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav>
            <ul className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    onClick={() => handleActive(href)}
                    href={href}
                    className={`text-2xl font-space-grotesk font-medium transition-colors duration-300 hover:text-purple ${
                      isActive === href ? "text-purple" : "text-white"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <Button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  style="dark"
                >
                  ¡Hablemos!
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
