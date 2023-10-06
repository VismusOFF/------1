const email = document.getElementById('useremail1')
const login = document.getElementById('username1')
const password = document.getElementById('password1')
const confirmPassword = document.getElementById('confirm-password1')

const btnPush1 = document.getElementById('btn-push-registration')

const dataReg = {
    email: '1',
    login: '1',
    password: '1',
    confirmPassword: '1',
}

btnPush1.onclick = () => {
    if (dataReg.email === email.value && dataReg.login === login.value && dataReg.password === password.value && dataReg.confirmPassword === confirmPassword.value) 
    {
        window.location.href = '/pages/notes.html'
    }
}