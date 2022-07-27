import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let userData = { name, email, password };
    const getUserData = () => {
        if (!name || !email || !password) {
            alert('Please Enter Proper Details')
        } else {
            let userInfo = JSON.stringify(userData);
            localStorage.setItem('userInfo', userInfo);
            navigate('/login')
        }
        
  }
    
  return (
      <>
          <div className="container">
              <div className="row mt-5">
                  <div className="col-md-2"></div>
                  <div className="col-md-8 p-5" style={{background:"whitesmoke"}}>
                  <div>
                        <h4 className='text-center pb-3'>Welcome To Signup Page...</h4>
                            <div className="form-group">
                            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="form-control"placeholder="Enter Your Name" required/>
                            </div>
                            <div className="form-group">
                            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control"  placeholder="Enter Your Email" required/>
                            </div>
                            <div className="form-group">
                            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="form-control" placeholder='Enter Your Password' required/>
                            </div>
                            <button type="submit" onClick={()=>getUserData()} className="btn btn-primary w-100">Signup</button>
                    </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Signup