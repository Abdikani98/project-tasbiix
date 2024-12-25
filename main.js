let value = document.querySelector("#value")
let increment = document.querySelector("#incr")
let reset = document.querySelector("#reset")
let decrement = document.querySelector("#decr")
let div = document.querySelector("#div")


let startValue = 0;

increment.addEventListener("click", () => {
    startValue ++;
    value.innerHTML = startValue

    if(startValue==10){
        value.style.color = "red"
    }else{
         value.style.color = "black"
    }

    if(startValue==20){
        div.style.backgroundColor = "red"
    }else{
        div.style.backgroundColor = "white"
    }
})


decrement.addEventListener("click", () => {
    if(startValue>0){
        startValue --;
        value.innerHTML = startValue

        if(startValue==10){
            value.style.color = "red"
        }else{
             value.style.color = "black"
        }
    }


    if(startValue==20){
        div.style.backgroundColor = "red"
    }else{
        div.style.backgroundColor = "white"
    }
   
})

reset.addEventListener("click", () => {
    startValue = 0;
    value.innerHTML = startValue

    if(startValue==20){
        div.style.backgroundColor = "white"
    }
})

