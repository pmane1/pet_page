'use strict';

const menu = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const styleNav = getComputedStyle(nav);

menu.addEventListener('click', () => {
    if(styleNav.display == 'none'){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});
