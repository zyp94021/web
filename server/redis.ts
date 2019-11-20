import { promisify } from 'util'
import redis from 'redis'
const client = redis.createClient()
export const setAsync = promisify(client.set).bind(client)
export const getAsync = promisify(client.get).bind(client)
