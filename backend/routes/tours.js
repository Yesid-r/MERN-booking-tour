import  express  from "express";
import { createTour, deleteTour, findAllTour, getFeaturedTour, getTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";
import { verifAdmin } from "../utils/verifyToken.js";
const router = express.Router()

//create new tour

router.post('/', verifAdmin, createTour)

router.put('/:id', verifAdmin, updateTour)

router.delete('/:id', verifAdmin, deleteTour)

router.get('/:id', getTour)

router.get('/', findAllTour)

//get tour by search

router.get('/search/getTourBySearch', getTourBySearch )

router.get('/search/getFeaturedTour', getFeaturedTour )

router.get('/search/getTourCount', getTourCount)



export default router