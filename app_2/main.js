const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (_, res) => {
  res.send({
    data: 'hello from BE 2'
  })
})

app.listen(3232, () => {
  console.log(`listening to port http://localhost:3232`)
})
