function youtubeVideos() {
	const videos = document.querySelectorAll('[data-youtube-video]');
	const deletedLength = 'https://youtu.be/'.length;

	if (!videos.length) return;

	videos.forEach(video => {
		const videoHref = video.dataset.youtubeVideo;
		const videoId = videoHref.substring(deletedLength, videoHref.length);
		const videoUrl = generateUrl(videoId);
		const vedioIframe = createIframe(videoId, videoUrl);
		gereratePoster(video, videoId);
		startVideo(video, vedioIframe);
	});

	function gereratePoster(video, id) {
		const img = video.querySelector('.video-image');
		const youtubeImgSrc = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

		if (img) {
			img.setAttribute('src', youtubeImgSrc);
		} else {
			console.error('The img tag with the video-image class was not found');
		}
	}

	function generateUrl(id) {
		let query = '?rel=0&showinfo=0&autoplay=1';

		return 'https://www.youtube.com/embed/' + id + query;
	}

	function createIframe(id, url) {
		const iframe = document.createElement('iframe');

		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'autoplay');
		iframe.setAttribute('src', url);
		iframe.classList.add('video-media');

		return iframe;
	}

	function startVideo(video, iframe) {
		const button = video.querySelector('button');
		if (button) {
			button.addEventListener('click', function (e) {
				e.preventDefault();
				video.querySelector('img').remove();
				video.appendChild(iframe);
				this.remove();
			});
		}
	}
}

youtubeVideos();
