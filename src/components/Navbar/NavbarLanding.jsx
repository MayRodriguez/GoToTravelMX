import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../styles/landingPage/navbar/navbarLanding.css";
import logo from "../../assets/Logo.svg";

function NavbarLanding() {
  return (
    <>
      <Navbar className="navbar-bg-custom" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navbar-text-custom" href="#aboutus">Nosotros</Nav.Link>
            <Nav.Link className="navbar-text-custom" href="#disney">Disney World</Nav.Link>
            <Nav.Link className="navbar-text-custom" href="#universal">Universal Studios</Nav.Link>
            <Nav.Link className="navbar-text-custom" href="#beaches">Playas</Nav.Link>
          </Nav>
          <div className="d-flex justify-content-end">
            <button className="button-container navbar-text-custom py-2 px-4 rounded-3">Contáctanos</button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLanding;