const $videoContainer = document.querySelector('.video__container');
const $introVideo = document.querySelector('.intro-video');
const $skipButton = document.querySelector('.skip-intro');
const $playButton = document.querySelector('.video__button');

const hideIntro = () => {
    $introVideo.pause();          
    $introVideo.currentTime = 0;
    $videoContainer.classList.add('visually-hidden');
}

const playIntro = () => {
    $videoContainer.classList.remove('visually-hidden');
    $introVideo.muted = false;
    $introVideo.play().catch(e => {
        $introVideo.controls = true;
    });
};

const initIntro = () => {
    $skipButton.addEventListener('click', () => {
        hideIntro();
    });

    $introVideo.addEventListener('ended', () => {
        hideIntro();
    });

    $playButton.addEventListener('click', () => {
        playIntro();
    });

    const hasSeenIntro = localStorage.getItem('hasSeenIntro');

    if (!hasSeenIntro) {
        playIntro();
        localStorage.setItem('hasSeenIntro', 'true');
    } else {
        hideIntro();
    }
};

if (performance.navigation.type === 1) {
    localStorage.removeItem('hasSeenIntro');
}

initIntro();