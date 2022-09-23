import mongoose from "mongoose";
import Workout from '../models/workout_model.js';
// GET workout list
export const displayWorkoutList = async (req, res) => {
   const workout = await Workout.find();
	res.status(200).json({ title: 'Workout List', workout });
}

// GET workout
export const displayWorkout = async (req, res) => {
   const { id } = req.params
   if(!mongoose.Types.ObjectId.isValid(id)) throw res.status(404).json({error: 'Workout not found'})
   const workout = await Workout.findById(id);
   if(!workout) throw res.status(404).json({ error: 'Workout not found' });
   res.status(200).json({ title: 'Workout' , workout });
}

// GET||CREATE workout
export const createWorkout = (req, res) => {
	res.status(200).json({ title: 'Create Workout' });
}

export const createWorkoutLogic = async (req, res) => {
	const { title, reps, load } = req.body;
   try {
      const workout = await Workout.create({title, reps, load});
      res.status(200).json({ title: 'Create Workout', workout });
   } catch (error) {
      res.json({  title: 'Create Workout', error: error.message });
      
   }
}

// UPDATE workout
export const updateWorkout = (req, res) => {
   res.status(200).json({ title: 'Update workout' });
}

// DELETE workout
export const deleteWorkout = (req, res) => {
   res.status(200).json({ title: 'Delete workout' });
}