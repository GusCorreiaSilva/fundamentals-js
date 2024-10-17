function verificarAcesso(perfil) {

    if (perfil === "administrador") {

        return console.log("Bem vindo(a), administrador");

    } else if (perfil === "moderador") {

        return console.log("Bem vindo(a) moderador, você pode gerenciar o conteúdo");
        
    }

    switch (perfil) {
        
        case "assinante": return console.log("Ola assinante! Aproveite o conteúdo disponivel");
        
        default : let noAccess = perfil === "" ? console.log("Perfil não especificado") : console.log("Acesso negado");  
    }

}

verificarAcesso("administrador");
verificarAcesso("moderador");
verificarAcesso("assinante");
verificarAcesso("");
verificarAcesso("visitante");