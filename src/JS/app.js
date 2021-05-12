const slider = document.querySelector('.slider')
const value = document.querySelector('.value')


value.textContent = `$${slider.value}`

slider.oninput = function(){
    value.textContent =  `$${this.value}`
    let i = this.value*3
    let counter = 0
    let color = 'linear-gradient(90deg, rgb(245, 92, 71)' + i + '%,rgb(225, 229, 234)' + i + '%)'
   slider.style.background = color
}




