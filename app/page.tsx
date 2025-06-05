import CoverParticles from "@/components/cover-particles";
import "../app/globals.css"; // <- debe estar exactamente así
import type { AppProps } from "next/app";

import Image from "next/image";
import TransitionPage from "@/components/transition-page";



export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100dv] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <p>Introducción</p>
      </div>
    </main>
  );
}
