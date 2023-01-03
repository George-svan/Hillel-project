(function(){
	const headerBurgerBtn = document.querySelector('.header__logo-burger');
	const headerNavigation = document.querySelector('.header__nav');
	const headerButtonCloseNav = document.querySelector('.header__nav-burger-close');

	headerBurgerBtn.addEventListener('click', e => {
		headerNavigation.classList.add('active');
	});

	headerButtonCloseNav.addEventListener('click', e => {
		headerNavigation.classList.remove('active');
	});

})();

(function(){
	const tabsItem = document.querySelectorAll('.header-content__scroll-item');
	const tabsContent = document.querySelectorAll('.header-content__scroll-description-box');

	tabsItem.forEach((tab, index) => {
		tab.addEventListener('click', (e) => {

			tabsContent.forEach(content => {
				content.classList.remove('active-tab')
			});

			tabsItem.forEach(tab => {
				tab.classList.remove('active-gradient')
			});

			tabsItem[index].classList.add('active-gradient')
			tabsContent[index].classList.add('active-tab')
		})
	})
})();

const swiper = new Swiper('.swiper', {
	spaceBetween: 30,
pagination: {
    el: '.swiper-pagination',
		clickable: true,
},
	grabCursor: true,

	loop: true,
	speed: 900,
	autoplay: {
		delay: 10000,
	},
	effect: 'coverflow',
	fadeEffect: {
		crossFade: true
	},
});


const swiper01 = new Swiper('.swiper01', {
	spaceBetween: 40,
pagination: {
    el: '.swiper-pagination',
		clickable: true,
},
	grabCursor: true,

	loop: true,
	speed: 900,
	autoplay: {
		delay: 10000,
	},


	breakpoints: {
		// when window width is >= 768px
		768: {
			slidesPerView: 4,
			spaceBetween: 40
		},
	}

});