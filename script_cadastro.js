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

function shakeInput(inputId) {
    var inputElement = document.getElementById(inputId);
    inputElement.classList.add("shake");
    inputElement.style.borderWidth = "2px"; // Define a espessura da borda como 2px durante a animação
    inputElement.style.borderColor = "#ff0d00"; // Muda a cor da borda para #ff0d00 durante a animação

    setTimeout(function() {
        inputElement.classList.remove("shake");
        inputElement.style.borderWidth = ""; // Remove a definição de espessura da borda para voltar ao padrão
        inputElement.style.borderColor = ""; // Remove a definição de cor da borda para voltar ao padrão
    }, 1000); // Durante 1 segundo
}

function exibirMensagemSenha(elemento, mensagem) {
    var mensagemElemento = elemento.nextElementSibling; // Obtém o próximo elemento do mesmo nível que o botão
    if (!mensagemElemento || !mensagemElemento.classList.contains('mensagem_senha')) {
        mensagemElemento = document.createElement('span');
        mensagemElemento.classList.add('mensagem_senha');
        elemento.parentNode.insertBefore(mensagemElemento, elemento.nextSibling);
    }
    mensagemElemento.textContent = mensagem;

        // Defina um temporizador para remover a mensagem após 3 segundos (3000 milissegundos)
        setTimeout(function() {
            if (mensagemElemento && mensagemElemento.parentNode) {
                mensagemElemento.parentNode.removeChild(mensagemElemento);
            }
        }, 3000); // 3 segundos
    }

function exibirMensagemCampos(elemento2, mensagem2) {
    var mensagemElemento2 = elemento2.nextElementSibling; // Obtém o próximo elemento do mesmo nível que o botão
    if (!mensagemElemento2 || !mensagemElemento2.classList.contains('mensagem_preencha_campos')) {
        mensagemElemento2 = document.createElement('span');
        mensagemElemento2.classList.add('mensagem_preencha_campos');
        elemento2.parentNode.insertBefore(mensagemElemento2, elemento2.nextSibling);
    }
    mensagemElemento2.textContent = mensagem2;

        // Defina um temporizador para remover a mensagem após 3 segundos (3000 milissegundos)
        setTimeout(function() {
            if (mensagemElemento2 && mensagemElemento2.parentNode) {
                mensagemElemento2.parentNode.removeChild(mensagemElemento2);
            }
        }, 3000); // 3 segundos
    }

function exibirMensagemCamposLogin(elemento3, mensagem3) {
    var mensagemElemento3 = elemento3.nextElementSibling; // Obtém o próximo elemento do mesmo nível que o botão
    if (!mensagemElemento3 || !mensagemElemento3.classList.contains('mensagem_preencha_campos_login')) {
        mensagemElemento3 = document.createElement('span');
        mensagemElemento3.classList.add('mensagem_preencha_campos_login');
        elemento3.parentNode.insertBefore(mensagemElemento3, elemento3.nextSibling);
    }
    mensagemElemento3.textContent = mensagem3;

        // Defina um temporizador para remover a mensagem após 3 segundos (3000 milissegundos)
        setTimeout(function() {
            if (mensagemElemento3 && mensagemElemento3.parentNode) {
                mensagemElemento3.parentNode.removeChild(mensagemElemento3);
            }
        }, 3000); // 3 segundos
    }


function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senhaCadastroLogin2").value;
    var confirmarSenha = document.getElementById("senhaCadastroLogin3").value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        // Adiciona a animação de shake para os campos vazios
        if (nome === "") shakeInput("nome");
        if (email === "") shakeInput("email");
        if (senha === "") shakeInput("senhaCadastroLogin2");
        if (confirmarSenha === "") shakeInput("senhaCadastroLogin3");
        exibirMensagemCampos(document.querySelector('.btn_enviar_cadastro'), "Por favor, preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        shakeInput("senhaCadastroLogin2");
        shakeInput("senhaCadastroLogin3");
        exibirMensagemSenha(document.querySelector('.btn_enviar_cadastro'), "As senhas não coincidem.");
        return;
    }

    alert("Formulário enviado com sucesso!");
}

function enviarFormulario() {
    var nomeLogin = document.getElementById("nomeLogin").value;
    var senhaLogin = document.getElementById("senhaCadastroLogin").value;

    if (nomeLogin === "" || senhaLogin === "") {
        if (nomeLogin === "") shakeInput("nomeLogin");
        if (senhaLogin === "") shakeInput("senhaCadastroLogin");
        exibirMensagemCamposLogin(document.querySelector('.btn_enviar_cadastro'), "Por favor, preencha todos os campos.");
        return;
    }

    alert("Login efetuado com sucesso!");
}

