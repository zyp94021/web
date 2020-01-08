import { promisify } from 'util'
import { createClient } from 'redis'
const client = createClient()
export const setAsync = promisify(client.set).bind(client)
export const getAsync = promisify(client.get).bind(client)
