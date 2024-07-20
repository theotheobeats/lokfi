import { useEffect, useState } from "react";
import { updateTime } from "../lib/helper";

const Clock = () => {
	const [time, setTime] = useState(updateTime);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(updateTime());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="backdrop-blur-xl bg-white/5 flex p-4 rounded-2xl shadow-xl">
			<div className="text-[4rem] font-bold text-white pr-8 pl-6 pb-2">
				{time}
			</div>
		</div>
	);
};

export default Clock;
