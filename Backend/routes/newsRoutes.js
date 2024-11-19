const express = require("express");
const router = express.Router();
const pool = require("../db"); // Import the database connection

// Fetch all news
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM news ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).send("Server error");
  }
});

// Add news
router.post("/", async (req, res) => {
  const { category, text } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO news (category, text) VALUES ($1, $2) RETURNING *",
      [category, text]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error adding news:", error);
    res.status(500).send("Server error");
  }
});

// Delete news
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM news WHERE id = $1", [id]);
    res.send("News deleted successfully");
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
