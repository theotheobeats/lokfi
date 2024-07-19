import { MusicIcon, PauseCircle, Timer } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function updateTime() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, 0);
	const minute = String(now.getMinutes()).padStart(2, 0);
	const second = String(now.getSeconds()).padStart(2, 0);

	const currentTime = `${hours}:${minute}:${second}`;

	return currentTime;
}

export default function App() {
	const [time, setTime] = useState(updateTime);
	const audioRef = useRef(null);
	const [isPlay, setIsPlay] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(updateTime());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.play();
			setIsPlay(true);
		}
	};

	const pauseAudio = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			setIsPlay(false);
		}
	};

	return (
		<section className="relative w-full h-screen">
			<img
				src="/assets/bg2.jpg"
				className="z-0 fixed w-full h-screen object-cover"
			/>
			<div className="relative flex items-center justify-center w-full h-full z-10">
				<div className="flex-col">
					<div className="backdrop-blur-xl bg-white/5 flex p-4 rounded-2xl shadow-xl">
						<div className="text-[4rem] font-bold text-white pr-8 pl-6 pb-2">
							{time}
						</div>
					</div>
					<div className="flex items-center justify-center m-4 text-white gap-4">
						{isPlay ? (
							<PauseCircle
								className="hover:text-slate-400 cursor-pointer"
								onClick={pauseAudio}
							/>
						) : (
							<MusicIcon
								className="hover:text-slate-400 cursor-pointer"
								onClick={playAudio}
							/>
						)}

						<Timer className="hover:text-slate-400 cursor-pointer" />
						<div>
							Pomodoro <span className="text-green-300 bg-white rounded-2xl px-2 py-2">Active</span>
						</div>
					</div>
				</div>
			</div>
			<audio src="/assets/bgm1.mp3" ref={audioRef} />
		</section>
	);
}
