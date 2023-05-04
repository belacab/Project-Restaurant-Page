const menu_div = document.createElement("div");
let menu_h1 = document.createElement("h1");
menu_h1.textContent = "Menu";
menu_div.appendChild(menu_h1);

const menu_content = document.createElement("div")
menu_content.className = "menuctn"
menu_div.appendChild(menu_content)

const menu_page = document.createElement("div")
menu_page.className = "menupg"
menu_content.appendChild(menu_page)

const pic_div = document.createElement("div")
pic_div.textContent = "Freepik"
pic_div.className = "picdiv"
menu_div.appendChild(pic_div)


export default menu_div;