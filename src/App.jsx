import { useState } from "react";
import Girasoles from "./Flowers";

const App = () => {
	const numeroDeFlores = 2;
	const [flores, setFlores] = useState([]);

	const getRandomArbitrary = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	const crearFlor = () => {
		const dim = getRandomArbitrary(30, 80);
		const leftPos = getRandomArbitrary(0, 100);

		return {
			dim,
			leftPos,
		};
	};

	const crearFlores = () => {
		const nuevasFlores = [...Array(numeroDeFlores)].map(() => crearFlor());
		setFlores([...flores, ...nuevasFlores]);
	};

	return (
		<div className='__almeyda'>
			<div
				className='fixed top-0 left-0 w-full h-full bg-transparent opacity-0 z-50'
				onClick={() => {
					crearFlores();
				}}
			/>
			<h1>
				Toma bonita!
				<br />
				<small>(click para reproducirnos, pero las flores xd)</small>
			</h1>
			<div>
				<Girasoles />
				{flores.map((flower, index) => (
					<Girasoles key={index} {...flower} />
				))}
			</div>
		</div>
	);
};

export default App;
