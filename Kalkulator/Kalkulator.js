const Tall1 = document.querySelector("#tall1")
const Tall2 = document.querySelector("#tall2")
const knapPluss = document.querySelector("#pluss")
const svar = document.querySelector("svar")

knapPluss.onclick = function () {
    let tall1 = Number(Tall1.value)
    let tall2 = Number(Tall1.value)
    let svar = tall1 + tall2
    svar.innerHTML = svar
}
