import CulturalSlider from "./CulturalSlider";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import LinkIcon from "./layout/LinkIcon";

function CulturalHome({ cultural }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderTotal = cultural.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderTotal - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderTotal - 1 : currentSlide - 1);
  };

  return (
    <div>
      <LinkIcon />
      <div className="cultural-item-wrap">
        {cultural.map((cultural, key) => {
          return (
            <div
              key={key}
              className={key === currentSlide ? "slide active" : "slide"}
            >
              {key === currentSlide && (
                <div>{<CulturalSlider cultural={cultural} />}</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="slide-btn-wrap">
        <div className="prev-btn">
          <button onClick={prevSlide}>
            <FaAngleLeft />
          </button>
        </div>
        <div className="next-btn">
          <button onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CulturalHome;
