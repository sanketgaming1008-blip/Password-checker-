function checkPassword(){

let password=
document.getElementById("password").value;

let total=password.length;

let upper=
(password.match(/[A-Z]/g)||[]).length;

let lower=
(password.match(/[a-z]/g)||[]).length;

let number=
(password.match(/[0-9]/g)||[]).length;

let special=
(password.match(/[^A-Za-z0-9]/g)||[]).length;

document.getElementById("char")
.innerText=total;

document.getElementById("upper")
.innerText=upper;

document.getElementById("lower")
.innerText=lower;

document.getElementById("number")
.innerText=number;

document.getElementById("special")
.innerText=special;

let score=0;

if(total>=8){
score++;
document.getElementById("rule1")
.innerHTML="✔ Minimum 8 Characters";
}

else{
document.getElementById("rule1")
.innerHTML="❌ Minimum 8 Characters";
}

if(upper>0){
score++;
document.getElementById("rule2")
.innerHTML="✔ Uppercase Letter";
}

else{
document.getElementById("rule2")
.innerHTML="❌ Uppercase Letter";
}

if(lower>0){
score++;
document.getElementById("rule3")
.innerHTML="✔ Lowercase Letter";
}

else{
document.getElementById("rule3")
.innerHTML="❌ Lowercase Letter";
}

if(number>0){
score++;
document.getElementById("rule4")
.innerHTML="✔ Number";
}

else{
document.getElementById("rule4")
.innerHTML="❌ Number";
}

if(special>0){
score++;
document.getElementById("rule5")
.innerHTML="✔ Special Character";
}

else{
document.getElementById("rule5")
.innerHTML="❌ Special Character";
}

let strength="Weak";

let color="red";

let width="30%";

let crack="Crack in seconds";

if(score>=5){

strength="Strong";

color="green";

width="100%";

crack="Crack in centuries";

}

else if(score>=3){

strength="Moderate";

color="orange";

width="65%";

crack="Crack in months";

}

document.getElementById("strength-text")
.innerText=strength;

document.getElementById("strength-text")
.style.color=color;

document.getElementById("strength-bar")
.style.width=width;

document.getElementById("strength-bar")
.style.background=color;

document.getElementById("crack")
.innerText="Crack Time: "+crack;

let entropy=score*20;

document.getElementById("entropy")
.innerText=
"Security Score: "+
entropy+
"/100";

let commonPasswords=[
"123456",
"password",
"admin",
"qwerty"
];

if(commonPasswords.includes(password)){

document.getElementById("warning")
.innerText=
"⚠ Common Password Detected";

document.getElementById("warning")
.style.color="red";

}

else{

document.getElementById("warning")
.innerText="";

}

localStorage.setItem(
"LastPassword",
password
);

}

function suggestPassword(){

let name=
document.getElementById("name")
.value;

if(name==""){

document.getElementById("suggestion")
.innerText=
"AI Password Suggestion:";

return;

}

let suggestion=

name.charAt(0).toUpperCase()

+

name.slice(1)

+

"@2025#AI";

document.getElementById("suggestion")
.innerText=
"AI Password Suggestion: "+
suggestion;

}

function togglePassword(){

let pass=
document.getElementById("password");

if(pass.type==="password"){

pass.type="text";

}

else{

pass.type="password";

}

}

function toggleDarkMode(){

document.body.classList.toggle("dark");

}
