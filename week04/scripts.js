function transformUpperCase(){
    let a = document.getElementById("namaPengguna");
    a.value = a.value.toUpperCaste();
}

let elUserName = document.getElementById("namePengguna");
elUserName.addEventListener("keyup", transformUpperCase);

function checkPasswordLength() {
    let password = document.getElementById("kataLaluan").value;
    if (password.length < 5) {
        alert("password must be more that 5 characters");
    } else {
        alert("password accepted!")
    }
}

let elPasswordd = document.getElementById("kataLaluan");
elPassword.onblur = checkPasswordLength;

fucntion checkPasswordLength2(txt){
    if(txt.length < 5) {
        alert("Password must be more than 5 characters");
    } else {
        alert("Password accepted!");
    }
}

let elPassword2 = document.getElementById("kataLaluan2");
elPassword2.addEventListener("blur", function(){
    let a = document.getElementById("kataLaluan2");
    checkPasswordLength2(a.value);
});

let metallicalink = document.getElementById("metallicaLink");
metallicalink.addEventListener("click", function () {
    event.preventDefault();
    alert(metallicalink.href);
});