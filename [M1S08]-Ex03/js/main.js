let novoElemento = document.createElement ('span')

let texto = document.createTextNode("Crie um novo elemento e adicione-o como filho de outro elemento na página HTML.");

novoElemento.appendChild(texto)

let enunciado = document.getElementById('enunciado')

enunciado.appendChild(novoElemento)