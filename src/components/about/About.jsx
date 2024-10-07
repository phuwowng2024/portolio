import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello, I'm Hoang Nguyen An Phuong, a 12th-grade student at Newton
              High School and the Vice President of the Newton School Debate
              Society. I'm passionate about leadership, teamwork, and
              contributing to meaningful projects. I enjoy taking on roles that
              challenge me to grow, such as organizing events, leading community
              initiatives, and supporting others in their personal development.
              My experiences have taught me the value of collaboration and
              dedication, which I strive to bring into every endeavor I take
              part in. Academically, I've achieved several notable
              accomplishments, including:
            </p>
            <ul className="about__list">
              <li>SAT: 1530 (one take)</li>
              <li>IELTS: 8.0 (overall)</li>
              <li>MOS Certification</li>
              <li>
                Finalist at the Youth Financial Analysis Competition (YFAC)
              </li>
              <li>Finalist at the Young Innovators Challenge (YIC)</li>
              <li>
                Top 50 at the Vietnam Business Innovation Challenge (VBIC)
              </li>
              <li>40+ Medals in various academic Olympiads</li>
              <li>Academic research published in a Scopus-ranked journal</li>
            </ul>
            {/* <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button> */}
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
