//document.getElementById("demo").innerHTML = "Hello World!";
//rgb(189, 231, 217) - Claro
//rgb(44, 54, 51) - Escuro

const body = document.body;
const title_main = document.getElementsById("title-main");
const title_main_frame = document.getElementsByClassName("title-main-frame");
const section_title = document.getElementsByClassName("section-title");
const sub_title = document.getElementsByClassName("sub-title");
const paragraph = document.getElementsByClassName("p");

const main_frame = document.getElementsByClassName("main-frame");
const section = document.getElementsByClassName("section");
const article = document.getElementsByTagName("article");
const summary_list = document.getElementsById("summary-list");

const button = document.getElementsByClassName("button");

const link_active = document.getElementsByClassName("link-active");
const nav_link = document.getElementsByClassName("nav-link");

function changeThemeToDark() {
  body.style.backgroundColor = "rgb(29, 70, 56)";
}

function changeThemeToLight() {
  body.style.backgroundColor = "rgb(189, 231, 217)";

  for (let i = 0; i < section.length; i++) {
    section[i].style.backgroundColor = "rgb(91, 219, 177)";
  }
  for (let i = 0; i < article.length; i++) {
    article[i].style.backgroundColor = "rgb(91, 219, 177)";
  }

  main_frame[0].style.backgroundColor = "rgb(141, 226, 198)";
  main_frame[0].style.boxShadow = "rgb(99, 160, 139)";

  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "rgb(68, 209, 162)";
    button[i].style.boxShadow = "rgb(70, 112, 99)";
  }

  title.style.color = "rgb(38, 92, 74)";
  title_main_frame.style.color = "rgb(70, 112, 99)";
  section_title.style.color = "rgb(42, 99, 80)";
  sub_title.style.color = "rgb(50, 121, 97)";
  paragraph.style.color = "rrgb(29, 70, 56)";
  summary_list.style.color = "rgb(29, 70, 56)";

  link_active.style.color = "rgb(102, 211, 175)";

}
