import { BrowserRouter, Routes, Router } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="pages">
					<Routes>
						<Router></Router>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
