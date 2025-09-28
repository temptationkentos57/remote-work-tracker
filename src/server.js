const express = require('express');
const app = express();
const port = 3000;
const workRoutes = require('./routes/work');

app.use(express.json());
app.use('/api/work', workRoutes);

app.listen(port, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${port}`);
});