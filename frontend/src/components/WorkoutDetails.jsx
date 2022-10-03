import React from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout: { _id, title, load, reps, createdAt } }) => {
	const { dispatch } = useWorkoutsContext();

	const handleClick = async (e) => {
		const res = await fetch(`/api/workouts/${_id}`, {
			method: 'DELETE',
		});
		const data = res.json();

		if (res.ok) {
			dispatch({ type: 'DELETE_WORKOUT', payload: data });
			e.target.parentNode.style.display = 'none';
		}
	};

	return (
		<div className="workout-details">
			<h4>{title}</h4>
			<p>
				<strong>Load (kg): </strong>
				{load}
			</p>
			<p>
				<strong>Reps: </strong>
				{reps}
			</p>
			<p>{formatDistanceToNow(new Date(createdAt), { addSuffix:true })}</p>
			<span className='material-symbols-outlined' onClick={handleClick}>delete</span>
		</div>
	);
};

export default WorkoutDetails;
