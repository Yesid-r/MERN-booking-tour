import  express  from "express";
import { createTour, deleteTour, findAllTour, getTour, updateTour } from "../controllers/tourController.js";

const router = express.Router()

//create new tour

router.post('/', createTour)

router.put('/:id', updateTour)

router.delete('/:id', deleteTour)

router.get('/:id', getTour)

router.get('/', findAllTour)

export default router