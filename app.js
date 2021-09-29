const express = require('express')
const app = express()
const port = 3000

// Nos permite recibir json por http
app.use( express.json() )

app.get('/', (req, res) => {
  res.send('Api Proyecto!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})