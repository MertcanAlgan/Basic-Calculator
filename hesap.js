// value gösterme
function dis(val) {
document.getElementById("ekran").value+=val
 }
//sonuç
function solve() {
let x = document.getElementById("ekran").value
let y = eval(x)
document.getElementById("ekran").value = y
}
//ac
function clr() {
document.getElementById("ekran").value = ""
}
