const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const landing = document.querySelector('.landing');
const world = document.querySelector('.world');

startBtn.addEventListener('click', () => {
	landing.classList.add('hidden');
	world.classList.remove('hidden');
});

resetBtn.addEventListener('click', () => {
	window.location.reload();
});

const initializeGame = () => {
	const matrixWorld = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
	];
	let pixel;
	for (let i = 0; i < matrixWorld.length; i++)
		for (let j = 0; j < matrixWorld[i].length; j++) {
			pixel = document.createElement('div');
			pixel.classList.add('.pixel');
			ddMetrialToPixel(matrixWorld[i][j], pixel);
			world.appendChild(pixel);
		}
};
const addMetrialToPixel = (num, pixel) => {
	switch (num) {
		case 0:
			pixel.classList.add('.sky');
			break;
		case 1:
			pixel.classList.add('.cloud');
			break;
		case 2:
			pixel.classList('.leaf');
			break;
		case 3:
			pixel.classList.add('.trunk');
			break;
		case 4:
			pixel.classList.add('.grass');
			break;
		case 5:
			pixel.classList('dirt');
			break;
		case 6:
			pixel.classList.add('.rock');
			break;
	}
};
