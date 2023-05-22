"use strict";



let listaDeUsuarios = [
    {
        nomeCokpleto : "José das Couves",
        nomeUsuario : "jose",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Ruivao",
        nomeUsuario : "ruivao",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Filipino de Deus",
        nomeUsuario : "fili",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Ricardo Nelson",
        nomeUsuario : "ricardo",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Christiano Lionel Ronaldo Fenomeno Junior",
        nomeUsuario : "ribamar",
        senhaUsuario : "123456"
    },
];

addEventListener("click", (evt)=>{
    
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
    
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");

    const msgStatus = document.querySelector("#msg");
    
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


            listaDeUsuarios.forEach( (usuario) => {

                if(usuarioLogado.nomeUsuarioLogado == "tutu" && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario){
                    msgStatus.setAttribute("style", "color:#00ff00;");
                    msgStatus.innerHTML = <span><strong>Login efetuado com sucesso!</strong></span>;
                    
                    
                    usuarioValidado = usuario;
                    
                    
                }else{
                    msgStatus.setAttribute("style", "color:#00ff00;");
                    msgStatus.innerHTML = <span><strong>Login ou senha incorretos...</strong></span>;
                }
            });
            
            if(usuarioValidado.nomeUsuario != ""){
                msgStatus.setAttribute("style", "color:#00ff00;");
                msgStatus.innerHTML = <span><strong>Login efetuado com sucesso!</strong></span>;
                
            }

            }else{
            labelUser.setAttribute("style","color:#ff0000;");
            labelPass.setAttribute("style","color:#ff0000;");
        }
        
    }
});