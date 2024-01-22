const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/app_1', (_, res) => {
  res.send({
    data: 'hello from BE 1'
  })
})

app.get('/app_1/test', (_, res) => {
  res.send({
    data: 'hello from BE 1 Test'
  })
})


app.listen(3131, () => {
  console.log(`listening to port http://localhost:3131`)
})
