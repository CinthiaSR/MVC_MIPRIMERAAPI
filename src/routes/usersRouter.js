import { Router } from "express";
import { 
  indexUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser
 } from "../controllers/usersController";

const router = Router()

router.route('/users')
  .get(indexUsers)
  .post(createUser)

router.route('/users/:id')
  .get(readUser)
  .patch(updateUser)
  .delete(deleteUser)
  


export default router
