function checkPassword(){

let password =
document.getElementById("password").value;

document.getElementById("char")
.innerHTML=password.length;

document.getElementById("upper")
.innerHTML=
(password.match(/[A-Z]/g)||[]).length;

document.getElementById("lower")
.innerHTML=
(password.match(/[a-z]/g)||[]).length;

document.getElementById("number")
.innerHTML=
(password.match(/[0-9]/g)||[]).length;

document.getElementById("special")
.innerHTML=
(password.match(/[^A-Za-z0-9]/g)||[]).length;

}
