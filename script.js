

let countEL = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

console.log(countEL)

let count = 0

function increment() {
    count = count + 1
    countEL.textContent = count
    console.log(count)
}
increment()


// document.getElementById()

function save() {

    let countStr= count + " - "
    saveEl.innerText += " "+countStr
    console.log(count)
}
save()