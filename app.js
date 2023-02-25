import express from 'express'
import {} from 'dotenv/config'

import { mongoDbConnection } from './src/config/mongodb'
import usersRouter from './src/routes/usersRouter'
import postsRouter from './src/routes/postsRouter'
// import postsRouter from './src/routes/postsRouter'

const app = express()

app.use(express.json())

// Aca se activa nuestro enrutador de users
app.use(usersRouter)
app.use(postsRouter)

// Aqui invocamos la conexion con la base de datos (mongo)
mongoDbConnection()

app.use((request, response) => {
  response
    .status(200)
    .send({ 
      message: 'Bienvenidos a la API RESTful de la Generacion 23a' 
    })
})

//=== SERVIDOR ====//
app.listen(3000, () => {
  console.log('servidor ejecutando en el puerto 3000')
})
