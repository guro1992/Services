let img = document.querySelectorAll('.key-features--col-my');
let  imgHover = document.querySelectorAll('.hover-text');

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseover', () => {
        if (i%2 === 0) {
            imgHover[i].classList.add('img-hov');
        } else {
            imgHover[i].classList.add('img-hov-left');
        }
    })

    img[i].addEventListener('mouseout', () => {
        imgHover[i].classList.remove('img-hov');
        imgHover[i].classList.remove('img-hov-left');
    })
}

let showNav = document.querySelector('.nav-div').style;

document.querySelector('.header__button').addEventListener('click', () => {
    setTimeout(() => {
    if (showNav.display === 'block') {
        showNav.display = 'none';
    } else {
        showNav.display = 'block';
    } 
}, 400); 
});

let list = document.querySelectorAll('.we-offer nav li');
let trading = document.querySelectorAll('.we-offer .d-none');

for (let i = 0; i < list.length; i++) {

    list[i].addEventListener('click', () => {
        for (let i = 0; i < list.length; i++) {
            trading[i].classList.remove('d-block');
            list[i].style.borderLeft ='none';
        }

        trading[i].classList.add('d-block');
        list[i].style.borderLeft ='2px solid #0ecafc';
    })
}