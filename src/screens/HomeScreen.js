import { Link } from 'react-router-dom'
import data from '../data.js';

function HomeScreen() {
  return (
    <div>
      <h1>Lista de productos</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;