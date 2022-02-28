let body = document.querySelector('body')
let darkBtn = document.querySelector('.dark-btn')
let changeImgL = document.querySelector('.st-img-light')
let changeImgD = document.querySelector('.st-img-dark')
let logoBtn = document.querySelector('.logo-btn')
let logoBtnD = document.querySelector('.logo-btn-d')
let secImgD = document.querySelector('.sec-img-dark')
let secImgL = document.querySelector('.sec-img-light')
let x = document.querySelector('.sec')
let lastImg = document.querySelector('.last-img')
console.log(darkBtn)
darkBtn.addEventListener('click', switchTheme)
function changeToDark() {
  body.classList.toggle('dark')
  changeImgL.classList.toggle('change-img')
  changeImgD.classList.toggle('change-img')
  logoBtn.classList.toggle('change-img')
  logoBtnD.classList.toggle('change-img')
  secImgL.classList.toggle('change-img')
  secImgD.classList.toggle('change-img')
  lastImg.classList.toggle('footer-img')

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

function switchTheme() {
  // Get the value of the "dark" item from the local storage on every click
  darkMode = localStorage.getItem('dark')

  if (darkMode !== 'on') {
    //   Set the value of the item to "on" when dark mode is on
    changeToDark()
    darkMode = localStorage.setItem('dark', 'on')
  } else {
    //   Set the value of the item to  "null" when dark mode if off
    changeToDark()
    darkMode = localStorage.setItem('dark', 'off')
  }
}

// Get the value of the "dark" item from the local storage
let darkMode = localStorage.getItem('dark')

// check dark mode is on or off on page reload
if (darkMode === 'on') {
  changeToDark()
}
