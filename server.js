const express = require('express');
const app = express()

const ejs = require('ejs');
const path = require('path')

const PORT = process.env.PORT || 3000


// set ejs Template
app.use( express.static( "public" ) );
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
});

app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`)
})