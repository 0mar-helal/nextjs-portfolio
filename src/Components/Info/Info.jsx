import { Container, Row, Col, Image } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import "./info.css";
import { useContext, useEffect } from "react";
import { fetchFromAPI } from "@/utils/constants";
import { DataContext } from "@/app/page";
export const revalidate = 10;
const Info = () => {
  const { AboutData, setAboutData } = useContext(DataContext);
  const getAboutData = async () => {
    try {
      const res = await fetchFromAPI("about");
      setAboutData(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <Container fluid className="about-section">
      <Row className="about-content">
        <Col data-aos="fade-right" md={8} className="about-description">
          <p
            className="about-body"
            dangerouslySetInnerHTML={{ __html: AboutData?.text }}
          ></p>
        </Col>
        <Col data-aos="fade-left" md={4} className="myAvtar">
          <Tilt>
            <Image src={AboutData?.image} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
