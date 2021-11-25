
function testaaKoodi(koodi){
switch(koodi) {
  case "159723":
    var palaute = "Koodi koko radan ratkaisuun on 000. Etsi kuitenkin ensin Alyssa.";
    break;
  case "954367":
    var palaute = "Etsi ruokalasta paikka, mistä näet ajan ja voit vaikuttaa!";
    break;
  case "436571":
    var palaute = "Optiikan isällä on tehtävä";
    break;
  case "625143":
    var palaute = "Pelaa Anttia vastaan ja voita";
    break;
  case "669745":
    var palaute = "Etsi kaappi numero 10110";
    break;
  case "314685":
    var palaute = "Missä kohtaa koulua pitää seistä, jotta näet 127:n ja 130:n?";
    break;
  case "765942":
    var palaute = "Istu kohtaan 6,8 ja nauti elokuvasta.";
    break;
  case "116734":
    var palaute = "Neljä huonetta piirtävät reitin. 118,126,166,182A. Ai, ja piirrä X.";
    break;
  case "000":
    var palaute = "Viesti kuuluu: DYSUBOTEDUUDZEOOEKH72W1J. Vihjeenä AhnQiraj-20, mutta tarvitset lisää radan vihjeitä.";
    break;
  default:
    var palaute = "Väärä koodi";
}
document.write(palaute);
}
