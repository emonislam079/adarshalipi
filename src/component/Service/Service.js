import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {name, details, cost, img}=props.service
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={img} width="150px" height="200px" />
        <Card.Body>
          <h1>Course:{name}</h1>
          <Card.Text>
            {details}
            <h3>Cost:{cost}</h3>
            <button className="btn btn-primary">Join Now</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;