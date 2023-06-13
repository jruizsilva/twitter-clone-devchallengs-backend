import express, { Request, Response } from 'express'
import createHttpError from 'http-errors'
import morgan from 'morgan'
import cors from 'cors'
import { router } from './routes'

const app = express()

// settings
app.set('port', 4000 || process.env.PORT)

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// routes
app.get('/', async (req, res, next) => {
  try {
    throw createHttpError.BadRequest()
    res.send('Hello from express')
  } catch (err) {
    next(err)
  }
})
app.use(router)

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.log('Middleware Error Hadnling')
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Something went wrong'
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  })
})

// app.use((err: any, req: Request, res: Response) => {
//   res.status(err.status || 500)
//   res.json({
//     err: { status: err.status || 500 },
//     message: err.message
//   })
// })

export { app }
