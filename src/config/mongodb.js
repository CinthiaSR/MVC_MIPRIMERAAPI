
import mongoose from 'mongoose'
import { 
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOSTNAME } from './environment'
// const DB_NAME='BlogApp'

console.log(DB_HOSTNAME)

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
export const mongoDbConnection=async()=>{
    try {
        await mongoose.set('strictQuery', false).connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        console.log('conexion exitosa')
    } catch (error) {
        console.error('fallo conexion')
        process.exit(1)
    }
}


