import React from "react";
import "./styles.scss";
import { Animate } from "react-simple-animate";

function Home() {
  const email = "sahad2u@gmail.com"; 
  const subject = "Hiring Inquiry"; 

  const handleNavigateToContactMePage = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Abdul Shahadudheen
          <br />
          MERN Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Contact Me</button>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
