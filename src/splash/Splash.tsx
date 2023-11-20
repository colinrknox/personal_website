import React from "react";
import "./Splash.css";

function Splash() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="font-semibold text-4xl text-gray-800">
            Welcome to My Website
          </h1>
          <p className="text-gray-600 mt-4">
            A brief introduction about yourself or your work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Splash;
