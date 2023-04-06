/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

// set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 179; // number of frames in the animation (0 based index)

// loads frames from blender-assets folder on given frame count
const loadFrames = frameCount => {
	const getFrameSources = index => `./blender-assets/${(index + 1).toString()}.webp`;

	return [...Array(frameCount).keys()].map((_, index) => {
		const img = new Image();
		img.src = getFrameSources(index);

		return img;
	});
};

// load frames
const frames = loadFrames(frameCount);

// gsap animation
const frameTrack = { ballFrameCursor: 0 };
gsap.to(frameTrack, {
	//able to access the properties of the frameTrack object
	ballFrameCursor: frameCount - 1, // this is defining the end of the animation on the ballframecursor property of the frameTrack object
	snap: 'ballFrameCursor', // snap to the nearest whole number from the var frame track
	ease: 'none',
	scrollTrigger: {
		scrub: true,
		pin: '#canvas',
		end: '500%'
		// markers: true
	},
	onUpdate: render
});

// render function
function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let img = frames[frameTrack.ballFrameCursor];

	function drawImageScaled(img, ctx) {
		var canvas = ctx.canvas;
		var hRatio = canvas.width / img.width;
		var vRatio = canvas.height / img.height;
		var ratio = Math.max(hRatio, vRatio);
		var centerShift_x = (canvas.width - img.width * ratio) / 2;
		var centerShift_y = (canvas.height - img.height * ratio) / 2;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
	}
	drawImageScaled(img, ctx);
}

frames[0].onload = render;
