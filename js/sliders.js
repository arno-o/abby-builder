// DOM elements
const $opacity1 = document.getElementById('opacity1');
const $opacity2 = document.getElementById('opacity2');
const $opacity3 = document.getElementById('opacity3');
const $opacity4 = document.getElementById('opacity4');
const $opacity5 = document.getElementById('opacity5');
const $opacity6 = document.getElementById('opacity6');

const $g1 = document.querySelector('.g1');
const $g2 = document.querySelector('.g2');
const $g3 = document.querySelector('.g3');
const $g4 = document.querySelector('.g4');
const $g5 = document.querySelector('.g5');
const $g6 = document.querySelector('.g6');

const $title = document.querySelector('.slider__title');
const $visualSlider = document.querySelector('.slider__visual-input');
const $valueContainer = document.querySelector('.value-container');
const $valueDisplay = document.querySelector('.build__value');
const $buildSlider = document.querySelector('.build__slider');
const $sliders = document.querySelectorAll('.build__controls .slider');

let fadeTimeout = null;
let activeSliderIndex = null;

// Slider content
const sliderData = [
    {
        title: "What's your social energy?",
        values: ["Anti-Social", "Quiet", "Chilling", "Expressive", "Outgoing"]
    },
    {
        title: "What does your space look like?",
        values: ["Clinical", "Organised", "Lived-in", "Messy", "Chaotic"]
    },
    {
        title: "How do you approach a new project?",
        values: ["Experimentally", "Spontaneously", "Flexibly", "Structured", "Strategically"]
    },
    {
        title: "What type of ideas or aesthetics draw you in?",
        values: ["Traditional", "Nostalgic", "Mixed", "Modern", "Experimental"]
    },
    {
        title: "What guides your decisions?",
        values: ["Feelings", "Empathy", "Balance", "Logic", "Analysis"]
    },
    {
        title: "How do you like to participate in activities?",
        values: ["Observing", "Curious", "Casual", "Involved", "Immersed"]
    }
];


// Top Slider Visual
$buildSlider.style.opacity = '0';

const updateSliderContent = (index, slider) => {
    const value = slider.value;
    const valuesArray = sliderData[index].values;
    const step = 1 / valuesArray.length;
    const valueIndex = Math.min(valuesArray.length - 1, Math.floor(value / step));
    const newValue = valuesArray[valueIndex];

    $title.textContent = sliderData[index].title;
    $visualSlider.value = value;
    $valueDisplay.textContent = newValue;

    return { newValue, valueIndex };
};

const animateSliderSwap = (index, slider) => {
    gsap.to($buildSlider, {
        x: 250,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            const { newValue } = updateSliderContent(index, slider);
            gsap.set($buildSlider, { x: -250, opacity: 0 });
            gsap.to($buildSlider, { x: 0, opacity: 1, duration: 0.3 });
        }
    });
};

const animateValueChange = (slider, valueIndex, newValue) => {
    const lastValueIndex = +slider.dataset.lastValueIndex || 0;
    if (valueIndex === lastValueIndex) return;

    slider.dataset.lastValueIndex = valueIndex;
    const direction = valueIndex > lastValueIndex ? 1 : -1;

    gsap.killTweensOf($valueDisplay);
    gsap.to($valueDisplay, {
        x: -100 * direction,
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            $valueDisplay.textContent = newValue;
            gsap.fromTo($valueDisplay, { x: 100 * direction, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2 });
        },
    });
};

const animateFadeOut = () => {
    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
        gsap.to($buildSlider, {
            x: -300,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                gsap.set($buildSlider, { x: 0, opacity: 0 });
            }
        });
        $sliders.forEach(s => s.classList.remove('active'));
        activeSliderIndex = null;
    }, 3000);
};

const handleSliderInput = (slider, index) => {
    const value = slider.value;
    const valuesArray = sliderData[index].values;
    const step = 1 / valuesArray.length;
    const valueIndex = Math.min(valuesArray.length - 1, Math.floor(value / step));
    const newValue = valuesArray[valueIndex];

    if (index !== activeSliderIndex) {
        activeSliderIndex = index;
        animateSliderSwap(index, slider);
    } else {
        $visualSlider.value = value;
    }

    animateValueChange(slider, valueIndex, newValue);

    $sliders.forEach(s => s.classList.remove('active'));
    slider.classList.add('active');

    animateFadeOut();
};


// Save for QR code
const saveSliderValuesToStorage = () => {
    const values = {
        g1: parseFloat(document.getElementById('opacity1').value),
        g2: parseFloat(document.getElementById('opacity2').value),
        g3: parseFloat(document.getElementById('opacity3').value),
        g4: parseFloat(document.getElementById('opacity4').value),
        g5: parseFloat(document.getElementById('opacity5').value),
        g6: parseFloat(document.getElementById('opacity6').value),
    };
    localStorage.setItem('identityValues', JSON.stringify(values));
};

// Update Blob
const updateGradient = (slider, index) => {
    const $gradients = [$g1, $g2, $g3, $g4, $g5, $g6];
    $gradients[index].style.background =
        `radial-gradient(circle at center, rgba(var(--color${index + 1}), ${slider.value}) 0, rgba(var(--color${index + 1}), 0) 50%) no-repeat`;
};

// Initialise
const init = () => {
    $sliders.forEach((slider, index) => {
        slider.addEventListener('input', () => handleSliderInput(slider, index));
        slider.addEventListener('input', () => updateGradient(slider, index));
        slider.addEventListener('input', saveSliderValuesToStorage);
    });
};


init();