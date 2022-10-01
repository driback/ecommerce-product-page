import Images from "./Images";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [images, setImages] = useState({
    activeObject: null,
    imagesDetails: [
      {
        id: 1,
        image: "src/assets/image-product-1.jpg",
        thumbnail: "src/assets/image-product-1-thumbnail.jpg",
        alt: "product 1",
      },
      {
        id: 2,
        image: "src/assets/image-product-2.jpg",
        thumbnail: "src/assets/image-product-2-thumbnail.jpg",
        alt: "product 2",
      },
      {
        id: 3,
        image: "src/assets/image-product-3.jpg",
        thumbnail: "src/assets/image-product-3-thumbnail.jpg",
        alt: "product 3",
      },
      {
        id: 4,
        image: "src/assets/image-product-4.jpg",
        thumbnail: "src/assets/image-product-4-thumbnail.jpg",
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
