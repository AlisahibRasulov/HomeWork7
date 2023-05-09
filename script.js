const incBtn = document.querySelector(".inc-btn")
const decBtn = document.querySelector(".dec-btn")
const clearBtn = document.querySelector(".clear-btn")

const incBtn2 = document.querySelector(".inc-btn2")
const decBtn2 = document.querySelector(".dec-btn2")
const clearBtn2 = document.querySelector(".clear-btn2")

let counter
let counter1

if(localStorage.getItem("counter")>0){
    counter = document.querySelector(".count").innerText = localStorage.getItem("counter")
} else{
    counter = 0
}

if(localStorage.getItem("counter1")>0){
    counter1 = document.querySelector(".count1").innerText = localStorage.getItem("counter1")
} else{
    counter1 = 0
}


let increment = ()=>{
    counter++
    localStorage.setItem("counter",counter)
    document.querySelector(".count").innerText = counter
}

let decrement = ()=>{
    if(counter>0){
        counter-- 
     }else{
        alert("Mehsul elave edin");
     }
     localStorage.setItem("counter",counter)
     document.querySelector(".count").innerText = counter
}

let clear = ()=>{
    counter = 0
    localStorage.removeItem("counter",counter)
    document.querySelector(".count").innerText = counter
}

let increment1 = ()=>{
    counter1++
    localStorage.setItem("counter1",counter1)
    document.querySelector(".count1").innerText = counter1
}

let decrement1 = ()=>{
    if(counter1>0){
        counter1-- 
     }else{
        alert("Mehsul elave edin");
     }
     localStorage.setItem("counter1",counter1)
     document.querySelector(".count1").innerText = counter1
}

let clear1 = ()=>{
    counter1 = 0
    localStorage.removeItem("counter1",counter1)
    document.querySelector(".count1").innerText = counter1
}



incBtn.addEventListener("click",()=>{
    increment()
})
decBtn.addEventListener("click",()=>{
    decrement()
})
clearBtn.addEventListener("click",()=>{
    clear()
    counter.style.color = "red"
})
incBtn2.addEventListener("click",()=>{
    increment1()
})
decBtn2.addEventListener("click",()=>{
    decrement1()
})
clearBtn2.addEventListener("click",()=>{
    clear1()
})
