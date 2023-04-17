//Recuperando botão com GetElementById
const botao = document.getElementById('btn-1');


//Recupera um item especifico com a
// função querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)



//Recuperar uma lista de elementos com a função querySelectorAll
const seletores = document.querySelectorAll("li");

seletores.forEach((item)=>{
    
    if(item.textContent == 'Item-15') {
        
        let meuItem = item;
        console.log(`Item selecionado: ${item.textContent} `)
        meuItem.textContent = "Tá DOMINADO!!"
    }


})

//setTimeOut
//setInterval
//Random
//Math.Ceil
//Math.Random
//Math.Floor