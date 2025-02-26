"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className="w-screen h-screen relative">
      <section
        className="flex items-center justify-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.jpg)" }}
      >
        <div className="pl-20 pb-20 flex flex-col gap-5 z-10 max-w-md">
          <h1 className="text-4xl text-white font-italic ml-[-50px]">
            Get To Know Me!
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}I'm passionate about Web Development!
            </span>
          </h1>
          <p className="text-gray-100 hidden md:block font-italic text-lg ml-[-50px]">
            <strong>What I do:</strong>
            <br />
            I am a UI designer specializing in seamless and visually compelling designs for web and mobile applications.
          </p>
          <div className="text-white flex gap-5 hidden md:flex font-lora ml-[-60px]">
            <Link href="#skills" className="bg-blue-400 rounded-lg px-5 py-3">Learn more</Link>
            <Link href="#projects" className="bg-blue-400 rounded-lg px-5 py-3">My projects</Link>
            <Link href="#contact" className="bg-blue-400 rounded-lg px-5 py-3">Contact me</Link>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-800 text-white"  style={{ backgroundImage: "url(/main-bg.jpg)" }}>
        <h2 className="text-3xl text-center mb-5 font-lora">Skills & Technologies</h2>
        <p className="text-center font-lora text-lg">My top skills in Web Development and UI Design:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 text-center max-w-3xl mx-auto">
          {["ts", "redux", "react", "tailwind", "js", "next"].map((skill, i) => (
            <div key={skill} className="p-5 bg-gradient-to-r from-purple-900 via-pink-300 text-white shadow-lg relative">
              <Image src={`/${skill}.png`} alt={skill} width={50} height={50} className={`animate-moveAnimal animate-delay-${i}`} />
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-100"  style={{ backgroundImage: "url(/main-bg.jpg)" }}>
        <h2 className="text-3xl text-center mb-5 font-lora text-white">My Projects</h2>
        <div className="flex justify-center gap-10 font-lora">
          {[{
            title: "Project 1",
            desc: "A job application form collecting essential details.",
            link: "https://syedafatema.github.io/web-development-/"
          }, {
            title: "Project 2",
            desc: "Portfolio showcasing web development, AI, and software engineering projects.",
            link: "https://comfy-banoffee-b7071e.netlify.app"
          }].map(({ title, desc, link }) => (
            <div key={title} className="max-w-md bg-blue-300 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-lora">{title}</h3>
              <p>{desc}</p>
              <Link href={link} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-red-900">View Project</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-800 text-white" style={{ backgroundImage: "url(/main-bg.jpg)" }}>
        <h2 className="text-3xl text-center mb-5 font-lora">Contact Me</h2>
        <p className="text-center font-lora text-lg">Fill out the form below for inquiries.</p>
        <div className="flex justify-center mt-5">
          <Link href="mailto:farwa1@gmail.com" className="bg-blue-500 px-5 py-3 text-white rounded-lg">Send Email</Link>
        </div>
      </section>

      <div className="absolute bottom-0 right-0 z-5">
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-0 left-0 z-20" />
    </main>
  );
};

export default Home;
