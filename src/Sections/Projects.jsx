"use client";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SlideCard from "../Components/SlideCard/SlideCard";
import { useContext, useEffect } from "react";
import { fetchFromAPI } from "@/utils/constants";
import { DataContext } from "@/app/page";

const Projects = () => {
  const { projectsData, setProjectsData } = useContext(DataContext);
  const getProjectsData = async () => {
    try {
      const res = await fetchFromAPI("projects");
      setProjectsData(res.reverse());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProjectsData();
  }, []);
  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="main-heading">
          Let's See My <span className="purple">Projects</span>
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projectsData?.map((project) => (
            <SwiperSlide key={project.id}>
              <SlideCard
                imageLink={project.image}
                demoLink={project.demo_link}
                sourceCodeLink={project.code_link}
                techUsed={project.technologies}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Projects;
