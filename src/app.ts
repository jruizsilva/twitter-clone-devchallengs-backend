import dotenv from 'dotenv'
dotenv.config()
import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes'
import './database/init_mongo'
// import './database/init_regis'

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

app.use('/api/v1', router)
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Ruta ${req.originalUrl} no encontrada`
  // })
  const err = {
    message: `Ruta ${req.originalUrl} no encontrada`,
    status: 'fail',
    statusCode: 404
  }
  next(err)
})

app.use(
  (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'Error'
    err.message = err.message || 'Error'
    res.status(err.statusCode).json({
      status: err.status,
      statusCode: err.statusCode,
      message: err.message
    })
  }
)

export default app
