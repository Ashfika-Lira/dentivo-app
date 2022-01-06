import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contacts from '../Contacts/Contacts';
import FAQ from '../FAQ/FAQ';
import Catagories from '../Catagories/Catagories';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
	return (
		<div id="home">
			<Banner></Banner>
            <About></About>
			<Catagories></Catagories>
			<Services></Services>
			<Subscribe></Subscribe>
			<Contacts></Contacts>
			<FAQ></FAQ>
		</div>
	);
};

export default Home;