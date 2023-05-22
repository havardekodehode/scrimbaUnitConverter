
const convertButton = document.getElementById("convertButton")

let lengthEl = document.getElementById("len")
let volEl = document.getElementById("vol")
let massEl = document.getElementById("mass")

convertButton.addEventListener("click", function(){
    let inputEl = document.getElementById("input")


    let feet = Number(inputEl.value) * 3.2808399
    let meters =  Number(inputEl.value) * 0.3048
    let gal =  Number(inputEl.value) * 0.264172052
    let liters = Number(inputEl.value) * 3.78541178
    let pounds =  Number(inputEl.value) * 2.20462262
    let kilos =  Number(inputEl.value) * 0.453592

    let len = `${convertButton.textContent} meters = ${feet.toFixed(3)} feet| ${convertButton.innerText} feet = ${meters.toFixed(3)} meters`
    let vol = `${convertButton.textContent} liters = ${gal.toFixed(3)} gallons | ${convertButton.innerText} gallons = ${liters.toFixed(3)} liters`
    let mass = `${convertButton.textContent} kilos = ${pounds.toFixed(3)} pounds| ${convertButton.innerText} pounds = ${kilos.toFixed(3)} kilos`

    lengthEl.textContent = len
    volEl.textContent= vol
    massEl.textContent= mass
})