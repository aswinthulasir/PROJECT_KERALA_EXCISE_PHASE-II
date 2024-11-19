import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/addTextForm.css';

const AddTextForm = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);

  // Fetch existing texts from the database
  const fetchTexts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/texts');
      setTexts(response.data);
    } catch (error) {
      console.error('Error fetching texts:', error);
    }
  };

  // Handle form submission to add new text
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      try {
        await axios.post('http://localhost:5000/api/texts', { text });
        alert('Text added successfully!');
        setText('');
        fetchTexts(); // Refresh the list after adding a new text
      } catch (error) {
        console.error('Error adding text:', error);
      }
    }
  };

  // Handle text deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this text?')) {
      try {
        await axios.delete(`http://localhost:5000/api/texts/${id}`);
        alert('Text deleted successfully!');
        fetchTexts(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting text:', error);
      }
    }
  };

  // Fetch texts on component mount
  useEffect(() => {
    fetchTexts();
  }, []);

  return (
    <>
      <div className="form-container-2">
        <h3>Add New Scrolling Text</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter scrolling text"
            required
          />
          <button type="submit">Add Text</button>
        </form>
      </div>

      <div className="text-list">
        <h4>Existing Texts</h4>
        {texts.length === 0 ? (
          <p>No texts available</p>
        ) : (
          <ul>
            {texts.map((item) => (
              <li key={item.id}>
                <span>{item.text}</span>
                <button onClick={() => handleDelete(item.id)} className="delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AddTextForm;
