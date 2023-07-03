import { createClient } from 'redis'

const client = createClient()

client.on('ready', () =>
  console.log('Client connected to redis and ready to use')
)

process.on('SIGINT', () => {
  client.quit()
})

client.connect()

export { client }
