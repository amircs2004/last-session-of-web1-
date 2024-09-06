let convertEL = document.querySelector("#convert")
let temperatureEL = document.getElementById("temperature")
let resultEL = document.getElementById("result")
let outputEL = document.getElementById("output")

console.log(resultEL);

resultEL.textContent = ""

convert()
function convert() {

    let f = temperatureEL.value
    let cTf=  (f * 9/5) + 32
    resultEL.innerText = cTf
}
convertEL.addEventListener("submit" , convert())

if (temperatureEL === "") {
    resultEL.innerText = ""
}
