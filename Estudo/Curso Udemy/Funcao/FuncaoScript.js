var largura = prompt('Informe a largura')
var comprimento = prompt('Informe o comprimento')

document.write('O resultado do calculo é: ' + CalcularArea(largura, comprimento) + ' metros quadrados')

function CalcularArea(largura, comprimento) {
    var area = largura * comprimento

    return area
}