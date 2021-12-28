import { useState } from "react";
import { contentSliders } from "./data";
import "./style.scss";

export default function SlidePrincipal() {
  const [content, setContent] = useState(0);

  const SlideContent = (view) => {
    switch (view) {
      case 1:
        setContent(view);
      case 2:
        setContent(view);
      case 3:
        setContent(view);
      case 4:
        setContent(view);
      default:
        setContent(view);
    }
  };

  return (
    <div className="sliders-contier">
      <div className="slide-item">
        <img src={contentSliders[content].url} />
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
