import React, { useState, useEffect } from "react";
import axios from "axios";
import AutoScrollingBox from "../components/NewsScroll";

const NewsAndAnnouncements = () => {
  const [spotlightNews, setSpotlightNews] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Fetch news from the backend
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        const newsData = response.data;

        // Group news by category
        setSpotlightNews(newsData.filter((item) => item.category === "Spotlight"));
        setAnnouncements(newsData.filter((item) => item.category === "Announcements"));
        setLatestNews(newsData.filter((item) => item.category === "Latest News"));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className="section-header text-center" style={{ marginTop: "2%" }}>
        <h5 style={{color:'#003366'}}>Spotlight and Announcements</h5>
        <h2 style={{color:'#014576'}}>Excise News and Events</h2>
      </div>
      <div style={{ display: "flex", gap: "2%", marginTop:'2%' }}>
        <AutoScrollingBox
          title="Spotlight"
          items={spotlightNews.map((item) => item.text)}
          bgColor="#007bff"
        />
        <AutoScrollingBox
          title="Announcements"
          items={announcements.map((item) => item.text)}
          bgColor="#9b59b6"
        />
        <AutoScrollingBox
          title="Latest News"
          items={latestNews.map((item) => item.text)}
          bgColor="#e74c3c"
        />
      </div>
    </>
  );
};

export default NewsAndAnnouncements;
