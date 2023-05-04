const contact_div = document.createElement("div");
contact_div.className = "contact_page"
let contact_h1 = document.createElement("h1");
contact_h1.textContent = "Contact";

const contact_content = document.createElement("div")
contact_content.className = "contact_content"
contact_div.appendChild(contact_content)

contact_content.appendChild(contact_h1);

const contact_form = document.createElement("form");
contact_form.className = "form"
contact_content.appendChild(contact_form)

const name_div = document.createElement("div");
const name = document.createElement("h4")
name.textContent = "Name: ";
name.className = "name"
name_div.appendChild(name)
contact_form.appendChild(name_div);


const name_input = document.createElement("input");
name_input.placeholder = "please write your name and surname";
contact_form.appendChild(name_input);

const phone_div = document.createElement("div")
contact_form.appendChild(phone_div)

const phone_heading = document.createElement("h4")
phone_heading.textContent = "Phone"
phone_heading.className = "phone"
contact_form.appendChild(phone_heading)

const phone_input = document.createElement("input")
phone_input.placeholder = "please leave a phone number"
contact_form.appendChild(phone_input)

const message_div = document.createElement("div")
contact_form.appendChild(message_div)

const message_heading = document.createElement("h4")
message_heading.textContent  = "Message"
message_heading.className = "message"
contact_form.appendChild(message_heading)

const message_textarea = document.createElement("textarea")
//message_textarea.placeholder
message_textarea.textLength
contact_form.appendChild(message_textarea)

const send_div = document.createElement("div")
contact_form.appendChild(send_div)
const send_btn = document.createElement("button")
send_btn.textContent = "Send"
send_div.appendChild(send_btn)
send_btn.className = "button"


contact_form.addEventListener("submit" , (event) => {
    event.preventDefault()
    console.log("funciona")
})

const marcadeagua_div = document.createElement("div")
marcadeagua_div.className = "marcadeagua"
marcadeagua_div.textContent = "Imagen de mrsiraphol en Freepik"
contact_div.appendChild(marcadeagua_div)



export default contact_div;
