export function ProductCard({ product,
  background = "slategray",
  onPurchase,
  ...restProps
}) {



  return (
    <article style={{
      background,
      border: '1px solid white', borderRadius: '8px',
      padding: '16px', textAlign: "center",
      width: "100%"
    }}>
      <h2>{product.title}</h2>
      <img
        src={product.imgSrc}
        alt={product.title}
        {...restProps} />
      <p>Specification:</p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>{product.spec[0]}</li>
        <li>{product.spec[1]}</li>
        <li>{product.spec[2]}</li>
      </ul>
      <button onClick={() => onPurchase(product)}>Buy ({product.price})</button>
    </article>
  );
}