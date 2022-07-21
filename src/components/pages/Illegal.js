import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../Button2.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function Ide() {
  return (
    <div>
        <h1>Page Not Found, Please          <Link to={`pages/Home.js`}>
        Go Back to Home.</Link></h1>

    </div>

  );
}

export default Ide;
