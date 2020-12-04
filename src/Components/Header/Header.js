import React, { useContext } from 'react';
import { ProductContext } from '../../App';

const Header = () => {
  const [catalog, setCatalog] = useContext(ProductContext);                      
    
//     const handleCount = ()=>{
//     setCount(count+1);                       
//     }                     
return (
<div>
    <h1>this is header:{catalog}</h1>
    {/*<button onClick={handleCount)}>Increase</button>*/}
    <button onClick={()=>setCatalog(catalog+1)}>Increase</button>                   
</div>
);
};

export default Header;