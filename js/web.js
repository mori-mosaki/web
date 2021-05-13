'use strict';

const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');
const target3 = document.getElementById('target3');

target1.addEventListener('mouseover', () => {
    target1.classList.toggle('circle');
})
target1.addEventListener('mouseleave', () => {
    target1.classList.toggle('circle');
})
target2.addEventListener('mouseover', () => {
    target2.classList.toggle('circle2');
})
target2.addEventListener('mouseleave', () => {
    target2.classList.toggle('circle2');
})
target3.addEventListener('mouseover', () => {
    target3.classList.toggle('circle3');
})
target3.addEventListener('mouseleave', () => {
    target3.classList.toggle('circle3');
})