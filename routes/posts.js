import { Router } from 'express'
import * as controller from '../controllers/posts.js'

const router = Router()

router.get('/posts', controller.getPosts)
router.get('/posts/:id', controller.getPost)
router.get('/posts', controller.createPost)
router.get('/posts/:id', controller.updatePost)
router.get('/posts/:id', controller.deletePost)

export default router