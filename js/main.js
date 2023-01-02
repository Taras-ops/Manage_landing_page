// burger menu
$('.header__burger').click((e) => {
  $('#menuHamburger').toggleClass('hidden')
  $('#menuClose').toggleClass('active')
  $('.header__nav').toggleClass('show')
  $('body').toggleClass('overlay')
})



// slick slider

$(document).ready(function(){
  $('.testimonials__comments').slick({
   arrows: false,
   centerMode: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   variableWidth: true,
   autoplay: true,
   autoplaySpeed: 2600,
   pauseOnFocus: true
  });
});
		

// validate footer form

const validateForm = () => {
  const input = $('.footer__input')
  const validateError = $('.footer__form-validate')

  const value = input.val()

  if(!value || value.length < 5 || !value.includes('@') || !value.includes('.')) {
    input.addClass('error')
    validateError.text("Please insert a valid email")
    console.log(validateError)
  }
}

$('.footer__form').submit((e) => {
  e.preventDefault()
  validateForm()
})