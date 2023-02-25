import Post from '../models/Post'
import User from '../models/User'

// GET /users - Index o Listar todos los Usuarios
export const indexPosts = async (request, response) => {
  try {
    const posts = await Post.find({})

    response.status(200).send(posts)
  } catch(error) {
    console.error(error)
  }
}

// // POST /users - Crear Nuevo Usuario
export const createPost = async (request, response) => {
  try {
    // obtenemos los datos de la solicitud
    const { title, content, user } = request.body
    // preparamos los datos que vienen del cliente en nuestro modelo
    const newPost = new Post({
      title,
      content,
      user
    })
    // salvamos en nuestra base de datos
    await newPost.save()
    // enviamos la respuesta al cliente
    response.status(201).send(newPost)

  } catch(error) {
    console.error(error)
  }
}

// // GET /users/:id - Leer datos de Usuario dado su ID
export const readPost= async (request, response) => {
  try {
    const { id } = request.params // se obtiene de la url de la peticion
    const postNew = await Post.findById(id)

    if (!postNew) {
      response.status(404).send({ 
        error: 'No se encontro ningún registro en la base de datos'
      })
    }

    response.status(200).send(postNew)
  } catch(error) {
    console.log(error)
  }
}

// // PUT/PATCH /users/:id - Actualizar Usuario dado su ID
export const updatePost = async (request, response) => {
  try {
    const { id } = request.params
    const bodyParams = { ...request.body }

    const updatedPost= await Post.findByIdAndUpdate(id, bodyParams, 
        { new: true })

    response.status(201).send(updatedPost)
  } catch(error) {
    console.log(error)
  }
}

// // DELETE /users/:id - Eliminar Usuario dado su ID
export const deletePost = async (request, response) => {
  try {
    const { id } = request.params
    const deletedPost = await Post.findByIdAndDelete(id)
    
    if (!deletedPost) {
      response.status(404).send({ 
        error: 'No se encontro ningún registro en la base de datos'
      })
    }
    
    response.status(200).send({ message: 'Registro eliminado correctamente'});
  } catch (error) {
    console.log(error)
  }
  

}
