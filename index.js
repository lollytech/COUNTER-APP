document.title = "Islamic Counter"

let count = document.getElementById("count")
let err = document.getElementById("err")

let counter = 0;

const increase = ()=>{
    if (counter < 1000) {
        counter += 1;
        count.textContent = counter;
        
    } else {
        counter = 1000;
        err.textContent = "Counter cannot be greater than 1000"
        
    }
}


const decrease = ()=>{
    if (counter > 0) {
        counter -=1
        count.textContent = counter
    } else {
        counter = 0
        err.textContent = "Counter  be lesser than 0"
        err.style.display = "none"
    }
}