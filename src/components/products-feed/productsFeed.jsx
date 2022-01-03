import ProductCard from "../product/product.card";
import "./productsFeed.scss";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";

const ProductsFeed = () => {
  const [move, setMove] = useState(0);

  const moveMore = () => {
    if (move < 70) {
      setMove(move + 10);
    } else {
      setMove(move - 10);
    }
  };

  const moveMinus = () => {
    if (move > 0) {
      setMove(move - 10);
    }
  };

  return (
    <section className="continer">
      <div className="title-sect">
        <h2>Un universo lleno de ofertas</h2>
        <div className="action-btn">
          <button onClick={moveMinus} className="back">
            <NavigateBeforeIcon />
          </button>
          <button onClick={moveMore} className="next">
            <NavigateNextIcon />
          </button>
        </div>
      </div>
      <div className="product-feed">
        <div className="carrousel-products">
          <div
            style={{ transform: `translateX(${-move}%)` }}
            className="carrousel-all-products"
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsFeed;
