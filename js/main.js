const perfumeTopItemBlock = document.querySelector('.perfume-top__item-block');
const cosmeticsFilters = document.querySelector('.cosmetics-filters');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenuList = document.querySelector('.mobile-menu__list');
// const cosmeticsType = document.querySelector('.cosmetics-type1');
// const brandsType = document.querySelector('.cosmetics-type2');

// console.log(brandsType, cosmeticsType);

// let brandsCount = 0, cosmeticsCount = 0;

// for()

burgerMenu.addEventListener('click', event => {
    mobileMenuList.classList.toggle('active');
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