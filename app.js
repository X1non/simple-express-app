const express = require('express')
const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, host, () => {
  console.log(`Example app listening on http://${host}:${port}`)
})
