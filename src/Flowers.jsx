const Girasoles = ({ leftPos, dim }) => {
	return (
		<div
			className='girasol'
			style={{
				left: `${leftPos}vw`,
				height: `${dim}vmin`,
				width: `${dim}vmin`,
				zIndex: `100 - ${dim}`,
			}}
		>
			<div className='girasol__hoja--left'></div>
			<div className='girasol__hoja--right'></div>
			<div className='girasol__tallo'></div>
			<div className='girasol__cabeshita'></div>
			<div className='girasol__pedal--1'></div>
			<div className='girasol__pedal--2'></div>
			<div className='girasol__pedal--3'></div>
			<div className='girasol__pedal--4'></div>
			<div className='girasol__pedal--5'></div>
			<div className='girasol__pedal--6'></div>
			<div className='girasol__pedal--7'></div>
			<div className='girasol__pedal--8'></div>
			<div className='girasol__pedal--9'></div>
			<div className='girasol__pedal--10'></div>
			<div className='girasol__pedal--11'></div>
			<div className='girasol__pedal--12'></div>
		</div>
	);
};

export default Girasoles;
