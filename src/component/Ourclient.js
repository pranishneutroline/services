import React from "react";
import "./ourclient.css";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import client1 from "./image/logo1.png";
import client2 from "./image/logo2.png";
import client3 from "./image/logo3.png";
import client4 from "./image/logo4.png";
import client5 from "./image/logo5.png";
import client6 from "./image/logo6.png";

export const Ourclient = () => {
  return (
    <Container className="clientcard">
      <h1>Our client</h1>

      <Row>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="imagebox">
                <Image
                  src={client1}
                  className="card-image-top"
                  alt="Tansen cement "
                  fluid
                />{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="imagebox">
                <Image
                  src={client2}
                  className="card-image-top"
                  alt="Tansen cement "
                  fluid
                />{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="imagebox">
                <Image
                  src={client3}
                  className="card-image-top"
                  alt="Tansen cement "
                  fluid
                />{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>
      {/* </Row>

      <Row> */}
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="imagebox">
                <Image
                  src={client4}
                  className="card-image-top"
                  alt="Tansen cement "
                  fluid
                />{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="imagebox">
                <Image
                  src={client5}
                  className="card-image-top"
                  alt="Tansen cement "
                  fluid
                />{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <div className="imagebox">
                <Image
                  src={client6}
                  className="card-image-top"
                  alt="Tansen cement "
                  fluid
                />{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
