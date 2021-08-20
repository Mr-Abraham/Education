const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const header = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const serviceinfo = document.querySelector('.serviceinfo');

btn.addEventListener('click',function(){
    list.classList.toggle("active");
    one.classList.toggle("active");
    two.classList.toggle("active");
    three.classList.toggle("active");
    header.classList.toggle("active");
});

window.addEventListener('scroll',reveal);

function reveal(){
    var box = document.querySelectorAll('.box');
    for( var i = 0; i < box.length; i++ ){
        var windowheight = window.innerHeight;
        var revealtop = box[i].getBoundingClientRect().top;
        var revealpoint = 200;
        if(revealtop < windowheight - revealpoint){
            box[i].classList.add("active");
            console.log(revealtop);
        }
        else{
            box[i].classList.remove("active");
        }
    }
}

// if you want to make

// var interval = setInterval(() => {
//     var img = document.getElementById('image');

//     var images = ['./images/3.svg','./images/2.svg'];

//     var random = images[Math.floor(Math.random() * 2)];

//     img.src = random

// }, 2000);