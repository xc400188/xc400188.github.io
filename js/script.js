// 开始编写 JavaScript 代码

let randomNumber = Math.floor(Math.random() * 100) + 1;
//这里是生成随机数的函数，生成一个1-100的随机数，存储到randomNumber变量中。

const guesses = document.querySelector('.guesses');
//这里获取class=guesses的p标签。
const lastResult = document.querySelector('.lastResult');
//同理
const lowOrHi = document.querySelector('.lowOrHi');
//同理
const guessSubmit = document.querySelector('.guessSubmit');
//提交按钮
const guessField = document.querySelector('.guessField');
//输入域
let guessCount = 1;//已猜数字的次数
let resetbutton;//这里是重置按钮的变量
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '上次猜的数：';
        //这里生成一个提示，只在第一次猜数字的时候进行生成
    }
    guesses.textContent += userGuess + ' ';
    //进行拼接显示当前所有猜出来的值
    if (userGuess === randomNumber) {
        lastResult.textContent = '恭喜你！猜对了！';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = '你猜错了！';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = '你猜低了!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = '你猜高了！';
        }
    }
    guessCount++;
    // alert(guessCount);
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);
//时间监听，监听submit提交按钮，
//最后补全重置游戏的功能
function setGameOver() {
    guessField.disabled = true;
    //禁用表单文本输入
    guessSubmit.disabled = true;
    //禁用提交按钮
    resetbutton = document.createElement('button');
    //新建一个元素为button，并将文本设置为 “开始新游戏”
    resetbutton.textContent = '开始新游戏';
    // resetbutton.style.textAlign = center;
    document.body.appendChild(resetbutton);
    //设置样式
    resetbutton.addEventListener('click', resetGame);
}
function resetGame() {
    guessCount = 1;
    const resetparas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetparas.length; i++) {
        resetparas[i].textContent = '';
        //将所有的p段落清空
    }
    resetbutton.parentNode.removeChild(resetbutton);
    //删除重置按钮
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    //alert(randomNumber);
}

// 在此放置你的 JavaScript 代码
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// alert(randomNumber);
// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');
// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//     let userGuess = Number(guessField.value);
//     if (guessCount === 1) {
//         guesses.textContent = '上次猜的数: ';
//     }

//     guesses.textContent += userGuess + ' ';

//     if (userGuess === randomNumber) {
//         lastResult.textContent = '恭喜你！猜对了！';
//         lastResult.style.backgroundColor = 'green';
//         lowOrHi.textContent = '';
//         setGameOver();
//     } else if (guessCount === 10) {
//         lastResult.textContent = '!!!GAME OVER!!!';
//         lowOrHi.textContent = '';
//         setGameOver();
//     } else {
//         lastResult.textContent = '你猜错了！';
//         lastResult.style.backgroundColor = 'red';
//         if (userGuess < randomNumber) {
//             lowOrHi.textContent = '刚才你猜低了！';
//         } else if (userGuess > randomNumber) {
//             lowOrHi.textContent = '刚才你猜高了！';
//         }
//     }

//     guessCount++;
//     guessField.value = '';
// }

// guessSubmit.addEventListener('click', checkGuess);

// function setGameOver() {
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = '开始新游戏';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
// }

// function resetGame() {
//     guessCount = 1;
//     const resetParas = document.querySelectorAll('.resultParas p');
//     for (var i = 0; i < resetParas.length; i++) {
//         resetParas[i].textContent = '';
//     }

//     resetButton.parentNode.removeChild(resetButton);
//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = '';
//     guessField.focus();
//     lastResult.style.backgroundColor = 'white';
//     randomNumber = Math.floor(Math.random() * 100) + 1;
// }