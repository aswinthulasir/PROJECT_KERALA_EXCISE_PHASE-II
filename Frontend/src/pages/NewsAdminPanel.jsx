import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/newsAdminPanel.css";

const NewsAdminPanel = () => {
  const [newsCategory, setNewsCategory] = useState("Spotlight");
  const [newsText, setNewsText] = useState("");
  const [newsItems, setNewsItems] = useState([]);

  // Fetch news items from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNewsItems(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  // Handle form submission to add news
  const handleAddNews = async (e) => {
    e.preventDefault();
    if (newsText.trim()) {
      try {
        const newNews = { category: newsCategory, text: newsText };
        const response = await axios.post("http://localhost:5000/api/news", newNews);
        setNewsItems([...newsItems, response.data]);
        setNewsText("");
      } catch (error) {
        console.error("Error adding news:", error);
      }
    }
  };

  // Handle deletion of a news item
  const handleDeleteNews = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`);
      setNewsItems(newsItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <div className="admin-panel-container">
      <h3>Manage News</h3>
      <form className="news-form" onSubmit={handleAddNews}>
        <select
          value={newsCategory}
          onChange={(e) => setNewsCategory(e.target.value)}
        >
          <option value="Spotlight">Spotlight</option>
          <option value="Announcements">Announcements</option>
          <option value="Latest News">Latest News</option>
        </select>
        <input
          type="text"
          value={newsText}
          onChange={(e) => setNewsText(e.target.value)}
          placeholder="Enter news text"
          required
        />
        <button type="submit">Add News</button>
      </form>
      <div className="news-list">
        {newsItems.map((item) => (
          <div key={item.id} className="news-item">
            <p>
              <strong>{item.category}: </strong>
              {item.text}
            </p>
            <button onClick={() => handleDeleteNews(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAdminPanel;
