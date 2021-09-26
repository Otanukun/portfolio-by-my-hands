const btn =  document.getElementById('btn');
btn.onclick = getPassword;


const copybtn =  document.querySelector('.copy');
copybtn.onclick = copyPassword;

const alertBox = document.querySelector('.alertBox');



function getPassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/@#$%^&()_+&<>:{}[]";
    let smiles = [
    '(͡° ͜ʖ ͡°)',
    '(͡°╭͜ʖ╮͡°) ',
    '( ͡ʘ ͜ʖ ͡ʘ)',
    '(✷‿✷)',
    '\_(ツ)_/¯ ',
    '( ͡⊙ ͜ʖ ͡⊙)﻿ ',
    '(V)(;,;)(V)',
    '(>^.^)>(^*o*)^',
    '[✖‿✖]﻿',
    'ʕ•ᴥ•ʔ',
    '(ง ͠° ͟ل͜ ͡°)ง',
    '༼ つ ◕_◕ ༽つ',
    '(づ｡◕‿‿◕｡)づ',
    '(͡°╭͜ʖ╮͡°)',
    '(☞ﾟ∀ﾟ)☞',
    '(._.)',
    '(l:)',
    '⌐╦╦═─',
    '(☞ຈل͜ຈ)☞',
    '(ง°ل͜°)ง',
    '┌(ಠ_ಠ)┘',
    '◉_◉',
    '(╯°□°）╯︵(.o.)',
    '┬──┬ ノ(゜-゜ノ)',
    '☜(˚▽˚)☞',
    '(─‿‿─)',
    'ლ(´ڡ`ლ)',
    '(ಥ_ಥ)',
    'ᄽὁȍ ̪ őὀᄿ',
    '\ (•◡•) /',
    '(° ͡ ͜ ͡ʖ ͡ °)',
    '(^.^)/',
    '*^O^*',
    '(o^ ^o)',
    '(⌒_⌒;)',
    '(*/ω＼)',
    '(*/。＼)',
    '(*/_＼)',
    '(*ﾉωﾉ)',
    '(o-_-o)',
    '(*μ_μ)',
    '(◡‿◡ *)',
    '(ᵔ.ᵔ)',
    '(*ﾉ∀`*)',
    '(//▽//)',
    '(//ω//)',
    '(ノ*ﾟ▽ﾟ*)',
    '(*^.^*)',
    '(*ﾉ▽ﾉ)',
    '(￣▽￣*)ゞ',
    '(⁄ ⁄•⁄ω⁄•⁄ ⁄)',
    '(*/▽＼*)',
    '\,/(^_^)\,/',
    '! d^_^b',
    '\(^O^)/',
    '(/.\)',
    '(-_-)',
    '(>_<)',
    '(-_\\\)',
    '(@_@)',
    '(~.~)',
    ')-00-(',
    '(o_O)',
    '(u_u)',
    '(=_=)',
    '-^o^-',
    '(>^_^)> <(^_^<)',
    '(o)_(o)'
    ];
    const passwordLength = 16;
    let password = '';
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    document.getElementById('password').value = password;
    let randomNumber = Math.floor(Math.random() * smiles.length);
    alertBox.innerHTML = "New Password Copied: <br>" +  password + "<br><br>" + smiles[randomNumber];
}


function copyPassword(){
    const copyPassword = document.getElementById('password');
    copyPassword.select();
    document.execCommand('copy');
    alertBox.classList.add('active');
    setTimeout(()=>{
        alertBox.classList.remove('active');
    }, 3000);
}