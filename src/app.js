const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API cho Remote Work Tracker');
});

app.listen(port, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${port}`);
});