import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import "./Loginsignup.css";
// import "bootstrap/dist/css/bootstrap.css";
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
// import Logout from './Logout';
// import Admin from './Admin';
// import Adminuser from './Adminuser';
// import Addinfo from './Addinfo';
// import Employe from './Employe';
// import Employeuser from './Employeuser';




const App = () => {
 
  return (

    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/logout' element={<Logout />} /> */}
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='/admin' element={<Admin />} />
          <Route path='/adminuser' element={<Adminuser users={adminUserData} />} />
          <Route path='/employe' element={<Employe />} />
          <Route path='/addinfo' element={<Addinfo onSubmit={handleDashboardSubmit} />} />
          <Route path='/employeuser' element={<Employeuser users={adminUserData} />} /> */}

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
