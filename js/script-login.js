/**===============================
 * Troca do banner
 *===============================*/
const body = document.querySelector('body');

const btnSeta = document.querySelectorAll(".btn-seta");

const btnCirculo = document.querySelectorAll(".btn-circulo");

let i = 0;
let cont = 0;

circulos();

btnSeta.forEach(function(btn){
    btn.addEventListener('click', () => {
        
        if(i === 0){
            banner2.classList.add('active');
            banner1.classList.remove('active');
            body.classList.add('active');

            i++;
        } else if(i === 1){
            banner1.classList.add('active');
            banner2.classList.remove('active');
            body.classList.remove('active');

            i = 0;
        }

        if(cont < 3){
            cont++
        } else if(cont === 3){
            cont = 0;
        }
        circulos();

    });
});

btnCirculo.forEach(function(btn){
    btn.addEventListener('click', () => {
        if(i === 0){
            banner2.classList.add('active');
            banner1.classList.remove('active');
            body.classList.add('active');

            i++;
        } else if(i === 1){
            banner1.classList.add('active');
            banner2.classList.remove('active');
            body.classList.remove('active');

            i = 0;
        }

        if(btn === btnCirculo[0]){
            btnCirculo[0].style.background = "white";
            btnCirculo[1].style.background = "none";
            btnCirculo[2].style.background = "none";
            btnCirculo[3].style.background = "none";
            cont = 0;
        } else if(btn === btnCirculo[1]){
            btnCirculo[0].style.background = "none";
            btnCirculo[1].style.background = "white";
            btnCirculo[2].style.background = "none";
            btnCirculo[3].style.background = "none";
            cont = 1;
        } else if(btn === btnCirculo[2]){
            btnCirculo[0].style.background = "none";
            btnCirculo[1].style.background = "none";
            btnCirculo[2].style.background = "white";
            btnCirculo[3].style.background = "none";
            cont =2;
        } else if(btn === btnCirculo[3]){
            btnCirculo[0].style.background = "none";
            btnCirculo[1].style.background = "none";
            btnCirculo[2].style.background = "none";
            btnCirculo[3].style.background = "white";
            cont = 3;
        }
        
    });
    
});

function circulos(){
    if(cont === 0){
        btnCirculo[0].style.background = "white";
        btnCirculo[1].style.background = "none";
        btnCirculo[2].style.background = "none";
        btnCirculo[3].style.background = "none";
    } else if(cont === 1){
        btnCirculo[0].style.background = "none";
        btnCirculo[1].style.background = "white";
        btnCirculo[2].style.background = "none";
        btnCirculo[3].style.background = "none";
    } else if(cont === 2){
        btnCirculo[0].style.background = "none";
        btnCirculo[1].style.background = "none";
        btnCirculo[2].style.background = "white";
        btnCirculo[3].style.background = "none";
    } else if(cont === 3){
        btnCirculo[0].style.background = "none";
        btnCirculo[1].style.background = "none";
        btnCirculo[2].style.background = "none";
        btnCirculo[3].style.background = "white";
    }
}

/**===============================
 * Troca de tela do formulario
 *===============================*/
const btnRedefinirSenha = document.querySelector('#btnRedefinirSenha');

const btnCadastro = document.querySelector('#btnCadastrado');

const boxLoginForm = document.querySelector(".box-login-form");

const boxLoginRedefinir = document.querySelector(".box-login-redefinir");

btnRedefinirSenha.addEventListener('click', () => {
    boxLoginForm.classList.remove('active');
    boxLoginRedefinir.classList.add("active");
});

btnCadastrado.addEventListener('click', () => {
    boxLoginForm.classList.add('active');
    boxLoginRedefinir.classList.remove("active");
});






/**===============================
 * Caixa de Erro Personalizada
 *===============================*/

const usuario = document.querySelector('#txt-usuario');
const senha = document.querySelector('#txt-senha');

const boxMsg = document.querySelector('#box-msg');
const btnClose = document.querySelector('#btnClose');


const btnAcessar = document.querySelector('#btn-acessar');

btnAcessar.addEventListener('click', () => {
    if(usuario.value !== '' && senha.value !== ''){
        alert("Página em Construção")
    } else {
        boxMsg.classList.add('active');
    }
});

btnClose.addEventListener('click', () => {
    boxMsg.classList.remove('active');
});