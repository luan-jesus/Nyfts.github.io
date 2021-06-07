const swiperCards = new Swiper(document.getElementById("swiper-cards"), {
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
});

const swiperDesktop = new Swiper(document.getElementById("swiper-desktop"), {
    pagination: {
        el: '.swiper-pagination-2',
    },
});

const swiperMobile = new Swiper(document.getElementById("swiper-mobile"), {
    pagination: {
        el: '.swiper-pagination-2',
    },
});

swiperDesktop.on('slideChange', () => {
    swiperMobile.slideTo(swiperDesktop.realIndex)
})

swiperMobile.on('slideChange', () => {
    swiperDesktop.slideTo(swiperMobile.realIndex)
})
