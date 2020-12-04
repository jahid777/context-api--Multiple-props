import React, { useContext } from 'react';
import { ProductContext } from '../../App';

const AnotherButton = () => {
   const [catalog, setCatalog] = useContext(ProductContext)                      
return (
<div>
    <h1>this is the another button</h1>  
    <button onClick={()=> setCatalog(catalog+1)}>increment from another component</button>                   
</div>
);
};

export default AnotherButton;