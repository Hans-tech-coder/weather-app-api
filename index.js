/* #STEPS IN INSTALLING EXPRESS\
mkdir myapp
cd myapp
create repository

npm init

npm install express

add .gitignore */

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})