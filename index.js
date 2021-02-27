const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const landing = document.querySelector('.landing');
const world = document.querySelector('.world');
let stack = document.querySelector('.stack');
let tools = document.querySelectorAll('[data-type="tool"]');
let currentTool = '';
let currentMetarial = '';
let pixel;
const initializeWorld = () => {
	const matrixWorld = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
		[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
		[6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
		[6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
		[6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
		[6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
		[6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
		[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
	];

	const addMetrialToPixel = (num, pixel) => {
		switch (num) {
			case 0:
				pixel.classList.add('sky');
				break;
			case 1:
				pixel.classList.add('cloud');
				break;
			case 2:
				pixel.classList.add('leaf');
				break;
			case 3:
				pixel.classList.add('trunk');
				break;
			case 4:
				pixel.classList.add('grass');
				break;
			case 5:
				pixel.classList.add('dirt');
				break;
			case 6:
				pixel.classList.add('rock');
				break;
		}
	};

	let col = document.createElement('div');
	world.appendChild(col);
	col.classList.add('.col');
	for (let i = 0; i < matrixWorld[i].length; i++) {
		for (let j = 0; j < matrixWorld.length; j++) {
			pixel = document.createElement('div');
			pixel.setAttribute('data-type', 'pixel');
			addMetrialToPixel(matrixWorld[j][i], pixel);
			col.appendChild(pixel);
		}
		col = document.createElement('div');
		world.appendChild(col);
		col.classList.add('.col');
	}
};

const gameSteps = () => {
	startBtn.addEventListener('click', () => {
		landing.classList.add('hidden');
		world.classList.remove('hidden');
		initializeWorld();
	});

	resetBtn.addEventListener('click', () => {
		window.location.reload();
	});

	tools.forEach((tool) => {
		tool.addEventListener('click', (e) => {
			currentTool = e.target.getAttribute('class');
			e.target.classList.add('pick-tool');
			console.log(e.target);
		});
	});

	const changePixelMetirial = (e) => {
		//console.log(e.target.getAttribute('class'));
		if (currentMetarial != '') {
			e.target.setAttribute('class', '');
			e.target.classList.add(currentMetarial);
			stack.classList.remove(currentMetarial);
			currentMetarial = '';
			return;
		}
		if (currentTool == '') {
			return;
		}
		console.log(currentTool);

		let metrial = e.target.getAttribute('class');
		let tool = document.querySelector(`.sidebar .${currentTool}`);
		if (currentTool === 'axe' && (metrial === 'leaf' || metrial == 'trunk')) {
			currentMetarial = metrial;
		} else if (currentTool === 'pickaxe' && metrial === 'rock') {
			currentMetarial = metrial;
		} else if (currentTool === 'shovel' && metrial === 'dirt') {
			currentMetarial = metrial;
		} else {
			console.log(document.querySelector(`.${currentTool}`));
			tool.classList.add('change-color_alert');
			setTimeout(() => {
				tool.classList.remove('change-color_alert');
			}, 6000);

			return;
		}
		if (currentMetarial !== '') {
			stack.classList.add(currentMetarial);
			e.target.classList.remove(currentMetarial);
			e.target.classList.add('sky');
			tool.classList.remove('pick-tool');
		}
	};
	world.addEventListener('click', changePixelMetirial);
};

gameSteps();
