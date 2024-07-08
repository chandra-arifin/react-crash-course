import { Fragment, useState } from 'react';
import styles from './App.module.css';
import { ProductCard } from './components/ProductCard'
import { ProductList } from './components/ProductList';
import { ProductFilter } from './components/ProductFilter';
import { products as productsData } from './data/Products';


function App() {
  const [products, setProducts] = useState(productsData);

  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
  });

  const [favorites, setFavorites] = useState([]);

  function handleFavorites(productId) {
    if (favorites.includes(productId)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter(id => id !== productId))
    }
    else {
      setFavorites((prevFavorites) => [...prevFavorites, productId])
    }
  }

  function handlePurchase(productId, stockCount) {
    // alert(`kamu membeli ${product.title} seharga ${product.price}`)
    setProducts((prevProducts) => prevProducts.map((product) =>
      product.id === productId ? { ...product, stockCount } : product)
    );
  }

  function handleFilters(key, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [key]: value
      }
    }));
  }

  return (
    <div className={styles.App}>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavorites={handleFavorites}
          />
        ))}
      </ProductList>

      <h2>Product Filter by price</h2>
      <ProductFilter filters={filters}
        onFilters={handleFilters} />
      {
        products.filter(({ price }) => price >= filters.price.min && price <= filters.price.max).map(({ title, price }, index) => (
          <Fragment key={index}>
            <hr className={styles.ListDivider} />
            <p className={styles.ListTitle} >({title} - {price})</p>
          </Fragment>
        ))
      }
    </div>
  );
}

export default App;