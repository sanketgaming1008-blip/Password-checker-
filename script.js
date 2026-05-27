function checkPassword(){

let password=
document
.getElementById("password")
.value;

let total=
password.length;

let upper=
(password.match(/[A-Z]/g)||[])
.length;

let lower=
(password.match(/[a-z]/g)||[])
.length;

let number=
(password.match(/[0-9]/g)||[])
.length;

let special=
(password.match(/[^A-Za-z0-9]/g)||[])
.length;

document
.getElementById("char")
.innerText=total;

document
.getElementById("upper")
.innerText=upper;

document
.getElementById("lower")
.innerText=lower;

document
.getElementById("number")
.innerText=number;

document
.getElementById("special")
.innerText=special;

let score=0;

if(total>=8)
score++;

if(upper>0)
score++;

if(lower>0)
score++;

if(number>0)
score++;

if(special>0)
score++;

let strength="Weak";

let color="red";

if(score>=5){

strength="Strong";

color="green";

}

else if(score>=3){

strength="Moderate";

color="orange";

}

document
.getElementById("strength")
.innerText=strength;

document
.getElementById("strength")
.style.color=color;

}

function suggestPassword(){

let name=
document
.getElementById("name")
.value;

if(name==""){

document
.getElementById("suggestion")
.innerText=
"AI Suggestion:";

return;

}

let password=

name.charAt(0)
.toUpperCase()

+

name.slice(1)

+

"@2025!";

document
.getElementById("suggestion")
.innerText=

"AI Suggestion: "

+

password;

}
