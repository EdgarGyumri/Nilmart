const burgerMenu = document.querySelector('.burger-menu');
const mobileMenuItem = document.querySelector('.mobile-menu__item');
const mobileMenu = document.querySelector('.mobile-menu');
const headerNavShopping = document.querySelector('.header-nav__shopping');
const headerBaskek = document.querySelector('.header-baskek');
const headerBaskekTopSpan = document.querySelector('.header-baskek__top span');
const headerItem = document.querySelector('.header-item');
const headerBaskekBodyCount = document.querySelector('.header-baskek__body-count');
const headerBaskekBody = document.querySelector('.header-baskek__body');
const deliveryBody1 = document.querySelector('.delivery-body1');
const deliveryBody2 = document.querySelector('.delivery-body2');
const deliveryBodyItemParts1 = document.querySelectorAll('.delivery-body__item-elem3 .delivery-body__item-part');
const deliveryBodyItemParts2 = document.querySelectorAll('.delivery-top__item-elem4 .delivery-body__item-part');
const deliveryBodyItemParts3 = document.querySelectorAll('.delivery-body__item-elem5 .delivery-body__item-part');
const deliveryBodyItemParts4 = document.querySelectorAll('.delivery-top__item-elem6 .delivery-body__item-part');


deliveryBody1.addEventListener('click', event => {
    let targetParentElem;
    let target = event.target;
    console.log(target);
    // for(let i = 0; i < deliveryBodyItemParts1; i++) {
    //     console.log(deliveryBodyItemParts1[i]);
    // }
    // if(target.parentNode.parentNode.classList.contains('delivery-body__item-elem3')){
    //     targetParentElem = target.parentNode;
        
    // } else if(target.parentNode.parentNode.parentNode.classList.contains('delivery-body__item-elem3')) {
    //     targetParentElem = target.parentNode.parentNode;
        
    //     for(let i = 0; i < deliveryBodyItemParts1; i++) {
    //         console.log(deliveryBodyItemParts1[i]);
    //     }
    // }
})

// deliveryBody1.addEventListener('click', event => {
//     let targetParentElem;
//     let target = event.target;
//     if(target.parentNode.parentNode.classList.contains('delivery-body__item-elem3')){
//         targetParentElem = target.parentNode;
        
//         for(let i = 0; i < deliveryBodyItemParts1; i++) {
//             console.log(deliveryBodyItemParts1[i]);
//         }
//     } else if(target.parentNode.parentNode.parentNode.classList.contains('delivery-body__item-elem3')) {
//         targetParentElem = target.parentNode.parentNode;
        
//         for(let i = 0; i < deliveryBodyItemParts1; i++) {
//             console.log(deliveryBodyItemParts1[i]);
//         }
//     }
// })

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
        target.classsList.add('inactive');
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