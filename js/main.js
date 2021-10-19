const perfumeTopItemBlock = document.querySelector('.perfume-top__item-block');
const cosmeticsFilters = document.querySelector('.cosmetics-filters');
// const cosmeticsType = document.querySelector('.cosmetics-type1');
// const brandsType = document.querySelector('.cosmetics-type2');

// console.log(brandsType, cosmeticsType);

// let brandsCount = 0, cosmeticsCount = 0;

// for()


cosmeticsFilters.addEventListener('click', event => {
    if(event.target.tagName == "SPAN") {
        let parentNode = event.target.parentNode.parentNode;
        parentNode.removeChild(event.target.parentNode)
    }
})

perfumeTopItemBlock.addEventListener('click', event => {
    event.target.classList.toggle('active')
})