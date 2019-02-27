const supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
    const video = document.querySelector('video.video__movie-clip');
    const videoControls = document.querySelector('.video__controls');

    // Hide the default controls
    if (video) {
        video.controls = false;
    }

    // Display the user defined video controls
    if (videoControls) {
        videoControls.style.display = 'grid';
    }
}
