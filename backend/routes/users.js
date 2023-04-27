import express from 'express'
import { createUser, deleteUser, findAllUser, getUser, updateUser } from '../controllers/userController.js'
const router = express.Router()
import { verifAdmin, verifyUser   } from '../utils/verifyToken.js'

router.post('/', verifyUser, createUser)

router.put('/:id', verifyUser, updateUser)

router.delete('/:id', verifyUser, deleteUser)

router.get('/:id', verifyUser, getUser)

router.get('/', verifAdmin, findAllUser)

//get tour by search

//router.get('/search/getTourBySearch', getUserBySearch )


//router.get('/search/getTourCount', getTourCount)



export default router