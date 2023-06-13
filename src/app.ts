import 'dotenv/config'
import express, { Request, Response } from 'express'
import createError, { HttpError } from 'http-errors'
import morgan from 'morgan'
import cors from 'cors'
import { router } from './routes'

const app = express()

// settings
app.set('port', 3000 || process.env.PORT)

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// routes
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello from express')
})
app.use(router)

// error handler
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

export { app }
