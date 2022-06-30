let modal = document.querySelector('.login-bg')
let modal2 = document.querySelector('.signup-bg')
let close = document.querySelector('.close')
let close2 = document.querySelector('.close2')
let loginBtn = document.getElementById('login-btn')
let signupLink = document.getElementById('signup-link')
loginBtn.onclick = function() {
    modal.style.visibility = 'visible'
}
signupLink.onclick = function() {
    modal2.style.visibility = 'visible'
}
close.onclick = function() {
    modal.style.visibility = 'hidden'
}
close2.onclick = function() {
    modal2.style.visibility = 'hidden'
}

/*For mobile sidebar*/
let sidenav = document.querySelector('.sidebar')
let menu = document.querySelector('.bar')
let drawOut = document.querySelector('.hex')

menu.onclick = function() {
    sidenav.style.display = 'block';
}
drawOut.onclick = function() {
    sidenav.style.display = 'none'
}
let modalSmall = document.querySelector('.login-bk')
let modalSmall2 = document.querySelector('.signup-bk')
let klose = document.querySelector('.klose')
let klose2 = document.querySelector('.klose2')
let loginLink = document.querySelector('.login-link')
let signupBtn = document.querySelector('.signup-btn')

loginLink.onclick = function() {
    modalSmall.style.visibility = 'visible'
}
signupBtn.onclick = function() {
    modalSmall2.style.visibility = 'visible'
}
klose.onclick = function() {
    modalSmall.style.visibility = 'hidden'
}
klose2.onclick = function() {
    modalSmall2.style.visibility = 'hidden'
}