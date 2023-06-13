import dotenv from 'dotenv'
dotenv.config()

import { app } from './app'
import './config/init_mongo'
import './config/init_regis'

function init() {
  app.listen(app.get('port'))
  console.log('Server on port', 3000)
}

init()
