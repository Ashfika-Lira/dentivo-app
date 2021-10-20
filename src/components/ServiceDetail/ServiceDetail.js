import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
   const [detail, setDetail] = useState([]);
   const { id } = useParams();


   useEffect(() => {
      fetch('./detail.JSON')
      .then(res => res.json())
      .then(data => setDetail(data))

   }, []);

   const eachDetail = detail.find(td => td.id === id)


   return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className='d-flex justify-content-center'>
                <div className="card" style={{ width: "500px" }}>
                    <img src={eachDetail?.img} className=" img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{eachDetail?.name}</h5>
                        <p className="card-text text-danger"> <strong>- {eachDetail?.price} -</strong> </p>
                        <p className="card-text text-danger"> <strong>- {eachDetail?.description} -</strong> </p>
                        
                    </div>
                </div>
            </div>
      </div>
   );
};

export default ServiceDetail;
