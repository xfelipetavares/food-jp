window.addEventListener(`scroll`, scrollando)

function scrollando(){
    let navbar = document.getElementById(`navbar`)
    if(scrollY > 35){
        navbar.classList.add(`scrolling`)
    } else {
        navbar.classList.remove(`scrolling`)
    }
}