"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    setForm(initialState);
    setTimeout(() => setStatus("idle"), 2600);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-lg shadow-zinc-900/8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/75 dark:shadow-black/30 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-rose-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? <p id="name-error" className="mt-2 text-sm text-rose-500">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-rose-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          placeholder="you@company.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? <p id="email-error" className="mt-2 text-sm text-rose-500">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-rose-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          placeholder="Tell us about your project goals"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-rose-500">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-md bg-rose-600 px-6 font-semibold text-white transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Message sent successfully. We will get back to you soon.</p>
      ) : null}
    </form>
  );
}
