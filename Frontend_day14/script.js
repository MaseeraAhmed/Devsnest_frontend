
let container = document.querySelector(".container1")
let pointer = document.querySelector(".pointer")

container.addEventListener("mouseover", (event) =>{
    pointer.style.display = "block"
})

container.addEventListener("mousemove", (event) =>{
    console.log("mousemove", event)
    let x = event.offsetX
    let y = event.offsetY

    console.log(x,y)
    x -= pointer.offsetWidth/2
    y -= pointer.offsetHeight/2

    pointer.style.left = `${x}px`
    pointer.style.top = `${y}px`
})

container.addEventListener("mouseout", (event) =>{
    pointer.style.display = "none"
})



let boxes = document.querySelectorAll(".box")
let items = document.querySelectorAll(".item")

let selectedItem = null;

for(let item of items){
    item.addEventListener("dragstart", (event) => {
        selectedItem = event.target
    })
    
    item.addEventListener("dragend", (event) => {
        
    })
}

for(let box of boxes){
    box.addEventListener("dragover", (event) => {
        event.preventDefault()
    })
    box.addEventListener("drop", (event) => {
        console.log(event)
        
        selectedItem.parentNode.removeChild(selectedItem)
        box.append(selectedItem)
    })
}