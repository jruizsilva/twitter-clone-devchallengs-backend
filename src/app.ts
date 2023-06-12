import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import createError, { HttpError } from 'http-errors'
import morgan from 'morgan'
import cors from 'cors'
import { router } from './routes'
import { dbConnect } from './config/mongo'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', async (_: Request, res: Response) => {
  res.send('Hello from express')
})
app.use(router)

app.use((req, res, next) => {
  next(createError.NotFound())
})

app.use((err: HttpError, _: Request, res: Response) => {
  res.status(err.status || 500)
  res.json({
    err: { status: err.status || 500 },
    message: err.message
  })
})

const PORT = process.env.PORT || 3001
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
