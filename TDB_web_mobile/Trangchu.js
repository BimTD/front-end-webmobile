
//Go to top--------------------------------------------------
let mybutton = document.getElementById("btn-scroll-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
function topFunction() {
    setTimeout(() => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}, 200); 
}

// Light-box
let index = 0;
const imgNumber = document.querySelectorAll(".slider-content-img img");
const arrow_left = document.querySelector(".fa-chevron-left");
const arrow_right = document.querySelector(".fa-chevron-right");

arrow_left.addEventListener("click", function(){
    index--;
    if(index < 0)
    {
        index = imgNumber.length - 1;
    }
    document.querySelector(".slider-content-img").style.right = index * 100 + "%";
    
});
arrow_right.addEventListener("click", function(){
    index++;
    if(index > imgNumber.length - 1)
    {
        index = 0;
    }
    document.querySelector(".slider-content-img").style.right = index * 100 + "%";
});
//List-box
const list_1 = document.querySelector(".slider-content-list-1");
const list_2 = document.querySelector(".slider-content-list-2");
const list_3 = document.querySelector(".slider-content-list-3");

list_1.addEventListener("click", function(){
    index--;
    if(index < 0)
    {
        index = imgNumber.length - 1;
    }
    document.querySelector(".slider-content-img").style.right = index * 100 + "%";
    list_1.style.backgroundColor = "#111111";
    list_2.style.backgroundColor = "#7e7576";
    list_3.style.backgroundColor = "#7e7576";
});

list_2.addEventListener("click", function(){
    index++;
    if(index > imgNumber.length - 1)
    {
        index = 0;
    }
    document.querySelector(".slider-content-img").style.right = index * 100 + "%";
    list_1.style.backgroundColor = "#7e7576";
    list_2.style.backgroundColor = "#111111";
    list_3.style.backgroundColor = "#7e7576";
});

list_3.addEventListener("click", function(){
    index++;
    if(index > imgNumber.length - 1)
    {
        index = 0;
    }
    document.querySelector(".slider-content-img").style.right = index * 100 + "%";
    list_1.style.backgroundColor = "#7e7576";
    list_2.style.backgroundColor = "#7e7576";
    list_3.style.backgroundColor = "#111111";
});

//Modal
const btnOpen = document.querySelector('.open-modal-btn')
const modal = document.querySelector('.modal')
const iconClose = document.querySelector('.modal-header i')
const btnClose = document.querySelector('.modal-footer button')

function toggleModal(){
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click',toggleModal )