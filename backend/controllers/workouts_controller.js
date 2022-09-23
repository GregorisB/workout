import Workout from '../models/workout_model.js';
// GET workout list
export function displayWorkoutList(req, res) {
	res.json({ title: 'Workouts list' });
}

// GET workout
export function displayWorkout(req, res) {
	res.json({ title: 'Workout' });
}

// GET||CREATE workout
export async function createWorkout(req, res) {
   const { title, reps, load } = req.body;
   try {
      const workout = await Workout.create({title, reps, load});
      res.json({ title: workout });
   } catch (error) {
      res.json({  error: error.message });
      
   }
}

export function createWorkoutLogic(req, res) {
	res.json({ title: 'POST a workout' });
}

// UPDATE workout
export function updateWorkout(req, res) {
   res.json({ title: 'Update workout' });
}

// DELETE workout
export function deleteWorkout(req, res) {
   res.json({ title: 'Delete workout' });
}