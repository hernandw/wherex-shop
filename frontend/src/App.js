import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            WherEX Shop
          </a>
        </div>
        <div>
          <a href="/cart">Carrito</a>
          <a href="/login">Iniciar Sesion</a>
        </div>
      </header>
      <main>
        
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
