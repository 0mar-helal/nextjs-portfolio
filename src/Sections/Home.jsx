"use client";
import { Col, Container, Row } from "react-bootstrap";
import TypeWriter from "../Components/TypeWriter/TypeWriter";
import { useContext, useEffect } from "react";
import { BASE_API_LINK, fetchFromAPI } from "@/utils/constants";
import Image from "next/image";
import { DataContext } from "@/app/page";

const HomeSection = () => {
  const { infoData, setInfoData } = useContext(DataContext);
  const getInfoData = async () => {
    try {
      const res = await fetchFromAPI("info");
      setInfoData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfoData();
  }, []);
  return (
    <div id="home" fluid className="home-section">
      <Container className="home-container">
        <Row className="home-content">
          <Col md={8} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Omar Helal</strong>
            </h1>

            <div
              style={{
                paddingTop: 50,
                paddingBottom: 50,
                marginBottom: "30px",
                textAlign: "left",
              }}
            >
              <TypeWriter roles={infoData?.role} />
            </div>

            <a href={BASE_API_LINK + "/cv/download"} className="download-cv">
              Download My CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="download-icon"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
            </a>
          </Col>

          <Col
            data-aos="fade-left"
            className="image-col"
            md={4}
            style={{ paddingBottom: 20 }}
          >
            <div className="image-holder">
              <Image
                src={infoData?.photo}
                width={400}
                height={400}
                className="hi-image"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSection;
