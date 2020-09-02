import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen (props){

  // Define a hook
  const [products, setProducts] = useState([]);
  // Fetch data from server
  useEffect(() => { 
    const fetchData = async () =>{
      const {data} = await axios.get("/api/products");
      setProducts(data);
    }
    fetchData();
    return() => {

    };
  }, [])


    return <ul className="products">
    {
      products.map(product =>
        <li key={product._id}>
        <div className="product">
          <Link to={'/product/' + product._id}>
            <img className="product-image" src={product.image} alt="product"/>
          </Link>
          <Link to={'/product/' + product._id}>
            <div className="product-name">{product.name}</div>
          </Link>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">{product.rating} Stars</div>
        </div>
        </li>
      )
    }
    
  </ul>
}
export default HomeScreen;