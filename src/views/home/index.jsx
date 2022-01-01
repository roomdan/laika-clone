import "./style.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SlidePrincipal from "../../components/sliders/slider";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { SlidersResponse } from "./response/sliders.data";
import PartnersGrid from "../../components/partners/partners";
import ProductCard from "../../components/product/product.card";
import LaikaAbout from "../../components/laika-about/laika";

export default function Home() {
  const categories = SlidersResponse;

  return (
    <div className="a-page">
      <div className="a-page-content">
        <SlidePrincipal />
        <section className="continer">
          <div className="title-sect">
            <h2>Categorias</h2>
            <div className="action-btn">
              <button className="back">
                <NavigateBeforeIcon />
              </button>
              <button className="next">
                <NavigateNextIcon />
              </button>
            </div>
          </div>
          <div className="content-section">
            {categories.map((c) => (
              <div key={String(Math.random())} className="card-category">
                <img src={c.img} alt={c.name} />
                <p>{c.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="continer-inf">
          <div className="title-sect">
            <h2>Encuentra todo para tus peludos en un solo lugar</h2>
          </div>
          <div className="content-section-inf">
            <div className="info-card">
              <img src="https://laika.com.co/assets/home/delivery.png" alt="" />
              <h2>Entregas el mismo día</h2>
              <p>Entregamos todo lo que necesitas, cuando lo necesitas</p>
            </div>
            <div className="info-card">
              <img
                src="https://laika.com.co/assets/home/secure_payment.png"
                alt=""
              />
              <h2>Pago online o contra entrega</h2>
              <p>
                Escoge tu método de pago.¡No te preocupes! contamos con
                pasarelas de pagos certificadas y seguras
              </p>
            </div>
            <div className="info-card">
              <img
                src="https://laika.com.co/assets/home/all_for_pets.png"
                alt="la"
              />
              <h2>Todo lo que necesitas</h2>
              <p>
                Contamos con más de 4.000 productos y servicios. Encuentra todo
                lo que necesitas para tu peludo
              </p>
            </div>
          </div>
        </section>
        <section className="continer">
          <div className="title-sect">
            <h2>¡Más de 100 marcas disponibles!</h2>
          </div>
          <PartnersGrid />
        </section>
        <section className="continer">
          <div className="title-sect">
            <h2>Un universo lleno de ofertas</h2>
            <div className="action-btn">
              <button className="back">
                <NavigateBeforeIcon />
              </button>
              <button className="next">
                <NavigateNextIcon />
              </button>
            </div>
          </div>
          <div className="product-feed">
            <div className="product-off-list">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className="continer">
          <div className="title-sect">
            <h2>Favoritos Laika</h2>
            <div className="action-btn">
              <button className="back">
                <NavigateBeforeIcon />
              </button>
              <button className="next">
                <NavigateNextIcon />
              </button>
            </div>
          </div>
          <div className="product-feed">
            <div className="product-off-list">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className="inf-apps">
          <div className="cont-atract">
            <h2>
              Para una mejor experiencia para ti y tu peludo descarga la app.
            </h2>
            <div className="img-app"></div>
          </div>
          <div className="img-atract">
            <img
              src="https://laika.com.co/assets/imagen_phone_r.png"
              alt="cel"
            ></img>
          </div>
        </section>
        <section className="laika-inf-end">
          <LaikaAbout />
        </section>
      </div>
    </div>
  );
}
