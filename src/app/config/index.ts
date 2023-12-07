import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
    port: process.env.DATABASE_PORT,
    database_URL: process.env.DATABASE_URL,
    default_password: process.env.DEAFULT_PASS,
    bcrypt_salt_rounds: process.env.BYCRYPT_SALT_ROUNDS,
};
