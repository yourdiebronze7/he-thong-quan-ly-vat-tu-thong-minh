const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('The intelligent inventory management system is running!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

console.log('Express server has been successfully initialized and is ready to handle requests.');