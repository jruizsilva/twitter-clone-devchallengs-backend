import { createClient } from 'redis'

const client = createClient()

client.on('connect', () => console.log('Client connected to redis'))
client.on('ready', () =>
  console.log('Client connected to redis and ready to use')
)
client.on('end', () => console.log('Client disconnected from redis'))
client.on('error', (err: any) => console.log(err))

process.on('SIGINT', () => {
  client.quit()
})

client.connect()

export { client }
