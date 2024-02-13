function progressScrollSection() {
	// get sections
	const sections = document.querySelectorAll('[data-section]');
	// get links
	const links = document.querySelectorAll('[data-section-links] a');
	// get a container with links
	const nav = document.querySelector('[data-section-links]');

	// Checking the availability of elements on the page
	if (sections.length && links.length) {
		// Creating an observer and indicate to him the settings parameters
		const observer = new IntersectionObserver(
			//get elements for which we need observation
			entries => {
				// We sort out the elements behind which we observe and check whether the element is crossed or not
				entries.forEach(entrie => {
					if (entrie.isIntersecting) {
						// If the element was crossed, then we run through the links and get ID from the attribute HREF
						links.forEach(link => {
							const linkHref = link.getAttribute('href').replace('#', '');
							// Then we compare the ID link and ID by the crossed Observation Office
							// Next, give Active to the link that the ID coincide with the section
							if (linkHref === entrie.target.id) {
								link.classList.add('active');
							} else {
								link.classList.remove('active');
							}
						});
					}
				});
			},
			{ threshold: 0.9 }
		);
		sections.forEach(section => {
			observer.observe(section);
		});

		nav.addEventListener('click', function (e) {
			const target = e.target;
			if (target.closest('a')) {
				e.preventDefault();
				const sectionId = target.getAttribute('href').replace('#', '');

				window.scrollTo({
					top: document.getElementById(sectionId).offsetTop,
					behavior: 'smooth',
				});
			}
		});
	}
}

progressScrollSection();

function progressAnimateBar() {
	// get a container progress bar
	const progress = document.querySelector('[data-progressbar]');
	// get the height of the entire document
	const documentHeight = document.documentElement.scrollHeight;
	// get a user screen height
	const viewportHeight = document.documentElement.clientHeight;

	// Checking if progress bar exists, then we start a scroll event with calculations for the progress of the bar
	if (progress) {
		window.addEventListener('scroll', e => {
			// get the value of the scroll from the top of the page
			let scrollValue = document.documentElement.scrollTop;
			// calculate the difference between the height of the site and the height of the user screen
			const height = documentHeight - viewportHeight;
			// get the percentage of scrolling
			const scrollPrecent = (scrollValue / height) * 100;
			// Set styles progressbar
			progress.style.width = scrollPrecent + '%';
		});
	}
}
progressAnimateBar();
