import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import Product from '../Product/Product';

const Home = () => {
 const catalog = useContext(ProductContext)
return (
<div style={{border: '1px solid red'}}>
   <h1>this is home {catalog}</h1>
   <Product></Product>                      
</div>
);
};

export default Home;