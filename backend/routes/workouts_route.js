import { Router } from 'express';
var router = Router();

import { displayWorkoutList, createWorkout, createWorkoutLogic, displayWorkout, updateWorkout, deleteWorkout } from '../controllers/workouts_controller.js';

// GET workout list
router.get('/', displayWorkoutList);

// GET workout
// POST workout
router.route('/add-workout')
   .get(createWorkout) 
   .post(createWorkoutLogic);

// GET workout
router.get('/workoutId', displayWorkout);

// UPDATE workout
router.patch('/workoutId', updateWorkout);

// DELETE workout
router.delete('/workoutId', deleteWorkout);

export default router;