import React from 'react';
import about from '../../../images/about.jpg'

const About = () => {
	return (
		<div>
			<h2 className="heading py-2 text-dark ps-4 text-center bg-secondary text-white">About Us</h2>
         <div className='row row-cols-lg-2 row-cols-1 m-5'>
		 <div className="col-lg-5 col-md-7 col-sm-12">
               <img className="img-fluid" src={about} alt="" />
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
               <p className="fs-5">Many Americans today enjoy excellent oral health and are keeping their natural teeth throughout their lives. But this is not the case for everyone. Cavities are still the most prevalent chronic disease of childhood.Too many people mistakenly believe that they need to see a dentist only if they are in pain or think something is wrong, but they're missing the bigger picture. A dental visit means being examined by a doctor of oral health capable of diagnosing and treating conditions that can range from routine to extremely complex.</p>
               <h3>Our Role</h3>
               <ul>
                  <li>Diagnosing oral diseases.</li>
                  <li>Promoting oral health and disease prevention</li>
                  <li>Interpreting x-rays and diagnostic tests</li>
                  <li>Ensuring the safe administration of anesthetics</li>
                  <li>Monitoring growth and development of the teeth and jaws</li>
               </ul>
            </div>
         </div>
		</div>
	);
};

export default About;