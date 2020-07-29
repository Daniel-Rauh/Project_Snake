const main = document.querySelector("body")
let field = document.createElement("section")
field.id = "snakeField"
main.appendChild(field)
for (let i = 0; i < 100; i++) {
    let box = document.createElement("div")
    box.className = "item"
    field.appendChild(box)
    box.addEventListener("mouseover",fieldChange)
}
function fieldChange() {
    let color = `linear-gradient(rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}), rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}), rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}))`
    let tempBox = event.target
    tempBox.style.background = color
    setTimeout(() => {
        tempBox.style.background = "lightblue"
    }, 500)
}