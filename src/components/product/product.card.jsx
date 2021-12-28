import RatingLayout from "../rating/rating";
import "./style.scss";

export default function ProductCard() {
  return (
    <div className="a-product">
      <div className="product-img">
        <img
          src="https://laikapp.s3.amazonaws.com/dev_images_products/9829_125245_Furminator___Deslanador_Perro_Peque__o_Pelo_Corto__1640192159_300x300.png"
          alt="prueba"
        />
      </div>
      <div className="prduct-desc">
        <h3>Furminator - Deslanador Perro Pequeño Pelo Corto.</h3>
        <RatingLayout />
      </div>
      <div className="product-price">
        <p>$ 450,000</p>
      </div>
      <div className="product-char">
        <button className="char-pp">Colores Combinados</button>
      </div>
      <button className="add-product">Agregar al Carrito</button>
    </div>
  );
}
