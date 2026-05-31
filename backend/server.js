require('dotenv').config();
const express = require('express');
const cors = require('cors');
const lessonRoutes = require('./routes/lessonRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', lessonRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
