import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../Components/ContactForm/ContactForm";
import { socialLinks } from "../utils/constants";
import FindMe from "../Images/find.png";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="contact-section">
          <Col
            data-aos="fade-right"
            xs={9}
            sm={8}
            md={6}
            lg={5}
            className="social-contancts"
          >
            <h1>
              FIND <strong className="purple">ME</strong> ON
            </h1>
            <p>Feel free to connect with me</p>
            <ul className="social-contancts-links">
              {socialLinks.map((item) => (
                <li key={item.id} className="social-icons">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons-link"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-block">
              <Image src={FindMe} width={300} height={200} alt="" />
            </div>
          </Col>
          <div className="or"></div>
          <Col data-aos="fade-left" md={6}>
            <h2 className="main-heading">
              Let's Say <strong className="purple">Hi</strong> !
            </h2>
            <p>
              <strong className="purple">DON'T BE SHY !</strong>
              <br />
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions
            </p>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
