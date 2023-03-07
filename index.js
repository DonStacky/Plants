console.log('Ваша оценка - 125 баллов\nОтзыв по пунктам ТЗ:\nВыполненные пункты:\n1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной\n2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг\n3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur\n4) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым\n5) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается\n6) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе\n7) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу\n');
/*============================================== Accourdion ==============================================*/
$(function () {
    $('.price__item').on('click', function (e) {
        if (!$(e.target).hasClass('price__order')) {
        if ($(this).hasClass('price__item--active')) {
            $(this).removeClass('price__item--active')
            $(this).children('.price__accActive').slideUp()
        } else {
            $('.price__item').removeClass('price__item--active')
            $('.price__item').children('.price__accActive').slideUp()
            $(this).addClass('price__item--active')
            $(this).children('.price__accActive').slideDown()
        }
    }
    })
/*============================================== Burger ==============================================*/
    $('.burger').on('click', function(e) {
        e.preventDefault()
        $('.header__nav').toggleClass('header__nav--open')
        $('.burger').toggleClass('burger--exit')
        $('.overlay').toggleClass('overlay--show')
    })

    $('.header__link, .overlay').on('click', function() {
        $('.header__nav').removeClass('header__nav--open')
        $('.burger').removeClass('burger--exit')
        $('.overlay').removeClass('overlay--show')
    })
})
/*============================================== Blur ==============================================*/
let serviseCards = document.getElementsByTagName('figure');
let serviseButtonGarden = document.querySelectorAll('.service__button')[0];
let serviseButtonLawn = document.querySelectorAll('.service__button')[1];
let serviseButtonPlant = document.querySelectorAll('.service__button')[2];

serviseButtonGarden.addEventListener('click', function(){
    if (document.querySelectorAll('.service__button--active').length < 2) {
    this.classList.toggle('service__button--active');
    if (document.querySelectorAll('.service__blur').length < 1 && document.querySelectorAll('.service__button--active').length === 1) {
        Array.from(serviseCards).forEach(function(item) {
        {item.classList.toggle('service__blur')};});};
    Array.from(serviseCards).forEach(function(item) {
        if (item.hasAttribute('garden')) {item.classList.toggle('service__blur');};
})
    checkBlur();
} else {
    this.classList.remove('service__button--active');
    Array.from(serviseCards).forEach(function(item) {
        if (item.hasAttribute('garden')) {item.classList.add('service__blur');};
})
}
})

serviseButtonLawn.addEventListener('click', function(){
    if (document.querySelectorAll('.service__button--active').length < 2) {
    this.classList.toggle('service__button--active');
    if (document.querySelectorAll('.service__blur').length < 1 && document.querySelectorAll('.service__button--active').length === 1) {
        Array.from(serviseCards).forEach(function(item) {
        {item.classList.toggle('service__blur')};});};
    Array.from(serviseCards).forEach(function(item) {
        if (item.hasAttribute('lawn')) {item.classList.toggle('service__blur');};
})
    checkBlur();
}else {
    this.classList.remove('service__button--active');
    Array.from(serviseCards).forEach(function(item) {
        if (item.hasAttribute('lawn')) {item.classList.add('service__blur');};
})
}})

serviseButtonPlant.addEventListener('click', function(){
    if (document.querySelectorAll('.service__button--active').length < 2) {
    this.classList.toggle('service__button--active');
    if (document.querySelectorAll('.service__blur').length < 1 && document.querySelectorAll('.service__button--active').length === 1) {
        Array.from(serviseCards).forEach(function(item) {
        {item.classList.toggle('service__blur')};});};
    Array.from(serviseCards).forEach(function(item) {
        if (item.hasAttribute('plant')) {item.classList.toggle('service__blur');};
})
    checkBlur();
}else {
    this.classList.remove('service__button--active');
    Array.from(serviseCards).forEach(function(item) {
        if (item.hasAttribute('plant')) {item.classList.add('service__blur');};
})
}
})

function checkBlur () {
    if(document.querySelectorAll('.service__button--active').length === 0) {
    Array.from(serviseCards).forEach(function(item) {
    item.classList.remove('service__blur')
    });};
}
/*============================================== Select ==============================================*/
document.querySelector('.contacts__city').addEventListener('click', function () {
    selectWrapper.classList.toggle('select__wrapper--active');
    if (selectWrapper.classList.contains('select__wrapper--active')) {
    document.querySelector('.contacts__board').classList.remove('contacts__board--active');
} else {
    document.querySelector('.contacts__board').classList.add('contacts__board--active');
}
})
let contactItem = document.querySelectorAll('.contacts__item');
let selectWrapper = document.querySelector('.select__wrapper');
    contactItem.forEach(function(item){
    item.addEventListener('click', changeSelectorItem);
})
function changeSelectorItem () {
    let text = this.innerText;
    document.querySelector('.contacts__text').innerText = text;
    document.querySelector('.contacts__city').classList.add('contact__selected');
    selectWrapper.classList.toggle('select__wrapper--active');
    document.querySelector('.contacts__board').classList.add('contacts__board--active');
    if (this === contactItem[0]) {boardSelect (Canandaigua)};
    if (this === contactItem[1]) {boardSelect (NewYork)};
    if (this === contactItem[2]) {boardSelect (Yonkers)};
    if (this === contactItem[3]) {boardSelect (Sherrill)};
}
let Yonkers = {
    city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    adress: '511 Warburton Ave'
}
let Canandaigua = {
    city: 'Canandaigua, NY',
    phone: '+1 585 393 0001',
    adress: '151 Charlotte Street'
}
let NewYork = {
    city: 'New York City',
    phone: '+1 212 456 0002',
    adress: '9 East 91st Street'
}
let Sherrill = {
    city: 'Sherrill, NY',
    phone: '+1 315 908 0004',
    adress: '14 WEST Noyes BLVD'
}
let boardText = document.querySelector('.board__value').children;
let boardCall = document.querySelector('.board__link');
console.log(boardCall);
function boardSelect (obj) {
    boardText[0].textContent = obj.city;
    boardText[1].textContent = obj.phone;
    boardText[2].textContent = obj.adress;
    boardCall.setAttribute('href', `tel: ${obj.phone}`);
}