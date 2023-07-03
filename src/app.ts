import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes'
import './database/init_mongo'
// import './database/init_regis'

const app = express()

if (process.env.NODE_ENV === 'development') {
}
app.use(morgan('dev'))

app.use(cors())
app.use(express.json())

app.use('/api/v1', router)

export default app
