import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
	const audioRef = useRef(null);
	const [muted, setMuted] = useState(false);

	const pause = () => {
		if (audioRef.current.paused) {
			audioRef.current.play();
			audioRef.current.volume = 0.2;
			setMuted(false);
		} else {
			audioRef.current.pause();
			setMuted(true);
		}
	};

	// ni bien se monta el componente, reproducimos el audio
	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.play();
			// volumen al 50%
			audioRef.current.volume = 0.2;
		}
	}, []);

	return (
		<>
			<audio ref={audioRef}>
				<source src='audio/musicapecausa.mp3' type='audio/mpeg' />
			</audio>
			<div className='w-full flex justify-between fixed bottom-1 px-1.5 items-end z-[200]'>
				<h2 className='text md:text-xl font-medium text-white'>
					Powered by un feo
				</h2>
				<div className='mr-2 mb-2'>
					<button
						className='w-12 h-12 bg-white shadow-lg rounded-full flex justify-center items-center'
						onClick={() => {
							pause();
						}}
					>
						{muted ? <VolumeX /> : <Volume2 />}
					</button>
				</div>
			</div>
		</>
	);
};

export default Footer;
