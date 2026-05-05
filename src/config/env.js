import dotenv from 'dotenv'

dotenv.config()

const requiredVars = [
    'PORT',
    'MONGO_URI'
]

const missing = requiredVars.filter(key => !process.env[key])
if (missing.length) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}`)
}

export const env = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    TZ: process.env.TZ || 'America/El_Salvador'
}