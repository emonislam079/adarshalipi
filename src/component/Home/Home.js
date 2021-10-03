import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import images1 from '../../images/first.jpg'
import images2 from '../../images/second.jpg'

const Home = () => {
    return (
        <div>
            <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-75 mx-auto"
      src={images1}
      alt="First slide"
    />
    <Carousel.Caption>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 mx-auto"
      src={images2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div>
    <h1 className="my-5 text-primary">Our Services</h1>
    <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</div>
        </div>
    );
};

export default Home;