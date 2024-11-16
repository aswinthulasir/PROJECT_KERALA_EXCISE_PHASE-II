import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carousel.css';

function CarousalDisplay() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/carousel/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="carousel-container">
      {images.length > 0 ? (
        <Carousel>
          {images.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                src={`http://localhost:5000/${image.path}`}
                alt={image.name}
                className="d-block w-100"
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
}

export default CarousalDisplay;
