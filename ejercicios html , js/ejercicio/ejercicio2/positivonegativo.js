function verificarnumero() {
    let number = parseFloat(document.getElementById("numberImput").value)
    let resultElement = document.getElementById("resultado")


    //+comensar con condicional+//

    if (number > 0) {
        resultElement.textContent = "el numero es positivo"
    }
    else if (number < 0) {
        resultElement.textContent = "el numero es negativo"
    }
    else {
        resultElement.textContent = "el numero es cero"
    }
}