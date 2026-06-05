"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-6xl font-bold">
            Santhosh A S
          </h1>

          <div className="mt-4">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "MCA Student",
                2000,
                "Machine Learning Enthusiast",
                2000,
              ]}
              repeat={Infinity}
              className="text-3xl text-cyan-400 font-semibold"
            />

          </div>

          <p className="mt-6 text-gray-300 max-w-lg">
            Passionate about Frontend Development,
            Machine Learning and building modern web applications.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="/resume.pdf"
              download
 className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/30"
            >
              Download Resume
            </a>

          </div>

          <div className="flex gap-6 mt-8 text-3xl">

            <a href="https://github.com/santhoshas643711-ux">
              <FaGithub />
            </a>

            <a href="www.linkedin.com/in/santhosh-as-216279288">
              <FaLinkedin />
            </a>

            <a href="mailto:santhoshas643711@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center"
        >

          <Image
            src="/profile.jpg"
            alt="profile"
            width={350}
            height={350}
className="rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
          />

        </motion.div>

      </div>

    </section>
  );
}