import React, { useState, useEffect } from 'react';
// import './Loginsignup.css';

const Employeuser = ({ users }) => {
  const [userList, setUsers] = useState([]);

  useEffect(() => {
    // Check if users is an array before updating the state
    if (Array.isArray(users)) {
      setUsers(users);
    }
  }, [users]);
  

  return (
    <div className='user'>
      <h2>Employee Information</h2>
      <table  border="2" cellSpacing="5" width="100%">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Workplace</th>
            <th>More Details</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>{user.workplace}</td>
              <td>{user.moreDetails}</td>
              <td>{user.date || new Date().toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employeuser;
