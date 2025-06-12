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

// Update gradient styles when sliders change
$opacity1.addEventListener('input', function () {
    $g1.style.background = `radial-gradient(circle at center, rgba(var(--color1), ${this.value}) 0, rgba(var(--color1), 0) 50%) no-repeat`;
});

$opacity2.addEventListener('input', function () {
    $g2.style.background = `radial-gradient(circle at center, rgba(var(--color2), ${this.value}) 0, rgba(var(--color2), 0) 50%) no-repeat`;
});

$opacity3.addEventListener('input', function () {
    $g3.style.background = `radial-gradient(circle at center, rgba(var(--color3), ${this.value}) 0, rgba(var(--color3), 0) 50%) no-repeat`;
});

$opacity4.addEventListener('input', function () {
    $g4.style.background = `radial-gradient(circle at center, rgba(var(--color4), ${this.value}) 0, rgba(var(--color4), 0) 50%) no-repeat`;
});

$opacity5.addEventListener('input', function () {
    $g5.style.background = `radial-gradient(circle at center, rgba(var(--color5), ${this.value}) 0, rgba(var(--color5), 0) 50%) no-repeat`;
});
$opacity6.addEventListener('input', function () {
    $g6.style.background = `radial-gradient(circle at center, rgba(var(--color6), ${this.value}) 0, rgba(var(--color6), 0) 50%) no-repeat`;
});
// $blur.addEventListener('input', function () {
//     $gContainer.style.filter = `url('#goo') blur(${this.value}px)`;
// });

// $matrix.addEventListener('input', function () {
//     $matrixValue.setAttribute('values',
//         `${1} 0 0 0 0  0 ${1} 0 0 0  0 0 ${1} 0 0  0 0 0 20 -10`);
// });



