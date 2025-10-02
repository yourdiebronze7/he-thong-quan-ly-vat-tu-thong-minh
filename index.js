const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hệ thống quản lý vật tư thông minh đang hoạt động!');
});

app.listen(port, () => {
  console.log(`Server chạy trên http://localhost:${port}`);
});