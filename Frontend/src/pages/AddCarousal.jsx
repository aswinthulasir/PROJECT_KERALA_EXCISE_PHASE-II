import React, { useState, useEffect } from 'react';
import '../styles/addItems.css';

function AdminCarousalAdd() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  // Fetching all images
  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/carousel/images');
      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Error fetching images');
    }
  };

  // Handling file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Uploading a new image
  const handleUpload = async () => {
    if (!file || !name.trim()) {
      alert('Please provide all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', name);
    formData.append('description', description);

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/carousel/uploads', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      alert(result.message);
      setFile(null);
      setName('');
      setDescription('');
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    } finally {
      setLoading(false);
    }
  };

  // Deleting an image
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await fetch(`http://localhost:5000/carousel/images/${id}`, { method: 'DELETE' });
        alert('Image deleted successfully');
        fetchImages();
      } catch (error) {
        console.error('Error deleting image:', error);
        alert('Error deleting image');
      }
    }
  };

  return (
    <div className="container">
      {/* Upload Section */}
      <div className="upload-section">
        <h2>Carousel Handle</h2>
        <input
          type="text"
          className="upload-input"
          placeholder="Image Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="upload-input"
          placeholder="Image Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" className="upload-input" onChange={handleFileChange} />
        <button className="upload-button" onClick={handleUpload} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2>Uploaded Images</h2>
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img
                src={`http://localhost:5000/uploads/${image.path}`}
                alt={image.name}
                className="gallery-item-image"
              />
              <div className="gallery-item-details">
                <h3>{image.name}</h3>
                <p>{image.description}</p>
              </div>
              <button className="delete-button" onClick={() => handleDelete(image.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No images uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default AdminCarousalAdd;
