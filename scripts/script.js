let cadastro = false;

document.getElementById("toggle").onclick = () =>{

    cadastro = !cadastro;

    document.getElementById("title").innerText = cadastro ? "Cadastrar" : "Entrar";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar";

    document.getElementById("toggle").innerText = cadastro 
    ? "Ja tem conta? faça login!" 
    : "Não tem conta? Cadastre-se!";

    document.getElementById("mensagem").innerText = "";
}

    document.getElementById("form-login").onsubmit = (e) =>{

        e.preventDefault();

        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        let mensagem = document.getElementById('mensagem');

        mensagem.innerHTML = "";

        if (!email.includes("@") || (!email.includes("."))){
            mensagem.innerHTML = "<div class='erro'><p>Email invalido!</p></div>";
            return;
        }

        if (senha.length < 4){
            mensagem.innerHTML = "<div class='erro'><p>Senha muito curta!</p></div>";
            return;
        }

        if(cadastro){
            localStorage.setItem(email, senha);
            mensagem.innerHTML = "<div class='sucesso'><p>Cadastrado com sucesso!</p></div>";
        } else {

            let salva = localStorage.getItem(email);

            if(salva === senha){
                mensagem.innerHTML = "<div class='sucesso'><p>logado com sucesso</p></div>";
            } else {
                mensagem.innerHTML = "<div class='erro'><p>dados invalidos!</p></div>";
            }
        }

        document.getElementById("form-login").reset;
    }