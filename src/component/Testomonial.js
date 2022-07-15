import React, { Component } from 'react'
import './Testomonial.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container , Card,Row,Col,Image } from 'react-bootstrap';
import c1 from "./image/c1.jpg";

export class Testomonial extends Component {
  render() {
    return (
      <div>
         <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       

      </div>
    )
  }
}

export default Testomonial