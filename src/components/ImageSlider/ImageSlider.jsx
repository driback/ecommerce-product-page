import Image1 from "../../assets/image-product-1.jpg";
import ImageThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import Image2 from "../../assets/image-product-2.jpg";
import ImageThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import Image3 from "../../assets/image-product-3.jpg";
import ImageThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import Image4 from "../../assets/image-product-4.jpg";
import ImageThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

import Images from "./Images";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [images, setImages] = useState({
    activeObject: null,
    imagesDetails: [
      {
        id: 1,
        image: Image1,
        thumbnail: ImageThumbnail1,
        alt: "product 1",
      },
      {
        id: 2,
        image: Image2,
        thumbnail: ImageThumbnail2,
        alt: "product 2",
      },
      {
        id: 3,
        image: Image3,
        thumbnail: ImageThumbnail3,
        alt: "product 3",
      },
      {
        id: 4,
        image: Image4,
        thumbnail: ImageThumbnail4,
        alt: "product 4",
      },
    ],
  });

  const [sliderCount, setSliderCount] = useState(0);
  const [thumbnail, setThumbnail] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handeResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handeResize);

    return () => {
      window.removeEventListener("resize", handeResize);
    };
  }, []);

  const handleNext = () => {
    setSliderCount((prev) =>
      prev <= 0
        ? prev + 1
        : prev >= images.imagesDetails.length - 1
        ? 0
        : prev + 1
    );
  };

  const handlePrev = () => {
    setSliderCount((prev) =>
      prev >= images.imagesDetails.length - 1
        ? prev - 1
        : prev === 0
        ? images.imagesDetails.length - 1
        : prev - 1
    );
  };

  const handleThumbnail = (event) => {
    const { id } = event.target.children[0];

    setThumbnail((prev) => (id <= 0 ? prev + id : id - 1));
    setImages({
      ...images,
      activeObject: images.imagesDetails[id - 1],
    });
  };

  const activeBox = (index) => {
    return images.imagesDetails[index] === images.activeObject
      ? "thumbnail__image active"
      : "thumbnail__image";
  };

  return (
    <>
      <div className="imageSlider">
        <div className="imageSlider__con">
          {images.imagesDetails.map(({ image, alt }, index) => (
            <Images
              key={index}
              clas={"imageSlider__image"}
              source={image}
              alt={alt}
              pos={windowWidth <= 480 ? sliderCount : thumbnail}
            />
          ))}
        </div>
        {windowWidth <= 480 ? (
          <Buttons handleNext={handleNext} handlePrev={handlePrev} />
        ) : null}
      </div>
      <div
        className="thumbnail"
        onClick={(event, index) => handleThumbnail(event, index)}
      >
        {images.imagesDetails.map(({ id, thumbnail, alt }, index) => (
          <Images
            key={index}
            id={id}
            clas={activeBox(index)}
            source={thumbnail}
            alt={alt}
            pos={windowWidth <= 480 ? sliderCount : thumbnail}
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
