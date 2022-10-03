import { useState } from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext()
	const [title, setTitle] = useState("");
	const [reps, setReps] = useState("");
	const [load, setLoad] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const workout = { title, load, reps };

		const res = await fetch("api/workouts/add-workout", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();

		if (!res.ok) setError(data.error);

		if (res.ok) {
			setTitle("");
			setLoad("");
			setReps("");
			setError(null);
			dispatch({type:'CREATE_WORKOUT', payload: data});
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a New Workout</h3>
			<label>Exercise Title:</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<label>Load (in kg)</label>
			<input
				type="number"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>
			<label>Reps</label>
			<input
				type="number"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>
			<button>Add Exercise</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default WorkoutForm;
