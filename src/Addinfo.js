import React, { useState } from 'react';


const Addinfo = ({ onSubmit }) => {
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
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData); 
       setFormData({
        name: '',
        age: '',
        mobile: '',
        address: '',
        workplace: '',
        moreDetails: '',
      });
    };
  
   
  return ( <div>
    <div className='form'>
    <h2>Add Employe Information</h2>  
  <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>
                <input
                  type='number'
                  name='age'
                  value={formData.age}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Mobile Number:</td>
              <td>
                <input
                  type='text'
                  name='mobile'
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
                <input
                  type='text'
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Workplace:</td>
              <td>
                <input
                  type='text'
                  name='workplace'
                  value={formData.workplace}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>More Details:</td>
              <td>
                <textarea
                  name='moreDetails'
                  value={formData.moreDetails}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
  </form>
    </div>
  </div>

);
};

export default Addinfo