const body1 = document.querySelector("body");
// console.log(body1);
const toggle1 = document.getElementById("toggleDark");
// console.log(toggle1);
toggle1.addEventListener("click",function(e){
    this.classList.toggle("bi-moon");
    // console.log(toggle1);
    // console.log(this);
    if(this.classList.toggle("bi-brightness-high-fill")){
        body1.style.background = "white";
        body1.style.color = "black";
        body1.style.transition = "3s";
    } else{
        body1.style.background = "black";
        body1.style.color = "white";
        body1.style.transition = "3s";
    }
})