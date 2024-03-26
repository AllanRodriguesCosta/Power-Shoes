function togglePasswordVisibility(inputId) {
    var passwordInput = document.querySelector(`#${inputId}`);
    var toggleButton = document.querySelector(`button[data-input-id="${inputId}"]`);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }

    // Update the border color of the input
    if (passwordInput.type === "password") {
        passwordInput.style.borderColor = '#000000';
    } else {
        passwordInput.style.borderColor = '#ff0d00';
    }

    if (passwordInput.type === "text"){
        passwordInput.style.borderColor = '#ff0d00';
    } else {
        passwordInput.style.borderColor = '#000000';
    }
    }


// Adding functionality to change the border color on mouseover for the login password input
var toggleButton1 = document.querySelector('.toggleSenha');
var passwordInput1 = document.getElementById(toggleButton1.getAttribute('data-input-id'));

function changeBorderColor() {
    passwordInput1.style.borderColor = '#ff0d00';
}

toggleButton1.addEventListener('mouseover', changeBorderColor);

toggleButton1.addEventListener('mouseout', function() {
    passwordInput1.style.borderColor = '#000000';
});

toggleButton1.addEventListener('click', function() {
    changeBorderColor();
});

// Adding functionality to change the border color on mouseover for the signup password input
var toggleButton2 = document.querySelector('.toggleSenha1');
var passwordInput2 = document.getElementById(toggleButton2.getAttribute('data-input-id'));

toggleButton2.addEventListener('mouseover', function() {
    passwordInput2.style.borderColor = '#ff0d00';
});

toggleButton2.addEventListener('mouseout', function() {
    passwordInput2.style.borderColor = '#000000';
});

// Adding functionality to change the border color on mouseover for the signup confirm password input
var toggleButton3 = document.querySelector('.toggleSenha2');
var passwordInput3 = document.getElementById(toggleButton3.getAttribute('data-input-id'));

toggleButton3.addEventListener('mouseover', function() {
    passwordInput3.style.borderColor = '#ff0d00';
});

toggleButton3.addEventListener('mouseout', function() {
    passwordInput3.style.borderColor = '#000000';
});

function validarFormulario() {
    // Obtenha os valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senhaCadastroLogin2").value;
    var confirmarSenha = document.getElementById("senhaCadastroLogin3").value;

    // Verifique se algum campo está vazio
    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verifique se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Se todos os campos estiverem preenchidos corretamente, envie o formulário
    alert("Formulário enviado com sucesso!");
    // Aqui você pode adicionar o código para enviar os dados para o servidor
}

function enviarFormulario() {
    // Obtenha os valores dos campos
    var nomeLogin = document.getElementById("nomeLogin").value;
    var senhaLogin = document.getElementById("senhaCadastroLogin").value;

    // Verifique se algum campo está vazio
    if (nomeLogin === "" || senhaLogin === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Se todos os campos estiverem preenchidos corretamente, envie o formulário
    alert("Login efetuado com sucesso!");
    // Aqui você pode adicionar o código para enviar os dados para o servidor
}
