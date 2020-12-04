import React, { useContext } from 'react';
import { ProductContext } from '../../App';

const ProductDetails = () => {
   

  const catalog = useContext(ProductContext);
return (
<div>   
   <p>this is the productDetails: {catalog}</p>                    
</div>
);
};

export default ProductDetails;