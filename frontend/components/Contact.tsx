"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess("Message Sent Successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
        Contact Me
      </h2>

      <div className="glass rounded-2xl p-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
            required
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
            required
          />

          <button
            type="submit"
            className="bg-cyan-500 px-8 py-3 rounded-xl hover:bg-cyan-600 transition"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-400 font-semibold">
              {success}
            </p>
          )}
        </form>

        <div className="mt-10 space-y-4">
          <p className="flex items-center gap-3">
            <FaEnvelope />
            santhoshas643711@gmail.com
          </p>

          <p className="flex items-center gap-3">
            <FaPhone />
            +91 9150904010
          </p>

          <p className="flex items-center gap-3">
            <FaGithub />
            GitHub Profile
          </p>

          <p className="flex items-center gap-3">
            <FaLinkedin />
            LinkedIn Profile
          </p>
        </div>
      </div>
    </section>
  );
}