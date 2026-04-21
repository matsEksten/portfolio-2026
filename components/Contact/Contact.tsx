"use client";

import { useActionState, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { sendContactEmail } from "@/app/actions/contact";
import { useLanguage } from "@/components/providers/LanguageProvider";

const initialState = {
  success: false,
  message: "",
  field: null,
};

export default function Contact() {
  const { language: lang } = useLanguage();
  const isSv = lang === "sv";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hideSuccessMessage, setHideSuccessMessage] = useState(false);
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  useEffect(() => {
    if (!state.success || !state.message) return;

    const timeout = setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setHideSuccessMessage(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [state.success, state.message]);

  const showSuccessMessage =
    state.success && !!state.message && !hideSuccessMessage;

  const showErrorMessage = !state.success && !!state.message;

  return (
    <section
      id="contact"
      className="mx-auto mt-20 max-w-5xl px-6 scroll-mt-32 md:mt-30"
    >
      <div className="mb-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-300" />
        <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-zinc-600">
          {isSv ? "Kontakt" : "Contact"}
        </h2>
        <div className="h-px flex-1 bg-zinc-300" />
      </div>

      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-base leading-relaxed text-zinc-700 md:text-lg">
          {isSv
            ? "Har du frågor, funderingar, ett uppdrag eller vill komma i kontakt? Skicka gärna ett meddelande så svarar jag så snart jag kan."
            : "Do you have questions, an opportunity, or would you like to get in touch? Feel free to send me a message and I’ll get back to you as soon as I can."}
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-zinc-950/90 px-6 py-8 text-white shadow-lg md:max-w-xl md:px-8 md:py-8">
        <form
          action={formAction}
          onSubmit={() => setHideSuccessMessage(false)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-100">
              {isSv ? "Namn" : "Name"}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isSv ? "Ditt namn" : "Your name"}
              className={`rounded-xl bg-zinc-100 px-4 py-3 text-zinc-950 placeholder:text-zinc-500 outline-none transition duration-200 focus:ring-2 ${
                state.field === "name"
                  ? "border-2 border-red-400 focus:ring-red-300"
                  : "border-2 border-transparent focus:ring-zinc-400/70"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-100"
            >
              {isSv ? "E-post" : "Email"}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isSv ? "namn@email.com" : "name@email.com"}
              className={`rounded-xl bg-zinc-100 px-4 py-3 text-zinc-950 placeholder:text-zinc-500 outline-none transition duration-200 focus:ring-2 ${
                state.field === "email"
                  ? "border-2 border-red-400 focus:ring-red-300"
                  : "border-2 border-transparent focus:ring-zinc-400/70"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-zinc-100"
            >
              {isSv ? "Meddelande" : "Message"}
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isSv ? "Ditt meddelande..." : "Your message..."}
              className={`min-h-40 rounded-xl bg-zinc-100 px-4 py-3 text-zinc-950 placeholder:text-zinc-500 outline-none transition duration-200 focus:ring-2 ${
                state.field === "message"
                  ? "border-2 border-red-400 focus:ring-red-300"
                  : "border-2 border-transparent focus:ring-zinc-400/70"
              }`}
            />
          </div>

          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          {showSuccessMessage ? (
            <div className="min-h-14 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 flex items-center justify-center">
              {state.message}
            </div>
          ) : showErrorMessage ? (
            <div className="min-h-14 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200 flex items-center justify-center">
              {state.message}
            </div>
          ) : (
            <div className="min-h-14" />
          )}

          <button
            type="submit"
            disabled={isPending}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 py-3 text-base font-semibold text-zinc-950 transition duration-300 hover:bg-white md:mx-auto md:w-fit disabled:cursor-not-allowed disabled:text-zinc-950/30 disabled:bg-zinc-100"
          >
            {isSv ? "Skicka" : "Send"}

            <FaArrowRight className="transition duration-200 group-hover:translate-x-1 group-disabled:translate-x-0" />
          </button>
        </form>
      </div>
    </section>
  );
}
