import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import { dbConnect } from './config/mongo'

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log('Running on port', PORT)
  dbConnect()
    .then(() => {
      console.log('Db Connected')
    })
    .catch(() => {
      console.log('DB Not connected')
    })
})
