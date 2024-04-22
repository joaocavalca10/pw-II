let btn = document.getElementById('btn')

let div = document.getElementById('resultado')

let arrPessoas = []


function cadastrar() {

    let pessoa = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        idade: document.getElementById('idade').value,
        dtNasc:  document.getElementById('dtnasc').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value
    }

    arrPessoas.push(pessoa)
    console.log(arrPessoas);

    imprimirDados()



    console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.dtNasc, pessoa.peso, pessoa.altura);


}

function calcularIMC(peso, altura){
    return peso / Math.pow(altura, 2)
}


function classificacao(imc){

    if (imc <= 18.5) {
        return "Abaixo do normal"
    } else if (imc > 18.5 && imc <= 24.9) {
        return "Normal"
    } else if (imc <= 29.9) {
        return "Sobre peso"
    } else if (imc <= 34.9) {
        return "Obesiadeda Grau I"
    } else if (imc <= 39.9) {
        return "Obesiadeda Grau II"
    } else {
        return "Obesiadeda Grau III"
    }


}


function imprimirDados(){

    div.innerHTML = ''

    for(let i = 0; i < arrPessoas.length; i++){

        div.innerHTML += `
            <tr>
                <td>${arrPessoas[i].nome} ${arrPessoas[i].sobrenome}</td>
                <td>${arrPessoas[i].dtNasc}</td>
                <td> ${arrPessoas[i].idade}</td>
                <td>${calcularIMC(arrPessoas[i].peso, arrPessoas[i].altura).toFixed(2)} -
                (${classificacao(calcularIMC(arrPessoas[i].peso, arrPessoas[i].altura))})</td>
            </tr>
         `
    }
}


btn.addEventListener('click', cadastrar)



