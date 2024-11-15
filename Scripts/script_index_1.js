//document.getElementById("demo").innerHTML = "Hello World!";
//rgb(189, 231, 217) - Claro
//rgb(44, 54, 51) - Escuro

const body = document.body;
const title_main = document.getElementById("title-main");
const title_main_frame = document.getElementsByClassName("title-main-frame");
const section_title = document.getElementsByClassName("section-title");
const sub_title = document.getElementsByClassName("sub-title");
const paragraph = document.getElementsByTagName("p");

const main_frame = document.getElementsByClassName("main-frame");
const section = document.getElementsByClassName("section");
const article = document.getElementsByTagName("article");
const summary_list = document.getElementById("summary-list");

const button = document.getElementsByClassName("button");

const link_active = document.getElementsByClassName("link-active");
const nav_link = document.getElementsByClassName("nav-link");

function changeThemeToDark() {
  body.style.backgroundColor = "rgb(29, 70, 56)";

  for (let i = 0; i < main_frame.length; i++) {
    main_frame[i].style.backgroundColor = "rgb(50, 121, 97)";
    main_frame[i].style.boxShadow = "3px 3px 5px rgb(17, 41, 33)";
  }
  for (let i = 0; i < section.length; i++) {
    section[i].style.backgroundColor = "rgb(42, 99, 80)";
    section[i].style.boxShadow = "3px 3px 5px rgb(24, 59, 47)";
  }
  for (let i = 0; i < article.length; i++) {
    article[i].style.backgroundColor = "rgb(42, 99, 80)";
    article[i].style.boxShadow = "3px 3px 5px rgb(24, 59, 47)";
  }

  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "rgb(28, 69, 55)";
    button[i].style.color = "rgb(189, 231, 217)";
    button[i].style.boxShadow = "rgb(38, 92, 74)";
  }
  
  title_main.style.color = "rgb(189, 231, 217)"
  for (let i = 0; i < title_main_frame.length; i++) {
    title_main_frame[i].style.color = "rgb(141, 226, 198)";
  } 
  for (let i = 0; i < section_title.length; i++) {
    section_title[i].style.color = "rgb(91, 219, 177";
  } 
  for (let i = 0; i < sub_title.length; i++) {
    sub_title[i].style.color = "rgb(75, 184, 148)";
  } 
  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "rgb(189, 231, 217)";
  } 
  summary_list.style.color = "rgb(189, 231, 217)";

  for (let i = 0; i < link_active.length; i++) {
    link_active[i].style.backgroundColor = "rgb(42, 99, 80)";
  }
}

function changeThemeToLight() {
  body.style.backgroundColor = "rgb(189, 231, 217)";

  for (let i = 0; i < section.length; i++) {
    section[i].style.backgroundColor = "rgb(91, 219, 177)";
    section[i].style.boxShadow = "3px 3px 5px rgb(99, 160, 139)";
  }
  for (let i = 0; i < article.length; i++) {
    article[i].style.backgroundColor = "rgb(91, 219, 177)";
    article[i].style.boxShadow = "3px 3px 5px rgb(99, 160, 139)";
  }

  for (let i = 0; i < main_frame.length; i++) {
    main_frame[i].style.backgroundColor = "rgb(141, 226, 198)";
    main_frame[i].style.boxShadow = "3px 3px 5px rgb(112, 179, 155)";
  }

  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "rgb(68, 209, 162)";
    button[i].style.color = "rgb(29, 70, 56)";
    button[i].style.boxShadow = "rgb(70, 112, 99)";
  }

  title_main.style.color = "rgb(38, 92, 74)";
  for (let i = 0; i < title_main_frame.length; i++) {
    title_main_frame[i].style.color = "rgb(70, 112, 99)";
  } 
  for (let i = 0; i < section_title.length; i++) {
    section_title[i].style.color = "rgb(42, 99, 80)";
  } 
  for (let i = 0; i < sub_title.length; i++) {
    sub_title[i].style.color = "rgb(50, 121, 97)";
  } 
  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "rgb(29, 70, 56)";
  } 
  summary_list.style.color = "rgb(29, 70, 56)";

  for (let i = 0; i < link_active.length; i++) {
    link_active[i].style.backgroundColor = "rgb(102, 211, 175)";
  }
}
