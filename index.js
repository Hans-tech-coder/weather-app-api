/* #STEPS IN INSTALLING EXPRESS\
mkdir myapp
cd myapp
create repository

npm init
NOTE: will create package.json

add .gitignore 

npm install express

API KEY: f86aa67b2119b865446c94ac3bf2ae3b

*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})