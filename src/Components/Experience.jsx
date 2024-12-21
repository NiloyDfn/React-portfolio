import data from "../assets/data2.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Experience() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#experience h2 ", {
      x: -400,
      opacity : 0,
      duration: 1.5,
      stagger : .5,
      scrollTrigger: {
        trigger: "#experience",
        scroller: "body",
        start: "top 40%",
        end: "top 80%",
        scrub: 2,
      },
    });
    tl.from(".exdiv",{
      y : 400,
      opacity : 0,
      duration : 12,
      stagger : .5,
      scrollTrigger: {
        trigger : "#experience",
        scroller : "body",
        start : "top 40%",
        end : "top 80%",
        scrub : 2
      }
    })
    
  });

  return (
    <div id="experience">
      <div className="box">
        <h2>
          Things I'm <span>good</span> at
        </h2>
        <h2 className="expart">
          My expertise, skills, interests, <span>passion</span>, and hobbies
        </h2>

        <div className="development mb-6">
          <p className="buttonHover text-xl font-semibold mb-4">Development</p>
          <div data-scroll data-scroll-section data-scroll-speed=".09"  className=" flex items-center justify-center flex-wrap ">
            {data.development_images.map((item, i) => (
              <ImgCard
          
                key={i}
                id={item.id}
                name={item.name}
                imgSrc={item.imgSrc}
              />
            ))}
          </div>
        </div>

        <div className="designing">
          <p className="buttonHover text-xl font-semibold mb-4 ">Designing</p>
          <div data-scroll data-scroll-section data-scroll-speed="-.09" className="flex items-center justify-center flex-wrap">
            {data.designing_images.map((item, i) => (
              <ImgCard
                key={i}
                id={item.id}
                name={item.name}
                imgSrc={item.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ImgCard = ({ imgSrc, name }) => {
  return (
    <div data-scroll data-scroll-section className="exdiv p-2 m-1.5">
      <img
        className="eximg h-[20vw] w-[20vw] sm:h-[15vw] sm:w-[15vw] md:h-[12vw] md:w-[12vw] lg:h-[10vw] lg:w-[10vw]  p-2 rounded-md object-cover "
        src={imgSrc}
        alt=""
      />
      <h3 className="exh3 text-sm m-2 capitalize font-bold tracking-tight text-center">
        {name}
      </h3>
    </div>
  );
};

export default Experience;


