document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.page');
    const svgIconWelcomeText = page.querySelector(
        'body > svg > symbol#icon--welcome-text'
    );

    if (
        page.classList.contains('page--gallery') ||
        page.classList.contains('page--feedback')
    ) {
        svgIconWelcomeText.setAttribute(
            'preserveAspectRatio',
            'xMidYMid slice'
        );
    }
});
