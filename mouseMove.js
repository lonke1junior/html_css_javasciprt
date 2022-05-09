//var djecaElemenata = document.getElementById('link1');
//ovo je za Id

//var djecaElemenata = document.getElementsByClassName("link1")[0];
//ovo je kao da imam Id ista stvar, treba ovo napraviti za više elemenata

const djecaElemenata = document.getElementsByClassName("link1");
//ovdje uzmem klasu koja se pretvor i niz (obavezno const)


for (let i = 0; i < djecaElemenata.length; i++) {
  djecaElemenata[i].addEventListener("mouseover", function handleMouseOver() {
    djecaElemenata[i].style.backgroundColor = "red";
  })

  djecaElemenata[i].addEventListener("mouseout", function handleMouseOut() {
    djecaElemenata[i].style.backgroundColor = "";
})
}
