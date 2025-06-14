// Get all sliders
const $opacity1 = document.getElementById('opacity1');
const $opacity2 = document.getElementById('opacity2');
const $opacity3 = document.getElementById('opacity3');
const $opacity4 = document.getElementById('opacity4');
const $opacity5 = document.getElementById('opacity5');
const $opacity6 = document.getElementById('opacity6');

// Get all gradient elements
const $g1 = document.querySelector('.g1');
const $g2 = document.querySelector('.g2');
const $g3 = document.querySelector('.g3');
const $g4 = document.querySelector('.g4');
const $g5 = document.querySelector('.g5');
const $g6 = document.querySelector('.g6');

// Get top slider elements
const $title = document.querySelector('.slider__title');
const $visualSlider = document.querySelector('.slider__visual-input');
const $valueDisplay = document.querySelector('.build__value');
const $buildSlider = document.querySelector('.build__slider');
const $sliders = document.querySelectorAll('.build__controls .slider');

// Slider content data
const sliderData = [
    {
        title: "How do you feel around others?",
        values: ["Quiet", "Thoughtful", "Balanced", "Expressive", "Outgoing"]
    },
    {
        title: "How do you like to approach your day?",
        values: ["Free-spirited", "Adaptive", "Intentional", "Planned", "Structured"]
    },
    {
        title: "How do you create or think?",
        values: ["Hands-on", "Experimental", "Both", "Strategic", "Conceptual"]
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
        title: "How do you like to participate in things?",
        values: ["Observer", "Curious", "Casual", "Involved", "Immersed"]
    }
];


$buildSlider.style.opacity = '0';

// Add event listeners to all sliders
$sliders.forEach((slider, index) => {
    slider.addEventListener('input', function () {
        $buildSlider.style.opacity = '1';

        $visualSlider.value = this.value;
        $title.textContent = sliderData[index].title;
        const valueIndex = Math.floor(this.value * (sliderData[index].values.length - 1));
        $valueDisplay.textContent = sliderData[index].values[valueIndex];

        $sliders.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });

    // When mouse leaves the slider, fade out the top display after a delay
    slider.addEventListener('mouseleave', function () {
        console.log('mouseleave');
        setTimeout(() => {
            if (!document.querySelector('.slider.active:hover')) {
                $buildSlider.style.opacity = '0';
                this.classList.remove('active');
            }
        }, 1000);
    });
});

// Change blob
const $gradients = [$g1, $g2, $g3, $g4, $g5, $g6];

$sliders.forEach((slider, index) => {
    slider.addEventListener('input', function () {
        $gradients[index].style.background =
            `radial-gradient(circle at center, rgba(var(--color${index + 1}), ${this.value}) 0, rgba(var(--color${index + 1}), 0) 50%) no-repeat`;
    });
});



