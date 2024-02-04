function youtubeVideos() {
	const videos = document.querySelectorAll('.video-youtube');

	if (!videos.length) return;

	videos.forEach(video => {
		setupVideo(video);
	});

	function setupVideo(video) {
		const link = video.querySelector('.video-youtube__link');
		const media = video.querySelector('.video-youtube__media');
		const button = video.querySelector('.video-youtube__button');
		const id = parseMediaURL(media);

		video.addEventListener('click', () => {
			let iframe = createIframe(id);

			link.remove();
			button.remove();
			video.appendChild(iframe);
		});

		link.removeAttribute('href');
		video.classList.add('video--enabled');
	}

	function parseMediaURL(media) {
		let regexp =
			/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
		let url = media.src;
		let match = url.match(regexp);

		return match[1];
	}

	function createIframe(id) {
		let iframe = document.createElement('iframe');

		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'autoplay');
		iframe.setAttribute('src', generateURL(id));
		iframe.classList.add('video-youtube__media');

		return iframe;
	}

	function generateURL(id) {
		let query = '?rel=0&showinfo=0&autoplay=1';

		return 'https://www.youtube.com/embed/' + id + query;
	}
}

youtubeVideos();
