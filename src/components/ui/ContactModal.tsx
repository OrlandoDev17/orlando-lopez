import { useEffect, useRef } from "react";
import { Button } from "./Button";
import { CONTACT_FORM_ENDPOINT } from "@/lib/constants";
import type { ContactModalProps } from "@/lib/types";
import { animateModalIn } from "@/lib/animations";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      animateModalIn(containerRef.current, modalRef.current);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const btn = formRef.current?.querySelector(
      "button[type='submit']"
    ) as HTMLButtonElement;
    const originalText = "Enviar Mensaje";

    if (btn) {
      btn.textContent = "Enviando...";
      btn.disabled = true;
    }

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        if (btn) btn.textContent = "¡Enviado!";
        setTimeout(() => {
          onClose();
          if (btn) {
            btn.textContent = originalText;
            btn.disabled = false;
          }
          (e.target as HTMLFormElement).reset();
        }, 1500);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error(error);
      if (btn) {
        btn.textContent = "Error, intenta de nuevo";
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 3000);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/60 backdrop-blur-sm"
      ref={containerRef}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <dialog
        ref={modalRef}
        open={isOpen}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-lg mx-4 rounded-2xl shadow-2xl p-0 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4">
          <button
            onClick={onClose}
            className="text-dark/50 hover:text-purple transition-colors p-2"
            aria-label="Cerrar modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-10">
          <header className="mb-8 text-center">
            <h2
              id="modal-title"
              className="text-3xl font-space-grotesk font-bold text-transparent bg-clip-text bg-linear-to-r from-purple to-lime-green mb-2"
            >
              ¡Hablemos!
            </h2>
            <p className="text-dark/70 font-dm-sans">
              Cuéntame sobre tu proyecto y hagamos algo increíble juntos.
            </p>
          </header>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Honeypot field for spam prevention */}
            <input
              type="text"
              name="_honey"
              className="hidden"
              aria-hidden="true"
            />
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-bold text-dark font-space-grotesk uppercase tracking-wider"
              >
                Tu Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all font-dm-sans text-dark"
                placeholder="Ej. Orlando López"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-bold text-dark font-space-grotesk uppercase tracking-wider"
              >
                Tu Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all font-dm-sans text-dark"
                placeholder="hola@ejemplo.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-bold text-dark font-space-grotesk uppercase tracking-wider"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all font-dm-sans text-dark resize-none"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                style="purple"
                className="w-full justify-center"
              >
                Enviar Mensaje
              </Button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
