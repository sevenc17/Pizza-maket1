

const headerBurger = document.querySelector('.header-burger');
const navigationList = document.querySelector('.navigationlist');

headerBurger.addEventListener('click', function(event){
	headerBurger.classList.toggle('burger-active');
	navigationList.classList.toggle('navigation-active');
});