

require('dotenv').config();
const cors = require('cors');
const artistRoute = require('./routes/artists.js');
const dbConnect = require('./dbConnect');
const express = require('express')
const app = express();
const port = process.env.PORT || 8080;

dbConnect();

app.use(express.json());
app.use(cors());
app.use('/search.artist', artistRoute)
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

