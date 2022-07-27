import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="row text-center pt-5" style={{ background: 'white' }}>
                <div className="col-md-12">
                    <h1>Welcome to Food's</h1>
                    <h1>Kitchen</h1>
                    <button onClick={()=>navigate('/products')} className='btn bg-primary text-white mt-3'>GO TO MENU</button>
                </div>
            </div>
        </div>
    )
}

export default Home