function toggleForm() {
    var formLogin = document.querySelector('.form_log_in');
    var formCadastro = document.querySelector('.form_cadastro');
    var formItensCadastro = document.querySelector('.form_tens_cadastro');
    var toggleLoginButton = document.querySelector('.toggle_form.login');
    var toggleCadastroButton = document.querySelector('.toggle_form.cadastro');

    formLogin.classList.toggle('hide');
    formCadastro.classList.toggle('show');
    formItensCadastro.classList.toggle('show');
    toggleLoginButton.classList.toggle('rotated');
    toggleCadastroButton.classList.toggle('rotated');

        // Altera o texto do botão ao girar
        if (toggleLoginButton.classList.contains('rotated')) {
            toggleLoginButton.innerText = "CADASTRO";
        } else {
            toggleLoginButton.innerText = "LOG IN";
        }

    if (formLogin.classList.contains('hide')) {
        // Primeira etapa: formulários se movem para os lados e alteram escala
        formLogin.style.transition = 'transform 0.5s ease-out';
        formLogin.style.transform = 'translateX(-90%) scale(0.5)';
        formCadastro.style.transition = 'transform 0.5s ease-out';
        formCadastro.style.transform = 'translateX(10%) scale(0.5)';
        // Ajustando z-index
        formLogin.style.zIndex = '1';
        formCadastro.style.zIndex = '0';
        setTimeout(function() {
            // Segunda etapa: formulários retornam às posições iniciais
            formLogin.style.transition = 'transform 0.5s ease-out';
            formLogin.style.transform = 'translateX(-50%) scale(0.2)';
            formCadastro.style.transition = 'transform 0.5s ease-out';
            formCadastro.style.transform = 'translateX(-50%) scale(1)';
            // Ajustando z-index
            formLogin.style.zIndex = '0';
            formCadastro.style.zIndex = '1';

            toggleCadastroButton.style.zIndex = '2';
            toggleLoginButton.style.zIndex = '0';
        }, 500);

                // Altera o texto do botão de login
                toggleCadastroButton.querySelector('.button-text').textContent = 'LOGIN';
            } else {
                // Altera o texto do botão de login
                toggleCadastroButton.querySelector('.button-text').textContent = 'CADASTRO';
            }
}

function toggleFormLogin() {
    var formLogin = document.querySelector('.form_log_in');
    var formCadastro = document.querySelector('.form_cadastro');
    var formItensCadastro = document.querySelector('.form_tens_cadastro');
    var toggleLoginButton1 = document.querySelector('.toggle_form.login');
    var toggleCadastroButton1 = document.querySelector('.toggle_form.cadastro');

    formLogin.classList.toggle('hide');
    formCadastro.classList.toggle('show');
    formItensCadastro.classList.toggle('show');
    toggleLoginButton1.classList.toggle('rotated');
    toggleCadastroButton1.classList.toggle('rotated');

    

        // Altera o texto do botão ao girar
        if (toggleLoginButton1.classList.contains('rotated')) {
            toggleLoginButton1.innerText = "LOGIN";
        } else {
            toggleLoginButton1.innerText = "CADASTRO";
        }

    if (!formLogin.classList.contains('hide')) {
        // Primeira etapa: formulários se movem para os lados e alteram escala
        formLogin.style.transition = 'transform 0.5s ease-out';
        formLogin.style.transform = 'translateX(10%) scale(0.5)';
        formCadastro.style.transition = 'transform 0.5s ease-out';
        formCadastro.style.transform = 'translateX(-90%) scale(0.5)';
        // Ajustando z-index
        formLogin.style.zIndex = '0';
        formCadastro.style.zIndex = '1';

        // Segunda etapa: formulários retornam às posições iniciais após 500ms
        setTimeout(function() {
            formLogin.style.transform = 'translateX(-50%) scale(1)';
            formCadastro.style.transform = 'translateX(-50%) scale(0.2)';
            // Ajustando z-index
            formLogin.style.zIndex = '1';
            formCadastro.style.zIndex = '0';

            toggleCadastroButton1.style.zIndex = '0';
            toggleLoginButton1.style.zIndex = '2'; 
        }, 500);

                // Altera o texto do botão de login
                toggleCadastroButton1.querySelector('.button-text').textContent = 'CADASTRO';
            } else {
                // Altera o texto do botão de login
                toggleCadastroButton1.querySelector('.button-text').textContent = 'LOGIN';
            }
        
    
}

const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
});

var inputBuscar = document.getElementById('email');

// Limpar o texto quando o input recebe foco
inputBuscar.addEventListener('focus', function() {
    this.value = "";
});

// Restaurar o texto padrão quando o input perde o foco e está vazio
inputBuscar.addEventListener('blur', function() {
    if (this.value === "") {
        this.value = "user@youmail.com";
    }
});

var inputBuscar2 = document.getElementById('nomeLogin');

// Limpar o texto quando o input recebe foco
inputBuscar2.addEventListener('focus', function() {
    this.value = "";
});

// Restaurar o texto padrão quando o input perde o foco e está vazio
inputBuscar2.addEventListener('blur', function() {
    if (this.value === "") {
        this.value = " user@youmail.com";
    }
});
