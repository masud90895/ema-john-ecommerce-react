import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Drower from './components/Drower/Drower';
import Products from './components/Products/Products';
import { useState } from 'react';

function App() {

  const [productItem,setProductItem] = useState([]);
  
  return (
    <div className="App">
      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row'>
        <Products setProductItem={setProductItem}></Products>
        <Drower productItem={productItem} setProductItem={setProductItem}></Drower>
      </div>

    </div>
  );
}

export default App;
