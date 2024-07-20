export function updateTime() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, 0);
	const minute = String(now.getMinutes()).padStart(2, 0);
	const second = String(now.getSeconds()).padStart(2, 0);

	const currentTime = `${hours}:${minute}:${second}`;

	return currentTime;
}