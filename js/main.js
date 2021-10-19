const perfumeTopItemBlock = document.querySelector('.perfume-top__item-block');
const cosmeticsFilters = document.querySelector('.cosmetics-filters');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenuItem = document.querySelector('.mobile-menu__item');
const mobileMenu = document.querySelector('.mobile-menu')
const headerNavShopping = document.querySelector('.header-nav__shopping');
const headerBaskek = document.querySelector('.header-baskek');
const headerBaskekTopSpan = document.querySelector('.header-baskek__top span');
const headerItem = document.querySelector('.header-item');
// const cosmeticsType = document.querySelector('.cosmetics-type1');
// const brandsType = document.querySelector('.cosmetics-type2');

// console.log(brandsType, cosmeticsType);

// let brandsCount = 0, cosmeticsCount = 0;

// for()


headerBaskekTopSpan.addEventListener('click', () =>{
    headerBaskek.classList.toggle('active')
})

headerNavShopping.addEventListener('click', () => {
    headerBaskek.classList.toggle('active')
})

burgerMenu.addEventListener('click', event => {
    mobileMenuItem.classList.toggle('active');
    mobileMenu.classList.toggle('active')
    document.querySelector('.overlay').classList.toggle('active')
    document.querySelector('body').classList.toggle('active')
    headerItem.classList.toggle('active')
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