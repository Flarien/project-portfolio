/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/headerImg.svg";
import "./Banner.css"

export const BannerPresentacional = ({ text }) => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Flavia Briglia: `} <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              praesentium vel animi asperiores iusto dignissimos, ex
              perspiciatis, nihil possimus aliquid optio, iure nemo! Commodi
              culpa incidunt aliquam in non iste!
            </p>
            <button onClick={() => console.log("conect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
