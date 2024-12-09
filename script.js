let usuarios = []
function ircadastro(){
    if(document.getElementById('cadastro').style.display == 'block'){

        document.getElementById('cadastro').style.display = 'none'

    }else{

        document.getElementById('cadastro').style.display = 'block'

    }
}
function irlogin(){
    if(document.getElementById('login').style.display == 'block'){

        document.getElementById('login').style.display = 'none'

    }else{

        document.getElementById('login').style.display = 'block'

    }
}
function cadastro(){
    //JSON JavaScript Object Notation
    let usuario = gerarUsuario()
    usuarios.push(usuario)
    usuarios.indexOf(usuario)
    alert("Cadastro Efetuado com sucesso!")      
    if(document.getElementById('cadastro').style.display == 'block'){

        document.getElementById('cadastro').style.display = 'none'

    }else{

        document.getElementById('cadastro').style.display = 'block'

    }                    
}


function logar(){
    let loginn = document.getElementById("loginn").value
    let senhaa = document.getElementById("senhaa").value
    let usuario = autenticar(loginn, senhaa)
    if(usuario == null){
        alert("Login ou senha incorreta!")
    }
    else{
        alert("Bem vindo, "+usuario.email)
    }
    if(document.getElementById('login').style.display == 'block'){

        document.getElementById('login').style.display = 'none'

    }else{

        document.getElementById('login').style.display = 'block'

    }
}

function gerarUsuario(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let usuario = {email, password}
    return usuario
}

function autenticar(Login, senha){
    for(let usuario of usuarios){
        if(Login == usuario.email && senha == usuario.password){
            return usuario
        }
    }
    return null
}

function listar(){
    let tabela = "Usuarios!"
    for (let usuario of usuarios) {
        tabela += "\n" + usuario
    }
    alert(tabela)
}