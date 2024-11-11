//document.getElementById("demo").innerHTML = "Hello World!";
//rgb(189, 231, 217) - Claro
//rgb(44, 54, 51) - Escuro

const body = document.body;
const title = document.getElementsByClassName("title");
const sub_title = document.getElementsByClassName("sub-title");

const section = document.getElementsByClassName("section");

function changeThemeToDark() {
  body.style.backgroundColor = "rgb(44, 54, 51)";
}

function changeThemeToLight() {
  body.style.backgroundColor = "rgb(189, 231, 217)";
}
