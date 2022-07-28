import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./projects/ProjectCard";
import SwiperCore, { Scrollbar } from "swiper";
import "swiper/css/navigation";
// import styles from "slides.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
SwiperCore.use([Scrollbar]);

import { projectsArray } from "../utils/projectdata";
const Slides = () => {
  return (
    <div className="container md:mt-20 hidden md:visible md:flex m-auto swiper-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        modules={Scrollbar}
        scrollbar={{ draggable: true }}
      >
        <div className="swiper-navigation"></div>
        <div className="swiper-slides">
          {projectsArray.map(({ title, description, image, link }, i) => (
            <SwiperSlide key={i}>
              <ProjectCard
                title={title}
                description={description}
                link={link}
                image={image}
              />
            </SwiperSlide>
          ))}
        </div>

        <div className="mt-2">
          <div className="inline-block cursor-pointer swiper-scrollbar" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slides;
