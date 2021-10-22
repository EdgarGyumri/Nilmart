const burgerMenu = document.querySelector('.burger-menu');
const mobileMenuItem = document.querySelector('.mobile-menu__item');
const mobileMenu = document.querySelector('.mobile-menu');
const headerNavShopping = document.querySelector('.header-nav__shopping');
const headerBaskek = document.querySelector('.header-baskek');
const headerBaskekTopSpan = document.querySelector('.header-baskek__top span');
const headerItem = document.querySelector('.header-item');
const infoBlock = document.querySelector('.info-block');
const headerBaskekBodyCount = document.querySelector('.header-baskek__body-count');
const headerBaskekBody = document.querySelector('.header-baskek__body');
const productContentNav = document.querySelector('.product-content__nav');
const productContentBlockElement = document.querySelectorAll('.product-content__block-element');
const productContentImagesSvgFirst = document.querySelector('.product-content__images-svg:first-child');
const productContentImagesSvgLast = document.querySelector('.product-content__images-svg:last-child');

productContentImagesSvgFirst.addEventListener('click', () => {
    for(let i = 0; i < productContentBlockElement.length; i++) {
        if(productContentBlockElement[i].dataset.id == "1" && productContentBlockElement[i].classList.contains('active')){
            productContentBlockElement[i].classList.remove('active')
            productContentBlockElement[4].classList.add('active');
            break;
        }else if(productContentBlockElement[i].classList.contains('active')){
            productContentBlockElement[i].classList.remove('active')
            productContentBlockElement[i-1].classList.add('active');
            break;
        }
    }
})

productContentImagesSvgLast.addEventListener('click', () => {
    for(let i = 0; i < productContentBlockElement.length; i++) {
        if(productContentBlockElement[i].dataset.id == "5" && productContentBlockElement[i].classList.contains('active')){
            productContentBlockElement[i].classList.remove('active')
            productContentBlockElement[0].classList.add('active');
            break;
        }else if(productContentBlockElement[i].classList.contains('active')){
            productContentBlockElement[i].classList.remove('active')
            productContentBlockElement[i+1].classList.add('active');
            break;
        }
    }
})



productContentNav.addEventListener('click', event => {
    let target = event.target;

    if(target.classList.contains('product-content__nav-item')) {
        for(let i = 0; i < productContentBlockElement.length; i++) {
            productContentBlockElement[i].classList.remove('active')


            if(productContentBlockElement[i].dataset.id == target.dataset.id) {
                productContentBlockElement[i].classList.add('active')
            }
        }
    } else if(target.parentNode.classList.contains('product-content__nav-item')) {
        for(let i = 0; i < productContentBlockElement.length; i++) {
            productContentBlockElement[i].classList.remove('active')

            if(productContentBlockElement[i].dataset.id == target.parentNode.dataset.id) {
                productContentBlockElement[i].classList.add('active')
            }
        }
    }
})

headerBaskekBody.addEventListener('click', event => {
    let target = event.target;
    let targetParentNode;

    if(target.tagName == "path") {
        targetParentNode = target.parentNode.parentNode.parentNode.parentNode;
        targetParentNode.classList.add('inactive');
    }else if(target.tagName == "svg") {
        targetParentNode = target.parentNode.parentNode.parentNode;
        targetParentNode.classList.add('inactive');
    }else if(target.tagName == "SPAN"){
        targetParentNode = target.parentNode.parentNode;
        targetParentNode.classList.add('inactive');
    }
})

headerBaskekBodyCount.addEventListener('click', event => {
    let target = event.target;
    let count;
    if(target.classList.contains('header-baskek__body-remove')) {
        count = Number(target.nextElementSibling.innerHTML);
        count -= 1;
        target.nextElementSibling.innerHTML = count;
    }else if(target.classList.contains('header-baskek__body-add')) {
        count = Number(target.previousElementSibling.innerHTML);
        count += 1;
        target.previousElementSibling.innerHTML = count;
        target.previousElementSibling.previousElementSibling.classList.remove('inactive')
    }

    if(count == 0) {
        target.classList.add('inactive');
    }
})

infoBlock.addEventListener('click', event => {
    let target = event.target;

    if(target.parentNode.classList.contains('info-block__item-top')) {
        target.parentNode.nextElementSibling.classList.toggle('active');
        target.parentNode.lastElementChild.classList.toggle('active')
    }

})

headerBaskekTopSpan.addEventListener('click', () =>{
    headerBaskek.classList.toggle('active')
})

headerNavShopping.addEventListener('click', () => {
    headerBaskek.classList.toggle('active')
})

burgerMenu.addEventListener('click', event => {
    mobileMenuItem.classList.toggle('active');
    mobileMenu.classList.toggle('active')
    headerItem.classList.toggle('active')
    burgerMenu.classList.toggle('active')
    document.querySelector('.overlay').classList.toggle('active')
    document.querySelector('body').classList.toggle('active')
})

const anchors = document.querySelectorAll('a[href*="#"');

for(let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}