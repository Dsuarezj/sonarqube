var hola = (nombre) => {
  console.log("Una cosa");
  return `Hola ${nombre}`;
};
var hola2 = (nombre) => {
  console.log("Una cosa");
  return `Hola ${nombre}`;
};
var hola3 = (nombre) => {
  console.log("Una cosa");
  return `Hola ${nombre}`;
};
var suma = (numero, numero2) => {
  console.log("Una cosa");
  return numero + numero2;
};
var suma2 = (numero, numero2) => {
  console.log("Una cosa");
  return numero + numero2;
};
var suma3 = (numero, numero2) => {
  console.log("Una cosa");
  return numero + numero2;
};
var suma4 = (numero, numero2) => {
  console.log("Una cosa");
  return numero + numero2;
};

var usefulSwitch = () => {
  var my_day=new Date();

  switch (my_day.getDay())
  {
    case 0:
      console.log("Today is Sunday");
      break;
  }
}
module.exports = {
  hola,
  hola2,
  hola3,
  suma,
  suma2,
  suma3,
  suma4
};
