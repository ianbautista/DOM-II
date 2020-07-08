const block = document.querySelectorAll(".block");
let min = 0;

block.forEach((item, i) => {
	item.onclick = function () {
		item.style.order = --min;
		layout();
	};

	item.x = 0; 
	item.style.order = i;

	item.onmousedown = function () {
		clearInterval(item.interval);
		item.interval = setInterval(function () {
			if (item.getBoundingClientRect().right >= window.innerWidth) {
				clearInterval(item.interval);
			} itemse {
				item.x += 1;
				requestAnimationFrame(function () {
					item.style.transform = `translateX(${item.x}px)`;
				});
			}
		}, 10);
	};

	item.onmouseup = function () {
		clearInterval(item.interval);
		layout();
	};
});

var nodes = block;
var boxes = [];

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];

	// Initialize transforms on node
	TweenLite.set(node, { x: 0 });

	boxes[i] = {
		transform: node._gsTransform,
		x: node.x,
		y: node.offsetTop,
		node,
	};
}

function layout() {
	for (var i = 0; i < nodes.length; i++) {
		var box = boxes[i];

		var lastX = box.x;
		var lastY = box.y;

		box.x = box.node.offsetLeft;
		box.y = box.node.offsetTop;

		if (lastX === box.x && lastY === box.y) continue;

		var x = nodes[i].x;
		var y = box.transform.y + lastY - box.y;

		TweenLite.fromTo(box.node, 0.5, { x, y }, { x: 0, y: 0, ease: Power1.easeInOut });
		nodes[i].x = 0;
	}
}
