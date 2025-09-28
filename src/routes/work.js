const express = require('express');
const router = express.Router();

let workRecords = [];

router.post('/record', (req, res) => {
  const { date, hours, description } = req.body;
  workRecords.push({ date, hours, description });
  res.status(201).send('Ghi chép công việc đã được thêm!');
});

router.get('/records', (req, res) => {
  res.json(workRecords);
});

module.exports = router;