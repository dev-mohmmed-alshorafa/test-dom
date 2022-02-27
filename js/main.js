let dark = document.querySelector('.dark')
let body = document.querySelector('body')
let darkBtn = document.querySelector('.dark-btn')
let changeImgL = document.querySelector('.st-img-light')
let changeImgD = document.querySelector('.st-img-dark')
let logoBtn = document.querySelector('.logo-btn')
let logoBtnD = document.querySelector('.logo-btn-d')

darkBtn.addEventListener('click', changeToDark)
function changeToDark() {
  body.classList.toggle('dark')
  changeImgL.classList.toggle('change-img')
  changeImgD.classList.toggle('change-img')
  logoBtn.classList.toggle('change-img')
  logoBtnD.classList.toggle('change-img')
}
