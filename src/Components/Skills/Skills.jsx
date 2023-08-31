import { Col, Row } from "react-bootstrap";
import "./skills.css";
import { useContext, useEffect } from "react";
import { fetchFromAPI } from "@/utils/constants";
import { DataContext } from "@/app/page";

const Skills = () => {
  const { skillsData, setSkillsData } = useContext(DataContext);
  const getSkillsData = async () => {
    try {
      const res = await fetchFromAPI("skills");
      setSkillsData(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSkillsData();
  }, []);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skillsData?.map((skill) => (
        <Col
          key={skill.id}
          data-aos="fade-up"
          xs={5}
          sm={4}
          md={3}
          lg={2}
          className="skill-icon"
        >
          <img src={skill?.photo} alt="" width="80%" />
        </Col>
      ))}
    </Row>
  );
};

export default Skills;
