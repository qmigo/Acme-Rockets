function initApp () {

const modeBtn = document.querySelector('#toggle-mode')
const hamburgerBtn = document.querySelector('#hamburger-button')
const mobileMenu = document.querySelector('#mobile-menu')

const toggleMenu = () =>
{
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
}

hamburgerBtn.addEventListener('click', toggleMenu)
mobileMenu.addEventListener('click', toggleMenu)

modeBtn.addEventListener('click', ()=>{

    htmlTag = document.getElementsByTagName('html')[0]
    mode = htmlTag.classList.value
    if(mode.includes('light'))
    {   
        htmlTag.classList = 'sm:scroll-smooth dark'  
        modeBtn.innerHTML = '☀️' 
    }
    else 
    {
        htmlTag.classList = 'sm:scroll-smooth light'
        modeBtn.innerHTML = '🌙' 
    }

})

}

document.addEventListener('DOMContentLoaded', initApp)