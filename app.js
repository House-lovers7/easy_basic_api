const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000
let booklog = {} // 本当は複数形のが望ましいが、簡略化のため単数系にする

app.use(express.json())

app.post(`/booklog`, (req, res) => {
  booklog = req.body
  if (!(booklog.name && booklog.text)) {
    return res.json({
      "ok": false,
      "error": "invalid parameter"
    })
  }
  res.json({
    "ok": true,
    "booklog": booklog
  })
})

app.get(`/booklog`, (req, res) => {
  res.json({
    "ok": true,
    "booklog": [
      booklog
    ]
  })
})

app.listen(port, () => {
  console.log(` App Listening at http://localhost:${port}`)
})
