const nome = prompt('Qual o seu nome?')

alert(`Login = ${nome} | Senha = 123 `)

const btnSubmit = document.querySelector('.btnSubmit')

btnSubmit.addEventListener("click", () => {
    const Login = document.querySelector('.LoginInput')
    const password = document.querySelector('.PasswordInput')

    const p = document.querySelector('.loginWrong')
    if (Login.value == nome && password.value == '123') {
  window.location.href='PAGES/whoWatching/index.html'
    } else {
              p.textContent = 'Senha ou login incorreta!'
    }

})