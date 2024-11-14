import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselDisplay = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/carousel/images')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      {images.length > 0 ? (
        <Carousel>
          {images.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                src={`http://localhost:5000${image.imagePath}`}
                className="d-block w-100"
                alt={image.name}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{image.name}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default CarouselDisplay;
