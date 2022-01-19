const user = document.querySelector('.user');
const password = document.querySelector('.password');
const submit = document.querySelector('.btn');
function sub() {

    if (user.value == 'admin' && password.value == 'admin') {
        location.href = 'html/number.html';
    }
    else {
        user.placeholder = '请检查账号密码是否正确';
        // password.value = '请检查密码';
    }
}
submit.addEventListener('click', sub);