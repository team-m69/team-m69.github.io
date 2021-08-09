var chb = document.getElementById('tick');
var button = document.getElementById('button');
var error = document.getElementById('error');

function func() {
    if(chb.checked == false || chb.checked === null) {
        error.innerHTML = "<h3><i class='bx bxs-error'></i> You must swear on your mums life that ur 18+ !!!!</h3>"
        //error.innerText = 'You must swear on your mums life that ur 18+ !!!!';
        setTimeout(() => {
            error.innerHTML = '';
        }, 3000);
    } else {
        error.innerHTML = '';
        location.href = 'https://discord.gg/pornhub'
    }
}