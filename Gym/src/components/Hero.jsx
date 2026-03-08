import React from "react";
import p1 from "../Images/p1.jpg";

export default function hero() {
  return (
    <div className="relative text-white">
      <img
        src={p1}
        className="bg-cover h-screen w-full transform scale-y-122"
      />

      <div className="absolute top-30 left-40">
        <h1 className="text-orange-500 text-5xl font-bold tracking-wide w-150 scale-y-200">
          Transform Your Body. Transform Your Life.
        </h1>
      </div>
      <p className="text-white absolute top-20 right-20 w-115 font-semibold text-2xl text-center">
        Join the best fitness community and start your journey towards strength,
        confidence, and a healthier lifestyle.
      </p>

      <button className="absolute right-20 top-60 text-4xl rounded-4xl w-fit h-18 px-4 shadow bg-amber-700 flex justify-center items-center">Start Your Journey</button>
    
    </div>
  );
}
