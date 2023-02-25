import { Router } from "express";
import {indexPosts, createPost, readPost,updatePost, deletePost} from "../controllers/postsController";

const router = Router()

router.route('/posts')
  .get(indexPosts)
  .post(createPost)

router.route('/posts/:id')
  .get(readPost)
  .patch(updatePost)
  .delete(deletePost)
  


export default router
