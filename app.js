import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

const app = express()

app.use(helmet())
app.use(morgan('dev'))

export default app;