import image from "./Restaurant_Nasinneula.jpg";


function headline() {
  const element = document.createElement("h1");

  element.innerHTML = "Project Restaurant Page";

  return element;
}

function imagen() {
  const pic = new Image();
  pic.src = image;
  return pic;
}

function describe() {
  const contenedor_parrafo = document.createElement("div");
  const op_hours = document.createElement("table");
  const apertura = crear_renglon("Opening hours")
  apertura.className = "opening"
  op_hours.appendChild(apertura);
  op_hours.appendChild(crear_renglon("Sunday: 8am - 8pm"));
  op_hours.appendChild(crear_renglon("Monday: 6am - 6pm"));
  op_hours.appendChild(crear_renglon("Tuesday: 6am - 6pm"));
  op_hours.appendChild(crear_renglon("Wednesday: 6am - 6pm "));
  op_hours.appendChild(crear_renglon("Thursday: 6am - 10pm"));
  op_hours.appendChild(crear_renglon("Friday: 6am - 10pm"));
  op_hours.appendChild(crear_renglon("Saturday: 8am - 10pm"));

  contenedor_parrafo.appendChild(op_hours);
  contenedor_parrafo.classList.add("cosasdetabla")
  const segundo_parrafo = document.createElement("p");
  segundo_parrafo.textContent = "Fake Street 258, Burlen";
  contenedor_parrafo.appendChild(segundo_parrafo);
  return contenedor_parrafo;
}

function crear_renglon(texto) {
  const renglon = document.createElement("tr");
  const celda = document.createElement("td");
  celda.textContent = texto;
  renglon.appendChild(celda);
  return renglon;
}

const home_div = document.createElement("div");
home_div.appendChild(headline());
home_div.appendChild(imagen());
home_div.appendChild(describe());

export default home_div;
