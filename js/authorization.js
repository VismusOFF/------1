const login = document.getElementById('input-login-authorization')
const password = document.getElementById('input-password-authorization')
const btnPush = document.getElementById('btn-push-authorization')

const dataLP = {
  login: '1',
  password: '1',
}

btnPush.onclick = () => {
  console.log('test')

  if (dataLP.login === login.value && dataLP.password === password.value) {
    window.location.href = '/pages/notes.html'
  }
}