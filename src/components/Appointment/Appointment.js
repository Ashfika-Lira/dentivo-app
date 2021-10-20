import React from 'react';

const Appointment = () => {
	return (
		<div className="col-md-12 col-lg-12 col-sm-12">
		  <div className="">
			<h1 className="text-white bg-dark text-center">Take an appointment</h1>
			<div className="mx-5 px-5">
				<input
			  className="input-field mt-3 mb-3"
			  type="text"
			  placeholder="User Name"
			/>
			<br />
			<input
			  className="input-field mb-3"
			  type="email"
			  placeholder="Give Email"
			/>
			<br />
			<input
			  className="input-field mb-3"
			  type="text"
			  placeholder="Phone Number"
			/>
			<br />
		
			<input
			  className="input-field mb-3"
			  type="date"
			  placeholder=""
			/>
			<br />
			<input className="input-button bg-info" type="text" type="submit" />
			<br />
			</div>
		  </div>
		</div>
	);
};

export default Appointment;