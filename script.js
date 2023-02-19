burger = document.querySelector('.burger')
nav = document.querySelector('.navheight')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    nav.classList.toggle('navheight')
    navlist.classList.toggle('v-class')
    rightnav.classList.toggle('v-class')
})