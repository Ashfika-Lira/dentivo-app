import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/99776312_s.jpg';
import './Error.css';
const Error = () => {
    return (
        <div>
            <img style={{ width: '100%'}} src={notfound} alt="" />
            <Link to="/"><button className="try-again">Please try again</button>
            </Link>
        </div>
    );
};

export default Error;


