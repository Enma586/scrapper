import {createServer} from 'http'
import app from './app.js'
import {env, connectDB} from './src/config/index.js'

connectDB()


const server = createServer(app)
server.listen(env.PORT, () => {
    console.log('Server is running on port', env.PORT)
})