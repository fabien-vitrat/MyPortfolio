'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* Import des composants de la page d'accueil */
import Welcome from "@/components/welcome";
import About from "@/components/about";
import Values from "@/components/values";
import Goals from "@/components/goals";
import Course from "@/components/course";
import Portfolio from "@/components/portfolio";
import Navigation from "@/components/navigation";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Welcome />
        <About />
        <Values />
        <Goals />
        <Course />
        <Portfolio />
      </main>
    </>
  );
}