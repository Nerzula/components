const menuLinks = document.querySelectorAll('.left-menu a');
const mapLinks = document.querySelectorAll('.map a');
const info = document.querySelector('.info');

const requestData = id => {
	fetch('data.json')
		.then(responce => {
			return responce.json();
		})
		.then(data => {
			info.innerHTML = `
				<h2>${data[id - 1].district}</h2>
				<p>${data[id - 1].info}</p>
			`;
		});
};

menuLinks.forEach(menuLink => {
	menuLink.addEventListener('mouseenter', function (e) {
		let target = e.target;
		let selfClass = target.getAttribute('href');
		let color = target.dataset.color;
		let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
		let currentPolygons = currentElement.querySelectorAll('polygon');
		let currentPaths = currentElement.querySelectorAll('path');

		if (currentPolygons.length) {
			currentPolygons.forEach(
				currentPolygon =>
					(currentPolygon.style.cssText = `fill: ${color}; stroke-width: 2px;`)
			);
		}

		if (currentPaths.length) {
			currentPaths.forEach(
				currentPath =>
					(currentPath.style.cssText = `fill: ${color}; stroke-width: 2px;`)
			);
		}

		target.classList.add('active');
	});

	menuLink.addEventListener('mouseleave', function (e) {
		let target = e.target;
		let selfClass = target.getAttribute('href');
		let color = target.dataset.color;
		let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
		let currentPolygons = currentElement.querySelectorAll('polygon');
		let currentPaths = currentElement.querySelectorAll('path');

		if (currentPolygons.length) {
			currentPolygons.forEach(
				currentPolygon => (currentPolygon.style.cssText = ``)
			);
		}

		if (currentPaths.length) {
			currentPaths.forEach(currentPath => (currentPath.style.cssText = ``));
		}

		target.classList.remove('active');
	});
});

mapLinks.forEach(mapLink => {
	mapLink.addEventListener('mouseenter', function (e) {
		let target = e.target;
		let selfClass = target.getAttribute('href');
		let color = target.dataset.color;
		let currentElement = document.querySelector(
			`.left-menu a[href="${selfClass}"]`
		);
		let currentPolygons = target.querySelectorAll('polygon');
		let currentPaths = target.querySelectorAll('path');

		if (currentPolygons.length) {
			currentPolygons.forEach(
				currentPolygon =>
					(currentPolygon.style.cssText = `fill: ${color}; stroke-width: 2px;`)
			);
		}

		if (currentPaths.length) {
			currentPaths.forEach(
				currentPath =>
					(currentPath.style.cssText = `fill: ${color}; stroke-width: 2px;`)
			);
		}

		currentElement.classList.add('active');
	});
});

mapLinks.forEach(mapLink => {
	mapLink.addEventListener('mouseleave', function (e) {
		let target = e.target;
		let selfClass = target.getAttribute('href');
		let currentElement = document.querySelector(
			`.left-menu a[href="${selfClass}"]`
		);
		let currentPolygons = target.querySelectorAll('polygon');
		let currentPaths = target.querySelectorAll('path');

		if (currentPolygons.length) {
			currentPolygons.forEach(
				currentPolygon => (currentPolygon.style.cssText = ``)
			);
		}

		if (currentPaths.length) {
			currentPaths.forEach(currentPath => (currentPath.style.cssText = ``));
		}

		currentElement.classList.remove('active');
	});

	mapLink.addEventListener('click', e => {
		e.preventDefault();
		let target = e.currentTarget;
		let selfClass = target.getAttribute('href');
		let currentElement = document.querySelector(
			`.left-menu a[href="${selfClass}"]`
		);
		let id = parseInt(currentElement.dataset.id);
		requestData(id);
	});
});
