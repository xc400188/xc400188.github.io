const btn = document.querySelector('.btn');
const user = document.querySelector('.user');
const password = document.querySelector('.password');
//检测button按钮
function Login() {
    let user = Number(user.value);
    let password = password.value;
    alert(user);
    //for (let i = 0; i < user.length; i++) {
    //const element = user[i];
    if (user.value === 123 && password.value === 123) {
        alert(33);
    }
    // }
}
btn.addEventListener('click', Login);
// document.getElementById("from").addEventListener('click', Login);