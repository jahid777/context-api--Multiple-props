import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';
import { createContext, useState } from 'react';
import AnotherButton from './Components/AnotherButton/AnotherButton';

export const ProductContext = createContext();


function App() {
  const [catalog, setCatalog] = useState(0);

  return (
        <ProductContext.Provider value={[catalog, setCatalog]}>
        <p>this is value: {catalog}</p>
        <Header></Header>
        <Home></Home> 
       <Shipment count = {catalog} setCount={setCatalog}></Shipment> {/* props die data shipment a pathano hoise  */}
       <AnotherButton></AnotherButton>
        </ProductContext.Provider>
       
  );
}


export default App;
