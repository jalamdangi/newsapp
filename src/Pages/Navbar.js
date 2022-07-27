import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const [totalitems, setTotalItems] = useState();
    const itemsArray = localStorage.getItem('itemsArray');
    const productsArray = JSON.parse(itemsArray);
    // let totalitemsLength = productsArray.length;
    // setTotalItems(totalitemsLength);
    // console.log(totalitemsLength);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light">
                <div className="col-md-1">
                    <img onClick={()=>navigate('/home')} className='logo-img' src="https://thumbs.dreamstime.com/z/fork-spoon-silhouette-icon-restaurant-cafe-symbol-185639970.jpg" alt="" />
                </div>
                <a onClick={()=>navigate('/home')} className="navbar-brand text-light"><h4>Food's Restaurant</h4></a>
            </nav>
            <div id='cart' className='row'>
                <div className="col-md-6">
                <i onClick={()=>navigate('/paymentpage')} className="fa fa-shopping-cart text-right" style={{ fontSize: "36px" }}></i>
                </div>
                <div className="col-md-6 pl-2">
                    {/* <h4>{totalitemsLength}</h4> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar