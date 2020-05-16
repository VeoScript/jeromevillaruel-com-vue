const express = require('express')

const app = express()

app.use(express.static(__dirname + "/dist/"))
app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + "/dist/index.html")
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running in port: ${port}`))