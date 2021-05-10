const slider = document.querySelector('.slider')
const custom = document.querySelector('.btn-custom')
const progressBar = document.querySelector(".progress-bar")

slider.addEventListener('mousemove', function(){
    let color = ':linear-gradient(90deg, #f55c47)' + '%,#e1e5ea' + '%)'
    slider.style.background = color
})



