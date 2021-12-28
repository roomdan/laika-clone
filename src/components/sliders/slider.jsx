import { useState } from "react";
import { contentSliders } from "./data";
import "./style.scss";

export default function SlidePrincipal() {
  const [content, setContent] = useState(0);

  const SlideContent = (view) => {
    switch (view) {
      case 1:
        setContent(view);
        break;
      case 2:
        setContent(view);
        break;
      case 3:
        setContent(view);
        break;
      case 4:
        setContent(view);
        break;
      default:
        setContent(view);
    }
  };

  return (
    <div className="sliders-contier">
      <div className="slide-item">
        <img src={contentSliders[content].url} alt="laika" />
      </div>
      <div className="change-view">
        {contentSliders.map((s) => (
          <button
            key={String(Math.random())}
            onClick={() => {
              SlideContent(s.key);
            }}
            className="btn-next"
          ></button>
        ))}
      </div>
    </div>
  );
}
