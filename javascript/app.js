



// Hambergur Menu Click testing

const burgerMenu = document.querySelector(".hamburger-bar");
const navLink = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", function(){
    navLink.classList.toggle("active");
})


// porfilio slider

var slider = document.querySelectorAll(".port-img");
console.log(slider);
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");
var counter = 0;

// for loop for the display one slider at a time
for(let i=0;i<slider.length;i++){
    if(i==0){
        slider[i].style.display = "block";
    }
    else{
        slider[i].style.display = "none";

    }
}

// let start with the previous button with add event listener

nextBtn.addEventListener("click",function(){
    counter++;
    console.log(counter);
    if(counter>(slider.length-1)){
        counter = slider.length-6;}
    // console.log(counter);
    slider[counter].style.display = "block";

                    for(let i=1;i<slider.length;i++){
                        if(i>counter){
                            slider[i].style.display = "none";
                            slider[i].style.display = "none"; 
                        }
                        else{
                            slider[counter-i].style.display = "none";
                            slider[counter-i].style.display = "none";
                        }
                        
                        
                        }
       
    }


)

prevBtn.addEventListener("click", function(){
    counter--;
    if(counter<(slider.length-6)){
        counter = slider.length-1;}
    console.log(counter);
    slider[counter].style.display = "block";

                    for(let i=1;i<slider.length;i++){
                        if(i>counter){
                            slider[i].style.display = "none";
                            slider[i].style.display = "none"; 
                        }
                        else{
                            slider[counter-i].style.display = "none";
                            slider[counter-i].style.display = "none";
                        }
                        
                        
                        }
       
    }
)
