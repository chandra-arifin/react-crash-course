import './App.css';
import { ProductCard } from './components/ProductCard'
import { ProductList } from './components/ProductList';

function handlePurchase(product) {
  alert(`kamu membeli ${product.title} seharga ${product.price}`)
}

const products = [{
  imgSrc: "images/iphone14.png",
  title: "iPhone 14",
  spec: [
    "A1",
    "1x camera",
    "2 Hours Battery"
  ],
  price: 200
},
{
  imgSrc: "images/iphone15.png",
  title: "iPhone 15",
  spec: [
    "A2",
    "4x camera",
    "10 Hours Battery"
  ],
  price: 300
},
{
  imgSrc: "images/iphone15pro.png",
  title: "iPhone 15 Pro",
  spec: [
    "A17",
    "3x camera",
    "29 Hours Battery"
  ],
  price: 900
}];


function App() {
  return (
    <div className="App">
      <ProductList>
        <ProductCard width="96px"
          height="96px" background='darkolivegreen' product={products[0]}
          onPurchase={handlePurchase} />
        <ProductCard
          width="64px"
          height="64px" background='peru' product={products[1]}
          onPurchase={handlePurchase} />
        <ProductCard
          width="128px"
          height="128px" product={products[2]}
          onPurchase={handlePurchase} />
      </ProductList>
    </div>
  );
}

export default App;