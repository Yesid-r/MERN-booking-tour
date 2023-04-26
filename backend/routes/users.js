import express from 'express'
import { createUser, deleteUser, findAllUser, getUser, updateUser } from '../controllers/userController.js'
const router = express.Router()

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.get('/:id', getUser)

router.get('/', findAllUser)

//get tour by search

//router.get('/search/getTourBySearch', getUserBySearch )


//router.get('/search/getTourCount', getTourCount)



export default router