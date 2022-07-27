import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [loginemail, setloginEmail] = useState('')
    const [loginpassword, setloginPassword] = useState('')
    const getLoginData = () => {
        const userData = localStorage.getItem('userInfo');
        const userInfo = JSON.parse(userData);
        let { email, password } = userInfo;
        if (loginemail == email && loginpassword === password) {
            navigate('/home')
        }
        else {
            alert('invalid Credentials');
        }
    }

  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 p-5" style={{background:"whitesmoke"}}>
            <div>
                  <h4 className='text-center pb-3'>Welcome To Login Page...</h4>
                      <div className="form-group">
                      <input onChange={(e)=>setloginEmail(e.target.value)} value={loginemail} type="email" className="form-control" placeholder="Enter Your Email" required/>
                      </div>
                      <div className="form-group">
                      <input onChange={(e)=>setloginPassword(e.target.value)} value={loginpassword} type="password" className="form-control"  placeholder="Enter Your Password" required/>
                      </div>
                      <button onClick={()=>getLoginData()} type="submit" className="btn btn-success w-100">Login</button>
              </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Login