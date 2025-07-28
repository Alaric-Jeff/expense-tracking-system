import dotenv from 'dotenv'
import {defineConfig} from 'drizzle-kit'

dotenv.config();

export default defineConfig({
    out: './drizzle',
    schema: './src/models/*.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: String(process.env.DATABASE_URL)
    }
});