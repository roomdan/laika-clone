import { useState } from "react";
import { contentSliders } from "./data";
import "./style.scss";

export default function SlidePrincipal() {
  const [xtrasnlate, setXtranslate] = useState(0);
  const [active, setActive] = useState(1);

  const translateSlide = (slide) => {
    switch (slide) {
      case 2:
        setXtranslate(-20);
        setActive(2);
        return "active";
      case 3:
        setXtranslate(-40);
        setActive(3);
        return "active";
      case 4:
        setXtranslate(-60);
        setActive(4);
        return "active";
      case 5:
        setXtranslate(-80);
        setActive(5);
        return "active";
      default:
        setXtranslate(0);
        setActive(1);
        return "active";
    }
  };

  return (
    <div className="sliders-contier">
      <div
        style={{ transform: `translateX(${xtrasnlate}%)` }}
        className="carrousel-continer"
      >
        <div className="slide">
          <img src={contentSliders[0].url} alt={contentSliders[2].alt} />
        </div>
        <div className="slide">
          <img src={contentSliders[1].url} alt={contentSliders[2].alt} />
        </div>
        <div className="slide">
          <img src={contentSliders[2].url} alt={contentSliders[2].alt} />
        </div>
        <div className="slide">
          <img src={contentSliders[3].url} alt={contentSliders[2].alt} />
        </div>
        <div className="slide">
          <img src={contentSliders[4].url} alt={contentSliders[2].alt} />
        </div>
      </div>
      <div className="slider-buttons">
        <div className="slider-btn-cotiner">
          <button
            className={active === 1 ? "active" : ""}
            onClick={() => {
              translateSlide(1);
            }}
          ></button>
          <button
            className={active === 2 ? "active" : ""}
            onClick={() => {
              translateSlide(2);
            }}
          ></button>
          <button
            className={active === 3 ? "active" : ""}
            onClick={() => {
              translateSlide(3);
            }}
          ></button>
          <button
            className={active === 4 ? "active" : ""}
            onClick={() => {
              translateSlide(4);
            }}
          ></button>
          <button
            className={active === 5 ? "active" : ""}
            onClick={() => {
              translateSlide(5);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}
