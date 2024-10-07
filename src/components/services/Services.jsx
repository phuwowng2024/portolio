import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Header of Organizing Committee ",
    description: "High School Business Case Competition (IEG Vietnam)",
  },
  {
    id: 2,
    image: Image2,
    title: "Head of Finance",
    description:
      "Eco Young Leaders Camp project (Youth Innovation Challenge award by Green Youth Labs - implemented by FES Vietnam)",
  },
  {
    id: 3,
    image: Image3,
    title: "Guest Speaker",
    description:
      "Talk show Never Too Old, Never Too Young to Invest for senior leaders at Ford Vietnam Headquarters",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">LEADERS</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" width="80" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
