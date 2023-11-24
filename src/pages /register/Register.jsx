import "./register.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    zipcode: ''
  })
  const [error, setError] = React.useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    const value = e.target.value
    const key = e.target.name 
    setUser({...user, [key]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      email: user.email,
      username: user.username,
      zipcode: user.zipcode
    }
    try {
      await axios.post('https://api-one-z7uj.onrender.com/sign_up', userData).then((response) => {
        if (response.status === 201) {
          navigate('/login');
        }
      });
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Tujuane Social</h3>
          <span className="loginDesc">
            <img src="https://i.pinimg.com/originals/51/91/ff/5191ff6f9c185ca58958409513eb5cb6.gif" alt="" />
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form action="" className="form_login" onSubmit={handleSubmit}>
              <input 
              placeholder="Username" 
              className="loginInput" 
              name="username"
              onChange={handleChange}
              required/>
              <input 
              placeholder="Email" 
              className="loginInput" 
              name="email"
              type="email"
              onChange={handleChange}
              required/>
              <input 
              placeholder="Zipcode" 
              className="loginInput" 
              name="zipcode"
              onChange={handleChange}
              required/>
              <button onClick={handleSubmit} type="submit" className="loginButton">Sign Up</button>
              <Link to='/login' className="loginRegisterButton">
                Log in
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
