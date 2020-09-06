import React from 'react';
import './Products.css';

const Products = (props) => {
    const {name, price, img, instructor} = props.collect;
    return (
        <div className='main-box'>
            <img src={img} alt=""/>
            <h4>Name of course: {name} </h4>
            <p>Instructor: {instructor}</p>
            <h5>Price: $ {price}</h5>
            <button className='button' onClick={() =>props.buycourses(props.collect)}>Enroll now</button>
        </div>
    );
};

export default Products; 