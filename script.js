function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;


    if (nome.t === '' || nome.length < 8) {
        alert("O campo NOME deve conter pelo menos 8 caracteres!");
        return false;
    }

    if (email === '') {
        alert("O campo de e-mail não pode ficar em branco.");
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("O campo de e-mail deve conter '@' e '.'.");
        return false;
    }

   
    if (senha === '' || senha.length < 8) {
        alert("O campo SENHA deve conter pelo menos 8 caracteres!");
        return false;
    }

    if (cpf === '' || cpf.length < 11) {
        alert("O campo CPF deve conter pelo menos 11 caracteres!");
        return false;
    }

    
    if (!validarCPF(cpf)) {
        alert("CPF inválido! Por favor, insira um CPF válido.");
        return false;
    }

    return true;
}

function validarCPF(cpf) {
    var cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999") {
        return false;
    }

    add = 0;
    for (i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;

    add = 0;
    for (i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) {
        alert("Insira um CPF válido");
        return false;
    }

    return true;
}
