const perfumeTopItemBlock = document.querySelector('.perfume-top__item-block');
const cosmeticsFilters = document.querySelector('.cosmetics-filters');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenuItem = document.querySelector('.mobile-menu__item');
const mobileMenu = document.querySelector('.mobile-menu');
const headerNavShopping = document.querySelector('.header-nav__shopping');
const headerBaskek = document.querySelector('.header-baskek');
const headerBaskekTopSpan = document.querySelector('.header-baskek__top span');
const headerItem = document.querySelector('.header-item');
const headerBaskekBodyCount = document.querySelector('.header-baskek__body-count');
const headerBaskekBody = document.querySelector('.header-baskek__body');

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

cosmeticsFilters.addEventListener('click', event => {
    if(event.target.tagName == "SPAN") {
        let parentNode = event.target.parentNode.parentNode;
        parentNode.removeChild(event.target.parentNode)
    }
})

perfumeTopItemBlock.addEventListener('click', event => {
    event.target.classList.toggle('active')
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