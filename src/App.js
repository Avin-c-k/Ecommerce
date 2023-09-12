
import './App.css';

import MainRouter from './compnents/front/mainRouter';
import { useState } from 'react';

function App() {


  const [cartItems, setCartItems] = useState([])



  const handleAddClick = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item
        ))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }

  }

  const handleRemoveProduct = (product, id) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if (ProductExist.quantity===1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
     

    }
    else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      )
    }
  }
  
  const handleCartClear=()=>{
    setCartItems([])
  }

  return (
    <div >
      <MainRouter cartItems={cartItems} handleAddClick={handleAddClick} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear} />


    </div>
  );

}
export default App;
