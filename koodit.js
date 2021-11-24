
function testaaKoodi(koodi){
switch(koodi) {
  case "159723":
    var palaute = "Etsi Alyssa";
    break;
  case "954367":
    var palaute = "Etsi ruokalan tuoli X";
    break;
  case "436571":
    var palaute = "Optiikan isä";
    break;
  case "127954":
    var palaute = "Pelaa Anttia vastaan ja voita";
    break;
  case "669745":
    var palaute = "Etsi kaappi numero 1010001";
    break;
  case "314685":
    var palaute = "Missä kohtaa koulua pitää seistä, jotta näet XXXXXXXXX";
    break;
  case "765942":
    var palaute = "Istu kohtaan 6,8 ja nauti elokuvasta.";
    break;
  case "116734":
    var palaute = "Neljä huonetta piirtävät reitin";
    break;
  default:
    var palaute = "Väärä koodi";
}
document.write(palaute);
}
