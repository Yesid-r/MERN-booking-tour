import  express  from "express";
import { createTour, deleteTour, findAllTour, getFeaturedTour, getTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";

const router = express.Router()

//create new tour

router.post('/', createTour)

router.put('/:id', updateTour)

router.delete('/:id', deleteTour)

router.get('/:id', getTour)

router.get('/', findAllTour)

//get tour by search

router.get('/search/getTourBySearch', getTourBySearch )

router.get('/search/getFeaturedTour', getFeaturedTour )

router.get('/search/getTourCount', getTourCount)



export default router