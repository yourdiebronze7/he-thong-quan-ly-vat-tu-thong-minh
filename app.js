const express = require('express');
const itemRoutes = require('./routes/itemRoutes');
const app = express();
const port = 4000;

app.use(express.json());
app.use('/api/items', itemRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
