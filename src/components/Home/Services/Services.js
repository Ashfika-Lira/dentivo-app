import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Services.css";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch('./service.JSON')
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container w-100 m-auto p-5">
      
      <h1 className="Popular-service text-center  text-white bg-secondary">Our most popular services</h1>
      <p className="text-center mt-3">
        We are here to serve you the best as always. we are very consistent about our services.
      </p>

      <div className="row">
        {service.map((data) => (
          <div key={data.key} className="col-md-6 col-lg-4 col-sm-12">
            <div className="card p-3 m-2 border border">
              <div className="service-img">
                <img className="img-fluid" src={data.img} alt="category" />
              </div>
              <h6 className="mt-4">{data.name}</h6>
              <p className="mt-2">{data.description.slice(0, 50)}</p>
              <div className="text-center d-block">
                    <Link to={`detail/${data.key}`}>
                        <button className="btn btn-danger w-100">Details</button>
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;