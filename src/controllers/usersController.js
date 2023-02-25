import User from '../models/User'

// GET /users - Index o Listar todos los Usuarios
export const indexUsers = async (request, response) => {
  try {
    const users = await User.find({})

    response.status(200).send(users)
  } catch(error) {
    console.error(error)
  }
}

// POST /users - Crear Nuevo Usuario
export const createUser = async (request, response) => {
  try {
    // obtenemos los datos de la solicitud
    const { name, email, password } = request.body
    // preparamos los datos que vienen del cliente en nuestro modelo
    const newUser = new User({
      name,
      email,
      password
    })
    // salvamos en nuestra base de datos
    await newUser.save()
    // enviamos la respuesta al cliente
    response.status(201).send(newUser)

  } catch(error) {
    console.error(error)
  }
}

// GET /users/:id - Leer datos de Usuario dado su ID
export const readUser = async (request, response) => {
  try {
    const { id } = request.params // se obtiene de la url de la peticion
    const user = await User.findById(id)

    if (!user) {
      response.status(404).send({ 
        error: 'No se encontro ningún registro en la base de datos'
      })
    }

    response.status(200).send(user)
  } catch(error) {
    console.log(error)
  }
}

// PUT/PATCH /users/:id - Actualizar Usuario dado su ID
export const updateUser = async (request, response) => {
  try {
    const { id } = request.params
    const bodyParams = { ...request.body }

    const updatedUser = await User.findByIdAndUpdate(id, bodyParams, { new: true })

    response.status(201).send(updatedUser)
  } catch(error) {
    console.log(error)
  }
}

// DELETE /users/:id - Eliminar Usuario dado su ID
export const deleteUser = async (request, response) => {
  try {
    const { id } = request.params
    const deletedUser = await User.findByIdAndDelete(id)
    
    if (!deletedUser) {
      response.status(404).send({ 
        error: 'No se encontro ningún registro en la base de datos'
      })
    }
    
    response.status(200).send({ message: 'Registro eliminado correctamente'});
  } catch (error) {
    console.log(error)
  }
  

}
