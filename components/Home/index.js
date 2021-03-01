import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <main id="home-page-content">
      <div id="home-hero">
        <div id="home-title">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="#short-section">Get Started</a>
        </div>
        <div id="hero-img">
          <Image
            src="/images/illustration-working.svg"
            alt="Hero image"
            width={733}
            height={482}
          />
        </div>
      </div>
      <div id="short-section">
        <div id="short-form">
          <input placeholder="Shorten a link here..." type="text" />
          <button>Shorten It!</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
