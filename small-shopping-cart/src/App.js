import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data'
import { useState } from 'react';

function App() {
  const { products } = data;    //extract 'products' from data. (props to be used by children components)
  const [cartItems, setCartItems] = useState([]); //set default as empty array.

  //function to add to cart.
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    //if the product exists in the cart => increment the quantity.
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ?
        { ...exist, qty: exist.qty + 1 } : x));
      //if product not in cart => add product to cart.
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  //function to remove item from cart.
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id)); //removes product from cartitems
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ?
        { ...exist, qty: exist.qty - 1 } : x));
    }
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}>
        </Basket>
      </div>
    </div>
  );
}

export default App;
