var lienTitre = document.getElementsByClassName("Titre-lien");
var contenuTitre = document.getElementsByClassName("contenu-titre");

function ouvrirTitre( nomtitre) {
    for (let liens of lienTitre) {
        liens.classList.remove("lien-actif");
    }
    
    for (let contenus of contenuTitre) {
        contenus.classList.remove("contenu-actif");
    }

    event.currentTarget.classList.add("lien-actif");
    document.getElementById(nomtitre).classList.add("contenu-actif");

}


function togglepopup(){
    let popup = document.querySelector(".overlay");
    popup.classList.toggle("open");
    document.body.classList.toggle('no-scroll');
}
function togglepopup1(){
    let popup = document.querySelector(".overlay2");
    popup.classList.toggle("open");
    document.body.classList.toggle('no-scroll')
}

function togglepopup2(){
    let popup = document.querySelector(".overlay3");
    popup.classList.toggle("open");
    document.body.classList.toggle('no-scroll')
}

function togglepopup3(){
    let popup = document.querySelector(".overlay4");
    popup.classList.toggle("open");
    document.body.classList.toggle('no-scroll')
}







function togglepopupExp1() {
    let popup = document.querySelector(".overlay-exp1");
    popup.classList.toggle("open");
    document.body.classList.toggle('no-scroll');
}

function togglepopupExp2() {
    let popup = document.querySelector(".overlay-exp2");
    popup.classList.toggle("open");
    document.body.classList.toggle('no-scroll');
}



function togglepopupMOI() {
    let popup = document.querySelector(".overlayMOI");
    popup.classList.toggle("open");
    document.body.classList.toggle('no-scroll');
}

