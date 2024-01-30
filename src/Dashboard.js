import React from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

import { DropdownButton, Dropdown } from 'react-bootstrap';

const Dashboard = () => {
 
  return (
    < >
   
      <nav>
      <header className='header'>
      <h4>ABHISHEK BHATIA</h4>
      <DropdownButton id="split-button-dropdown" title="Profile">
      <Dropdown.Item eventKey="1"><Link to="/addinfo">Add Info.</Link></Dropdown.Item>
      <Dropdown.Item eventKey="2"><Link to="/employe">Emp Login</Link></Dropdown.Item>
      <Dropdown.Item eventKey="3"><Link to="/admin">Adm Login</Link></Dropdown.Item>
      <Dropdown.Item eventKey="5"><Link to="/logout">Logout</Link></Dropdown.Item>
      
      <Dropdown.Divider />
      </DropdownButton>
      </header>
      </nav>

    </>
  );
};

export default Dashboard;
