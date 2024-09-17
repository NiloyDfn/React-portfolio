import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import pname from "../assets/data.json";
import bc from "../assets/bc.jpeg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#work section article", {
      y: -220,
      duration: 2,
      stagger: .5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#work",
        scroller: "body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="work" className="work">
      <img className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]" src={bc} alt="bg-img" />

      <div>
        {pname.projector.map((item) => (
          <h2 key={item.name}>{item.name}</h2>
        ))}
      </div>

      <section>
        <article>
          <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((project) => (
              <WorkCard
                key={project.title}
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </Carousel>
        </article>
        {pname.projector2.map((item) => (
          <h2 key={item.name}>{item.name}</h2>
        ))}
        <article>
          <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={4000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects2.map((project) => (
              <WorkCard
                key={project.title}
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </Carousel>
        </article>
        {pname.projector3.map((item) => (
          <h2 key={item.name}>{item.name}</h2>
        ))}
        <article>
          <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={4000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects3.map((project) => (
              <WorkCard
                key={project.title}
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

const WorkCard = ({ imgSrc, title, description, url }) => (
  <div className="workItem">
    <a href={url} target="_blank">
    <img src={imgSrc} alt={title} />
    </a>
    <aside>
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View this Project
      </a>
    </aside>
  </div>
);

export default Work;
