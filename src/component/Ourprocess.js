import React from 'react'
import './process.css';
import { Container , Card,Row,Col,Image } from 'react-bootstrap';//
import 'bootstrap/dist/css/bootstrap.min.css';
import pro1 from "./image/p1.jpg";
import pro2 from "./image/p3.jpg";
import pro3 from "./image/p3.jpg";
import pro4 from "./image/p4.jpg";

export const Ourprocess = () => {
  return (
    
    <div>
      <Container className='heading'>
        
        <h1>Our Process</h1>

      </Container>
      <Container className='process'>
        <Row>
        <Col sm={3} >
  <Image src={pro1}
      className='card-image-top'
       alt='service image' fluid 
       />
    <Card className="mb-3">
    <Card.Title><h3> Meeting</h3></Card.Title>
    <Card.Body>
<Card.Text>
  <p>We meet withour clients to discuss their ideas and find a solution.</p>
</Card.Text>
</Card.Body>
    </Card>
  </Col>

  <Col sm={3}>
  <Image src={pro2}
      className='card-image-top'
       alt='service image' fluid 
       />
    <Card className="mb-3">
    <Card.Title><h3>Design</h3></Card.Title>
    <Card.Body>

<Card.Text>
  <p>Designing the task according to the demand and need of the client.</p>
</Card.Text>
</Card.Body>
    </Card>
  </Col>
  <Col sm={3}>
  <Image src={pro3}
      className='card-image-top'
       alt='service image' fluid 
       />
    <Card className="mb-3">
    <Card.Title><h3> Develop</h3></Card.Title>
    <Card.Body>

<Card.Text>
  <p>Developing the product according to the demand of the client.</p>
</Card.Text>
</Card.Body>
    </Card>
  </Col>
  <Col sm={3}>
  <Image src={pro4}
      className='card-image-top'
       alt='service image' fluid 
       />
    <Card className="mb-3">
    <Card.Title><h3>Deliver</h3></Card.Title>
    <Card.Body>

<Card.Text>
  <p>Delivering the best and quality product</p>
</Card.Text>
</Card.Body>
    </Card>
  </Col>
        </Row>
      </Container>


    </div>
  )
}
