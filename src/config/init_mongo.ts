import { connect } from 'mongoose'

const dbConnect = async () => {
  const DB_URI = <string>process.env.DB_URI_LOCAL
  await connect(DB_URI)
}

dbConnect()
  .then(() => {
    console.log('Db Connected')
  })
  .catch(() => {
    console.log('DB Not connected')
  })
