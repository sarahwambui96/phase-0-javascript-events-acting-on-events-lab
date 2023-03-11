// Your code here
const dodger = document.getElementById("dodger");
//moveDodgerLeft function
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace ("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}
// write our event listener
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

//moveDodgerRight function
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0){
        dodger.style.left = `${left + 1}px`;
    }
}
//write out event listener
document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowRight");
    moveDodgerRight();
});