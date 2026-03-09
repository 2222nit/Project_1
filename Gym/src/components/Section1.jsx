import React, { useRef } from "react";
import v1 from "../video/v1.mp4";
import p2 from '../Images/p2.webp'

export default function Section1() {
  return (
    <div className="w-full text-white bg-black">
      <img src={p2} />
      <h1 className="text-5xl text-center pt-10 pb-5 underline">Fitness Center</h1>
      <p className="text-left w-200 scale-y-100 px-30 text-2xl py-10 tracking-wide">
        We believe fitness is more than just lifting weights — it's about
        building discipline, confidence, and a stronger version of yourself. Our
        gym is designed to support beginners and professional athletes alike
        with the best facilities and expert guidance.
      </p>

      <div className="relative w-full">
        <h1 className="mt-10 text-4xl text-center">
          1. Improve Your Physical Health
        </h1>
        <p className="text-right w-150 scale-y-100 text-2xl py-10 tracking-wide">
          Regular exercise helps strengthen your muscles, improve heart health,
          and increase stamina. Whether your goal is weight loss, muscle gain,
          or overall fitness, the right training routine can transform your
          body.
        </p>
      </div>
    </div>
  );
}
