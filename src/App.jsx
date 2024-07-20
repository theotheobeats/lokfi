import { CloudSunRain, MusicIcon, PauseCircle, Sun, Timer } from "lucide-react";
import { useRef, useState } from "react";
import Clock from "./components/Clock";

export default function App() {
	const audioRef = useRef(null);
	const rainRef = useRef(null);
	const [isPlay, setIsPlay] = useState(false);
	const [isRain, setIsRain] = useState(false);
	const [isPomodoroActive, setIsPomodoroActive] = useState(false);

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.volume = 0.5;
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

	const playRain = () => {
		if (rainRef.current) {
			rainRef.current.volume = 0.2;
			rainRef.current.play();
			setIsRain(true);
		}
	};

	const pauseRain = () => {
		if (rainRef.current) {
			rainRef.current.play();
			setIsRain(false);
		}
	};

	const togglePomodoro = () => {
		if (isPomodoroActive) {
			setIsPomodoroActive(false);
		} else {
			setIsPomodoroActive(true);
		}
	};

	return (
		<section className="relative w-full h-screen">
			<img
				src="/assets/bg1.jpg"
				className="z-0 fixed w-full h-screen object-cover"
			/>
			<div className="relative flex items-center justify-center w-full h-full z-10">
				<div className="flex-col">
					<Clock />
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

						{isRain ? (
							<CloudSunRain
								className="hover:text-slate-400 cursor-pointer"
								onClick={pauseRain}
							/>
						) : (
							<Sun
								className="hover:text-slate-400 cursor-pointer"
								onClick={playRain}
							/>
						)}

						<Timer
							className="hover:text-slate-400 cursor-pointer"
							onClick={togglePomodoro}
						/>
						<div>
							Pomodoro{" "}
							{isPomodoroActive ? (
								<span className="text-green-300 bg-white rounded-2xl px-2 py-2">
									Active
								</span>
							) : (
								<span className="text-slate-300 bg-white rounded-2xl px-2 py-2">
									Inactive
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
			<audio src="/assets/bgm1.mp3" ref={audioRef} loop />
			<audio src="/assets/rain.mp3" ref={rainRef} loop />
		</section>
	);
}
