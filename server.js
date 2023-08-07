const express = require('express')
const path = require('path')
const app = express()
const port = 4200

app.use(express.static('public', { maxAge: '30d'}))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/kitty-lens/index.html'));
});

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`))
