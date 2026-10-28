import { useState } from 'react';
import type { Producto } from '../types';

interface ProductCardProps {
  producto: Producto;
}

function ProductCard({ producto }: ProductCardProps) {
  const [agregado, setAgregado] = useState(false);
  const [mostrarReseñas, setMostrarReseñas] = useState(false);

  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="precio">${producto.precio.toFixed(2)}</p>

      <button onClick={() => setAgregado(true)} disabled={agregado}>
        {agregado ? 'Agregado ✅' : 'Agregar al Carrito'}
      </button>

      <button onClick={() => setMostrarReseñas(!mostrarReseñas)}>
        {mostrarReseñas ? 'Ocultar reseñas' : 'Mostrar reseñas'}
      </button>

      {mostrarReseñas && (
        <ul className="reseñas">
          {producto.reseñas.length === 0 ? (
            <li>Este producto no tiene reseñas.</li>
          ) : (
            producto.reseñas.map((reseña, index) => (
              <li key={index}>
                <strong>{reseña.usuario}</strong> ({reseña.fecha}): {reseña.texto}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default ProductCard;
