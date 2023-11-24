import "./login.css";
import axios from 'axios'
import React from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [user, setUser] = React.useState({
    email: '',
    password: ''
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
      password: user.password
    }
    try {
      await axios.post('http://127.0.0.1:3000/log_in', userData).then((response) => {
        if (response.status === 200) {
          navigate('/home');
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
            <img src="https://media4.giphy.com/media/jQmn1Dkw55R3cjm3eC/giphy.gif" alt="" />
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form action="" className="form_login" onSubmit={handleSubmit}>
              <input placeholder="Email" 
              className="loginInput" 
              name="email"
              type="email"
              onChange={handleChange} 
              required/>
              <input placeholder="Password" 
              className="loginInput" 
              name="password" 
              onChange={handleChange}
              required/>
              <button onClick={handleSubmit}  type="submit" className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              {
                error? <strong className="error">Invalid username or password</strong>: ''
              }
              <Link to='/' className="loginRegisterButton">
                Sign-up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
