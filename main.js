const express = require("express")
const bodyParser = require("body-parser");

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile("public/index.html", {
    root: __dirname
  })
})

app.use(express.static("public"))
app.listen(port, () => console.log(`Running on http://localhost:${port}/`))