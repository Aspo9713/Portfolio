"use client";

import React, { useState } from "react";
import { NavbarDemo } from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavbarDemo />

      <motion.section
        className="flex flex-col items-center justify-center py-24 px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900/80 mb-10 mt-10">Kontaktujte mě</h1>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
          <div>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jméno"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md bg-transparent border border-gray-900/50 text-white placeholder-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md bg-transparent border border-gray-900/50 text-white placeholder-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Zpráva"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md bg-transparent border border-gray-900/50 text-white placeholder-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            className="w-full md:w-auto px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition"
            whileHover={{ scale: status === "idle" ? 1.03 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {status === "idle" && "Odeslat zprávu"}
            {status === "sending" && "Odesílám..."}
            {status === "success" && "Děkuji!"}
            {status === "error" && "Chyba, zkuste znovu"}
          </motion.button>
        </form>
      </motion.section>

      <Footer />
    </div>
  );
}
