
function testaaKoodi(koodi){
switch(koodi) {
  case "111":
    var palaute = "Seuraava vihje kuuluu: Mistä kohdasta koulua näet seuraavat kohteet: A, C ja kasvi";
    break;
  case "112":
    var palaute = "Koodi 112";
    break;
  default:
    var palaute = "Väärä koodi";
}
document.write(palaute);
}
