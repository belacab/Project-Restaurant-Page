import home_div from "./home";
import menu_div from "./menu";
import contact_div from "./contact";
import "./style.css"


//document.getElementById("content").appendChild(home_div);
//document.getElementById("content").appendChild(menu_div);
//document.getElementById("content").appendChild(contact_div);

const nav = document.createElement("div");
nav.classList.add("nav")

const main_navcontent = document.createElement("div");
main_navcontent.classList.add("main_nav")
main_navcontent.appendChild(home_div);

let home_link = document.createElement("span");
home_link.classList.add("home");
home_link.textContent = "Home";
home_link.onclick = function () {
  main_navcontent.textContent = "";
  main_navcontent.appendChild(home_div);
};
nav.appendChild(home_link);

let menu_link = document.createElement("span");
menu_link.classList.add("menu");
menu_link.textContent = "Menu";
menu_link.onclick = function () {
  main_navcontent.textContent = "";
  main_navcontent.appendChild(menu_div);
};
nav.appendChild(menu_link);

let contact_link = document.createElement("span");
contact_link.classList.add("contact");
contact_link.textContent = "Contact";
contact_link.onclick = function () {
  main_navcontent.textContent = "";
  main_navcontent.appendChild(contact_div);
};
nav.appendChild(contact_link);

const content = document.getElementById("content")
  content.appendChild(nav)
  content.appendChild(main_navcontent);
