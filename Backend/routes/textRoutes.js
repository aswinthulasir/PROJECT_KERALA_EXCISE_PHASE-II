const express = require('express');
const { getTexts, createText, deleteText } = require('../controllers/textController');

const router = express.Router();

router.get('/', getTexts);
router.post('/', createText);
router.delete('/:id', deleteText);

module.exports = router;
