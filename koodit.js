
function testaaKoodi(koodi){
switch(koodi) {
  case "Germanium":
    var palaute = "Erinomaista! Olet ratkaissut suunnistustehtävän! Voit todistaa sen koodisanalla diodi.";
    break;
  default:
    var palaute = "Väärä koodi.";
}
document.write(palaute);
}
