const express = require('express');
const bodyParser = require('body-parser');
const marked = require('marked');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  try {
    const html = marked.parse(markdown);
    res.json({ html });
  } catch (error) {
    res.status(500).json({ error: 'Error converting markdown to HTML' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
