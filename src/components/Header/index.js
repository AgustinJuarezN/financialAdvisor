import React from "react";
import "./Header.scss";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container fluid className="header">
      <Row className="content">
        <div className="img">
          <NavLink to="/">
            <img src="/home.ico" alt="img" />
          </NavLink>
        </div>
        <div>
          <h1>Financial Advisor</h1>
        </div>
      </Row>
    </Container>
  );
};

export default Header;