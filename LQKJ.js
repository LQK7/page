
let sec1 =document.querySelector('.sec1');
let sec2 =document.querySelector('.sec2');

window.addEventListener('scroll',function(){
    var value = window.scrollY;
    sec1.style.clipPath="circle("+value * 0.30 +"px at 0 0)"
    sec2.style.clipPath="circle("+value * 0.30 +"px at 100% 100%)"

})

window.addEventListener("scroll", function(){
var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0 );


})