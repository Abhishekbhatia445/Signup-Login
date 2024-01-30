import { useEffect, useState } from 'react';
// import "./Loginsignup.css";
import { useNavigate } from 'react-router-dom';


const Employe = () => { 
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [ error, setError] = useState("");
 
  const handleInputChange = (e) => {
      const {id , value} = e.target;
     
      if (id === "email") {
        setEmail(value);
      }
      if (id === "password") {
        setPassword(value);
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

   
    setError(null);
  
  if (email === "user" && password === "0000") {
   navigate('/employeuser');
  } else {
 setError("Invalid email or password.");
  }
};
  useEffect(() => {

  }, [navigate]);

  return(
      <div className="form">
          <div className="form-body">
            <h1>Employe block</h1>
             <form>
              <div className="email">
                  <label>Email </label>
                  <input  type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="password">
                  <label >Password </label><br/>
                  <input  type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
             
              <br/>
              <div>
              
              <button  type="submit" onClick={(e) => handleSubmit(e)} > Open </button>
             
          </div>
              </form>
              {error && <div className="error">{error}</div>}
          </div>
        
      </div>
     
  );     
};

export default Employe;