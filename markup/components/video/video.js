const supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
    const video = document.querySelector('video.video__movie-clip');
    const videoControls = document.querySelector('.video__controls');

    // Hide the default controls
    video.controls = false;

    // Display the user defined video controls
    videoControls.style.display = 'grid';
}
