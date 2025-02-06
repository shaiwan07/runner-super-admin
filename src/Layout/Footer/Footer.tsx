import React from "react";
import { Col, Container, Row } from "reactstrap";
import SVG from "@/CommonComponent/SVG";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md={6} className="p-0 footer-copyright">
            <p className="mb-0">Copyright 2025 © Runner.</p>
          </Col>
          <Col md={6} className="p-0">
            <p className="heart mb-0">Shaiwan &amp; made with
              <SVG className="footer-icon" iconId="heart" />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;