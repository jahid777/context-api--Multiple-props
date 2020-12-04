import React from 'react';

const Shipment = (props) => {
  const {count, setCount} = props   // props ar maddome app.js ar vitor useState theke data akahne ansi.                    
return (
<div>
   <h1>this is shipment {count}</h1>                      
</div>
);
};

export default Shipment;