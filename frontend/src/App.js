import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">WherEX Shop</a>
      </div>
      <div>
        <a href="/cart">Carrito</a>
        <a href="/login">Iniciar Sesion</a>
      </div>
    </header>
    <main>
      <div className="row center">
        {
          data.products.map(product =>(
        <Product key={product._id} product={product}></Product>
        ))
      }
        </div>
    </main>
    <footer className="row center">
      Todos los derechos reservados ® Williams Hernandez - 
    </footer>
  </div>
  );
}

export default App;
