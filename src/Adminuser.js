import React, { useState, useEffect } from 'react';
// import './Loginsignup.css';

const Adminuser = ({ users }) => {
  const [userList, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
 

  useEffect(() => {
    // Check if users is an array before updating the state
    if (Array.isArray(users)) {
      setUsers(users);
    }
   
  }, [users]);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    address: '',
    workplace: '',
    moreDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const userToEdit = userList[index];
    setFormData({ ...userToEdit });
  };

  const handleSave = () => {
    const updatedUsers = userList.map((user, index) =>
      index === editingIndex
        ? {
            ...formData,
            date: user.date || new Date().toLocaleDateString(),
          }
        : user
    );
    setUsers(updatedUsers);
    setEditingIndex(null);
    setFormData({
      name: '',
      age: '',
      mobile: '',
      address: '',
      workplace: '',
      moreDetails: '',
    });
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setFormData({
      name: '',
      age: '',
      mobile: '',
      address: '',
      workplace: '',
      moreDetails: '',
    });
  };

  const handleDelete = (index) => {
    const updatedUsers = userList.filter((user, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className='user'>
      <h2>Employe data Information</h2>
      <table border="2" cellSpacing="5" width="100%" >
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
            <th>Salary</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {userList.map((user, index) => (
            <tr key={index}>

              <td>{index + 1}</td>
              <td>{editingIndex === index ? <input type="text" name="name" value={formData.name} onChange={handleChange} /> : user.name}</td>
              <td>{editingIndex === index ? <input type="text" name="age" value={formData.age} onChange={handleChange} /> : user.age}</td>
              <td>{editingIndex === index ? <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} /> : user.mobile}</td>
              <td>{editingIndex === index ? <input type="text" name="address" value={formData.address} onChange={handleChange} /> : user.address}</td>
              <td>{editingIndex === index ? <input type="text" name="workplace" value={formData.workplace} onChange={handleChange} /> : user.workplace}</td>
              <td>{editingIndex === index ? <input type="text" name="moreDetails" value={formData.moreDetails} onChange={handleChange} /> : user.moreDetails}</td>
              <td>{user.date || new Date().toLocaleDateString()}</td>
              <td>{editingIndex === index ? <input type="text" name="Salary" value={formData.Salary} onChange={handleChange} /> : user.Salary}</td>
             
              <td>
                {editingIndex === index ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Adminuser;
