import SS1 from "../assets/screenshot1.png";
import SS2 from "../assets/screenshot2.png";
import SS3 from "../assets/screenshot3.png";
import SS4 from "../assets/screenshot4.png";

import { useState, useEffect } from "react";

const images = [SS1, SS2, SS3, SS4];

export default function PhoneScreenShot() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
    };

    const intervalId = setInterval(changeImage, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="max-[875px]:hidden w-[420px] bg-[url('./assets/home-phones.png')]">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt="Image of screen phone transition"
          className={`absolute left-[10rem] top-6 animate-screenshot`}
        />
      </div>
    </div>
  );
}
