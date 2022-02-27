let dark = document.querySelector('.dark')
let body = document.querySelector('body')
let darkBtn = document.querySelector('.dark-btn')
let changeImgL = document.querySelector('.st-img-light')
let changeImgD = document.querySelector('.st-img-dark')
let logoBtn = document.querySelector('.logo-btn')
let logoBtnD = document.querySelector('.logo-btn-d')
let secImgD = document.querySelector('.sec-img-dark')
let secImgL = document.querySelector('.sec-img-light')
let x = document.querySelector('.sec')

darkBtn.addEventListener('click', changeToDark)
function changeToDark() {
  body.classList.toggle('dark')
  changeImgL.classList.toggle('change-img')
  changeImgD.classList.toggle('change-img')
  logoBtn.classList.toggle('change-img')
  logoBtnD.classList.toggle('change-img')
  secImgL.classList.toggle('change-img')
  secImgD.classList.toggle('change-img')

  changeSection()
}
function changeSection() {
  if (x.style.justifyContent === 'flex-end') {
    x.style.justifyContent = 'flex-start'
  } else {
    x.style.justifyContent = 'flex-end'
    // x.style.justifyContent === 'flex-end'
  }
}
