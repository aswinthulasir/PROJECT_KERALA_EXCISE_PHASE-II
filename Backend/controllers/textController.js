const { getAllTexts, addText } = require('../models/textModel');

exports.getTexts = async (req, res) => {
  try {
    const texts = await getAllTexts();
    res.json(texts);
  } catch (err) {
    console.error('Error fetching texts:', err);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.createText = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }
  try {
    const newText = await addText(text);
    res.json(newText);
  } catch (err) {
    console.error('Error adding text:', err);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.deleteText = async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM scrolling_texts WHERE id = $1', [id]);
      res.json({ message: 'Text deleted successfully' });
    } catch (err) {
      console.error('Error deleting text:', err);
      res.status(500).json({ error: 'Server Error' });
    }
  };