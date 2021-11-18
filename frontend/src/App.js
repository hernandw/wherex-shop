import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (<Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            WherEX Shop
          </Link>
        </div>
        <div>
          <Link to="/cart">Carrito{cartItems.length > 0 && (
            <span className='badge'>{cartItems.length}</span>
          )}</Link>
          <Link to="/login">Iniciar Sesion</Link>
        </div>
      </header>
      <main>
        <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/' exact component={HomeScreen}></Route>
        
      </main>
      <footer className="row center">
        Todos los derechos reservados ® Williams Hernandez -
      </footer>
    </div>
    </Router>
  );
}

export default App;
