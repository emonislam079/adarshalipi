import React from 'react';
import {Carousel} from 'react-bootstrap';
import images1 from '../../images/first.jpg'
import images2 from '../../images/second.jpg'
import SliceDatas from '../SliceDatas/SliceDatas';




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
{/* Our Services */}
<div>
    <h1 className="my-5 text-primary">Our Services</h1>
    <SliceDatas></SliceDatas>
        
</div>
        </div>
    );
};

export default Home;