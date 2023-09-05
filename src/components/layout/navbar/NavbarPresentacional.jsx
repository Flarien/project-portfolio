/* eslint-disable react/prop-types */
import "./NavbarPresentacional.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/img/logo.svg";
import navIcon1 from "../../../assets/img/navIcon1.svg";
import navIcon2 from "../../../assets/img/navIcon2.svg";
import navIcon3 from "../../../assets/img/navIcon3.svg";



export const NavbarPresentacional = ({
  scrolled,
  activeLink,
  onUpdateActiveLink,
}) => {
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="logo linkedin" />
              </a>
              <a href="#">
                {" "}
                <img src={navIcon2} alt="logo facebook" />{" "}
              </a>
              <a href="#">
                <img src={navIcon3} alt="logo instagram" />
              </a>
              {/*  Aquí deberá ir la direccion de las redes sociales y el icon del logo  */}
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
