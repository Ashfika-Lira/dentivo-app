import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../../images/banner.jpg'

const Banner = () => {
	return (
		<div className="mb-5">
           <Card className="text-white">
  <Card.Img src= {banner} alt="Card image" />
  <Card.ImgOverlay>
    <h1>Welcome to Dentivo</h1>
    <h4>
     There's no clinic like Dentivo! We provide the best quality services from our world class dentists.
    </h4>
    <p>Last updated 3 mins ago</p>
  </Card.ImgOverlay>
</Card>
		</div>
	);
};

export default Banner;