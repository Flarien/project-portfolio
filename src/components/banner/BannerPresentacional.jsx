/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Row } from "react-bootstrap";

export const BannerPresentacional = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Flavia Briglia`}<span className="wrap">web developer</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium vel animi asperiores iusto dignissimos, ex perspiciatis, nihil possimus aliquid optio, iure nemo! Commodi culpa incidunt aliquam in non iste!</p>
            <button onClick={()=> console.log("conect")}>Let's Connect</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
