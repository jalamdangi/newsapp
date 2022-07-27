import React, { useState } from 'react'
const Products = [
    {
        "id": "1",
        "name": "burger",
        "price": "200",
        "img":"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="
    },
    {
        "id": "2",
        "name": "fries",
        "price": "100",
        "img": "https://www.bing.com/th?id=OIP.rx4Ijpkxn3-qN6VcANpllAHaFu&w=284&h=219&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"  
    },
    {
        "id": "3",
        "name": "coke",
        "price": "50",
        "img": "https://www.bing.com/th?id=OIP.-kWWoyiuaA2sTWdp3j7dfAHaMb&w=192&h=323&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    {
        "id": "4",
        "name": "pepsi",
        "price": "50",
        "img": "https://www.bing.com/th?id=OIP.V3E7k9pW3gsW81I3iNBz8gHaKR&w=212&h=294&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
]

const Product = () => {
    const [data, setData] = useState(Products);
    const [burgerquantity, setburgerQuantity] =useState(0)
    const [friesquantity, setfriesQuantity] =useState(0)
    const [cokequantity, setcokeQuantity] =useState(0)
    const [pepsiquantity, setpepsiQuantity] = useState(0)
    const [cartitems, setcartItems] = useState(1);
    // console.log(data);
    let addItemArray = [];
    const addItem = (itemid, itemname, itemprice, itemimage) => {
        // console.log({ itemid, itemname, itemprice, itemimage });
        let newItemObj = { itemid, itemname, itemprice, itemimage };
        addItemArray.push(newItemObj);
        console.log(addItemArray);
        const newArray = JSON.stringify(addItemArray)
        localStorage.setItem('itemsArray', newArray);
        

        // if (itemname == 'burger') {
        //     setburgerQuantity(burgerquantity+1)
        // }else if(itemname == 'fries'){
        //     setfriesQuantity(friesquantity+1)
        // }else if(itemname == 'coke'){
        //     setcokeQuantity(cokequantity+1)
        // }else {
        //     setpepsiQuantity(pepsiquantity+1)
        // }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {data.map((item, index) => {
                        return (
                            <div className="col-md-4 p-2" key={item.id}>
                                <div className="card">
                                    <img className="card-img-top" src={item.img} alt="Card image cap" style={{width:"240px",height:"240px"}} />
                                    <div className="card-body">
                                        <h5 className="card-title text-capitalize">{item.name}</h5>
                                        <h4>Price : {item.price}</h4>
                                        <h6>Quantity : {item.name == 'burger' ? burgerquantity : item.name == 'fries' ? friesquantity : item.name == 'coke' ? cokequantity : pepsiquantity } </h6>
                                        <button onClick={()=>addItem(item.id,item.name,item.price,item.img)} className='btn btn-primary mr-3'>+</button>
                                        <button className='btn btn-danger'>-</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product