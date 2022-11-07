var Nombre= documentgetElementbyId ('Nombre')

function Enviarformulario() {
    let x = document.forms["Nombre"]["Nombre"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }