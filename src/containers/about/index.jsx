import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import {
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiReact,
} from "react-icons/si";

const personalDetail = [
  {
    label: "Name",
    value: "Abdul Shahadudheen M M",
  },
  {
    label: "Age",
    value: 29,
  },
  {
    label: "Address",
    value: "Kerala, India",
  },
  {
    label: "Email",
    value: "Sahad2u@gmail.com",
  },
  {
    label: "Contact No",
    value: +917012789631,
  },
  {
    label: "WhatsApp",
    value: +919497550584,
  },
];

const jobSummary = `As a self-taught MERN stack developer, expertise has been gained in a variety of technologies including JavaScript, Node.js, Express.js, React.js and MongoDB. Through completing projects and reviews ,a strong ability to prioritize tasks and manage time effectively has been developed, ensuring the timely completion of projects and adherence to the highest standards.`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>MERN Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              {" "}
              Personal Information
            </h3>
            <ul>
              {personalDetail.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <SiJavascript size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiNodedotjs size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiExpress size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiMongodb size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiReact size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
