import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
	const [workouts, setWorkouts] = useState(null);

	useEffect(() => {
		const fetchWorkouts = async () => {
			const res = await fetch("/api/workouts");
			const data = await res.json();

			if (res.ok) {
				setWorkouts(data);
			}
		};
		fetchWorkouts();
	}, []);
	console.log(workouts);
	return (
		<div className="home">
			<h2>Home</h2>
			<div className="workouts">
				{workouts &&
					workouts.map((workout) => {
						return (
							<WorkoutDetails
								key={workout._id}
								workout={workout}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Home;
