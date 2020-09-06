import React, { useState } from 'react';
import Products from '../Products/Products';
import data from '../../data/data.json'
import Cart from '../Cart/Cart';
import './Course.css';

const Course = () => {
    const courseInfo = data;
    const [product, setproduct] = useState(courseInfo);
    const [cart, setcart] = useState([]);

    const buycourse = (product) => {
        const newCart = [...cart, product];
        setcart(newCart);
    }
    
    return (
        
        <div className='main-container'>
             <div className="products-container">
            {
             product.map(course =>  <Products buycourses={buycourse} collect={course} ></Products>)
            }
            </div>
            <div className="cart-container">

            </div>
           <Cart cart={cart}></Cart>
        </div>
    );
};

export default Course;