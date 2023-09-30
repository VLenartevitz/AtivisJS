const n1 = document.querySelector('.n1');
const n2 = document.querySelector('.n2');
const p = document.querySelector('p');

function somar() {
  p.innerText = Number.parseInt(n1.value) + Number.parseInt(n2.value);
}
function subtrair() {
  p.innerText = Number.parseInt(n1.value) - Number.parseInt(n2.value);
}
function dividir() {
  p.innerText = Number.parseInt(n1.value) / Number.parseInt(n2.value);
}
function multiplicar() {
  p.innerText = Number.parseInt(n1.value) * Number.parseInt(n2.value);
}
