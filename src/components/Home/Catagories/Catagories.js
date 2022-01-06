import React from "react";
import "./Catagories.css";
import { Container, Row } from "react-bootstrap";

const Catagories = () => {
  return (
    <div>
      <Container>
	  <h1 className="text-white bg-secondary text-center">Product Catagories</h1>
        <Row>
          <div className="col-lg-3 feature1">
            <button>Oral hygiene</button>
          </div>
          <div className="col-lg-6 feature2">
            <button>Sealants</button>
          </div>
          <div className="col-lg-3 feature3">
            <button>Extractions</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Catagories;