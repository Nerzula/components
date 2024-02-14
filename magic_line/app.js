document.addEventListener('DOMContentLoaded', function (e) {
	const navLine = document.querySelector('.nav__line');
	const navItems = document.querySelectorAll('.nav__item');

	navLine.style.width = navItems[0].offsetWidth + 'px';

	navItems.forEach(navItem => {
		navItem.addEventListener('mouseenter', function (e) {
			navLine.style.width = e.currentTarget.offsetWidth + 'px';
			navLine.style.left = e.currentTarget.offsetLeft + 'px';
		});

		navItem.addEventListener('mouseleave', function (e) {
			navLine.style.width = navItems[0] + 'px';
			navLine.style.left = 0 + 'px';
		});
	});
});
