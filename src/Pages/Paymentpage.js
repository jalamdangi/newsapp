import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Paymentpage = () => {
    const navigate = useNavigate()
    // const [data, setData] = useState({});
    const itemsArray = localStorage.getItem('itemsArray');
    const productsArray = JSON.parse(itemsArray);
    
    return (
        <div>
            <div className="container">
                <h4 className='text-center p-3'>Your Total Products</h4>
                {productsArray.map((item, index) => {
                    return (
                        <div className="row bg-light border" key={item.itemid}>
                            <div className="col-md-3 p-0 m-0">
                                <img src={item.itemimage} alt="" style={{width:"240px", height:"240px"}} />
                            </div>
                            <div className="col-md-7">
                                <h6 className='text-capitalize'>Name : {item.itemname}</h6>
                                <h6>Price : {item.itemprice}</h6>
                            </div>
                        </div>
                    )
                })}
                <div className="row mt-3">
                    <div className="col-md-12">
                        <button onClick={()=>navigate('/checkout')} className='btn btn-success w-100 p-3'>Make Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paymentpage