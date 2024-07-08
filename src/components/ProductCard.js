import { useState } from 'react';
import styles from '../styles/ProductCard.module.css'

export function ProductCard({ product,
  background = "slategray",
  onPurchase,
  onFavorites,
  isFavorite,
}) {
  const [showMore, setShowMore] = useState(true);

  function handleClick() {
    onPurchase(product.id, product.stockCount - 1);
  }

  function handleClick2() {
    onPurchase(product.id, product.stockCount - 2);
  }

  //❤️
  return (
    <article className={styles.Container} style={{ background }}>
      <button className={styles.Fav}
        onClick={() => onFavorites(product.id)}>{isFavorite ? '❤️' : '🩶'}</button>
      <h2>{product.title}</h2>
      <img
        src={product.imgSrc}
        alt={product.title}
        width={128}
        height={128} />
      <p>Specification: {" "}
        <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Hide' : 'Show'}</button>
      </p>
      {showMore &&
        <ul className={styles.List}>
          {product.spec.map((spec, index) => (<li key={product.id + index}>{spec}</li>))}
        </ul>
      }
      <Status stockCount={product.stockCount} />
      {
        product.stockCount > 0 &&
        (
          <>
            <p>Price: {product.price}</p>
            <button onClick={() => handleClick()}>Buy</button>
          </>
        )
      }
      {
        product.stockCount >= 2 &&
        (
          <>
            <p>Price: {product.price}</p>
            <button onClick={() => handleClick2()}>Buy 2</button>
          </>
        )
      }
    </article >
  );
}

function Status({ stockCount }) {

  const notAvailable = <p className={styles.NotAvailable}> Not Available</p >;
  const available = <p className={styles.Available}> {stockCount} items available</p >;

  return (stockCount === 0) ? notAvailable : available;
}

