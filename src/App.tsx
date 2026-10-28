import productos from './productos.json';
import ProductCard from './components/ProductCard';
import type { Producto } from './types';
import './App.css';

function App() {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="catalogo">
        {(productos as Producto[]).map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default App;
