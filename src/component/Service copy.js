import React from "react";
import "./service.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Typewriter from "typewriter-effect";
import { Container, Card, Row, Col, Image } from "react-bootstrap"; 
import ServiceProp from "./ServiceProp";
import ser from "./image/s7.jpg";

export const Service = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="apple" sm={5}>
            <Card className="mb-3">
              <div className="picture">
                {/* <Image     fluid /> </div> */}
                <Card.Img
                  variant="top"
                  src={ser}
                  className="card-image-top"
                  alt="service image"
                />
              </div>
              <div className="explanation">
                <h5> Road Construction</h5>
                <p>
                  Construction of roads involves the paving,rehabilitation,
                  and/or clamation of degradedpavements in order to achieve a
                  state of good repair and increase road traffic safety.
                </p>
              </div>
            </Card>
          </Col>

          <Col className="apple" sm={5}>
            <div className="picture">
              <Image
                src={ser}
                className="card-image-top"
                alt="service image"
                fluid
              />{" "}
            </div>
            <Card className="mb-3">
              <div className="explanation">
                <h5> Road Construction</h5>
                <p>
                  Construction of roads involves the paving,rehabilitation,
                  and/or clamation of degradedpavements in order to achieve a
                  state of good repair and increase road traffic safety.
                </p>
              </div>
            </Card>
          </Col>

          <Col className="apple" sm={5}>
            <div className="picture">
              <Image
                src={ser}
                className="card-image-top"
                alt="service image"
                fluid
              />{" "}
            </div>
            <Card className="mb-3">
              <div className="explanation">
                <h5> Road Construction</h5>
                <p>
                  Construction of roads involves the paving,rehabilitation,
                  and/or clamation of degradedpavements in order to achieve a
                  state of good repair and increase road traffic safety.
                </p>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="apple" sm={5}>
            <div className="picture">
              <Image
                src={ser}
                className="card-image-top"
                alt="service image"
                fluid
              />{" "}
            </div>
            <Card className="mb-3">
              <div className="explanation">
                <h5> Road Construction</h5>
                <p>
                  Construction of roads involves the paving,rehabilitation,
                  and/or clamation of degradedpavements in order to achieve a
                  state of good repair and increase road traffic safety.
                </p>
              </div>
            </Card>
          </Col>

          <Col className="apple" sm={5}>
            <div className="picture">
              <Image
                src={ser}
                className="card-image-top"
                alt="service image"
                fluid
              />{" "}
            </div>
            <Card className="mb-3">
              <div className="explanation">
                <h5> Road Construction</h5>
                <p>
                  Construction of roads involves the paving,rehabilitation,
                  and/or clamation of degradedpavements in order to achieve a
                  state of good repair and increase road traffic safety.
                </p>
              </div>
            </Card>
          </Col>

          <Col className="apple" sm={5}>
            <div className="picture">
              <Image
                src={ser}
                className="card-image-top"
                alt="service image"
                fluid
              />{" "}
            </div>
            <Card className="mb-3">
              <div className="explanation">
                <h5> Road Construction</h5>
                <p>
                  Construction of roads involves the paving,rehabilitation,
                  and/or clamation of degradedpavements in order to achieve a
                  state of good repair and increase road traffic safety.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
