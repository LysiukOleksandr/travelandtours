new WOW().init()
//

function menuBurger() {
  let icon = document.querySelector('.header__nav-burger')
  let menu = document.querySelector('.header__nav-menu')
  icon.onclick = function () {
    this.classList.toggle('header__nav-burger--active')
    menu.classList.toggle('header__nav-menu--open')
  }
}

menuBurger()

function testimonialsSlider() {
  let sliderImages = document.querySelectorAll('.testimonials__slider-img')
  let count = 0

  function slider() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].classList.add('testimonials__slider-img--hidden')
    }
    sliderImages[count].classList.remove('testimonials__slider-img--hidden')
  }

  document.querySelector('.testimonials__slider-prev').onclick = function () {
    if (count - 1 == -1) {
      count = sliderImages.length - 1
    } else {
      count--
    }
    slider()
  }

  document.querySelector('.testimonials__slider-next').onclick = function () {
    if (count + 1 == sliderImages.length) {
      count = 0
    } else {
      count++
    }
    slider()
  }
}

testimonialsSlider()
