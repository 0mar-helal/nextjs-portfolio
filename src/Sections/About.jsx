import { Container } from "react-bootstrap";
import Skills from "../Components/Skills/Skills";
import Info from "../Components/Info/Info";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <h1 on className="main-heading">
          Let Me <span className="purple"> Introduce </span> Myself
        </h1>
        <Info />
        <h1 className="main-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Skills />
      </Container>
    </section>
  );
};

export default About;
