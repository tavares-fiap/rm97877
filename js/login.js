"use strict";

addEventListener("click", (evt)=>{
    
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
    
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");

    const usuarioLogado = {
        nomeUsuarioLogado: inputUser.value,
        senhaUsuarioLogado: inputPass.value
    }

    if(evt.target.id == "btnSubmit"){
        
        if(inputUser.value.length > 3 && inputPass.value.length > 3){
            // inputUser.setAttribute("style", "outline-color:#00ff00;")
            // inputPass.setAttribute("style", "outline-color:#00ff00;")
            labelUser.setAttribute("style","color:#00ff00;");
            labelPass.setAttribute("style","color:#00ff00;");
                if(usuarioLogado.nomeUsuarioLogado == "tutu" && usuarioLogado.senhaUsuarioLogado == "123456"){
                    alert("VALIDADO!");
                }else{
                    alert("NÃO VLIDADO");
                }
        }else{
            labelUser.setAttribute("style","color:#ff0000;");
            labelPass.setAttribute("style","color:#ff0000;");
        }
        
    }
});