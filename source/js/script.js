

const headerBurger = document.querySelector('.header-burger');
const navigationList = document.querySelector('.navigationlist');

headerBurger.addEventListener('click', function(event){
	headerBurger.classList.toggle('burger-active');
	navigationList.classList.toggle('navigation-active');
});

headerBurger.addEventListener('click', function(e){
	if (headerBurger.classList.contains('burger-active')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'scroll';
	}
});

