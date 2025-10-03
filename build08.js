let mainOne = document.getElementById("main1")
let mainTwo = document.getElementById("main2")

let f1b1 = document.getElementById("f1b1")
let f1b2 = document.getElementById("f1b2")
let f1b3 = document.getElementById("f1b3")
let f2b1 = document.getElementById("f2b1")
let f2b2 = document.getElementById("f2b2")
let f2b3 = document.getElementById("f2b3")

let clear = document.getElementById("clear")


let count = 0
let count1 = 0

f1b1.addEventListener("click", function() {
   count += 1
    mainOne.textContent = count
})

f1b2.addEventListener("click", function() {
   count += 2
    mainOne.textContent = count
})

f1b3.addEventListener("click", function() {
   count += 3
    mainOne.textContent = count
})


f2b1.addEventListener("click", function() {
   count1 += 1
    mainTwo.textContent = count1
})


f2b2.addEventListener("click", function() {
   count1 += 2
    mainTwo.textContent = count1
})

f2b3.addEventListener("click", function() {
   count1 += 3
    mainTwo.textContent = count1
})


clear.addEventListener("click", function() {
   count = 0
   count1 = 0
   mainOne.textContent = count
  mainTwo.textContent = count1
 
})







