import React, { useEffect, useState } from 'react';
import Teacher from './Dentist';

const Dentists = () => {
	const [dentists, setDentists] = useState([]);
   
     useEffect(() => {
      fetch('./dentists.JSON')
         .then(res => res.json())
         .then(data => setDentists(data));
   }, [])
   return (
      <div>
         <h1 className="heading py-2 text-light bg-black ps-4 text-center">Highly Qualified Dentists</h1>
		 <h5 className="text-center">We have the best dentist team who are mostly is at your service on your need</h5>
         <div className="row row-cols-lg-2 row-cols-1 g-2 mb-3 ms-3 me-3">
            {
               dentists.map(dentist => <Teacher dentist={dentist}></Teacher>)
            }
         </div>
		</div>
	);
};

export default Dentists;