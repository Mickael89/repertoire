var formulaire = document.getElementsByClassName('formulaire')[0];
var liste_de_nom = document.getElementsByClassName('liste_de_nom')[0];
var a = document.getElementsByClassName('ecran')[0];
var b = document.getElementsByClassName('select')[0];

window.onload = function lancement (){
  formulaire.style.visibility="hidden";
  liste_de_nom.style.visibility="hidden";
  a.style.visibility="hidden";
  b.style.visibility="hidden";
}

document.getElementById( 'ajouter' ).addEventListener("click", affiche_text);
function affiche_text(){
formulaire.style.visibility="visible";
liste_de_nom.style.visibility="hidden";
a.style.visibility="hidden";
}

document.getElementById('liste').addEventListener("click",affiche_text2);
function affiche_text2(){
formulaire.style.visibility="hidden";
liste_de_nom.style.visibility="visible";
a.style.visibility="hidden";
}

document.getElementById('depart').addEventListener("click",affiche_text3);
function affiche_text3(){
formulaire.style.visibility="hidden";
liste_de_nom.style.visibility="hidden";
a.style.visibility="visible";
}

var c = 0;
document.getElementsByClassName('bouton')[0].addEventListener("click",affiche_text4);
function affiche_text4(){
c=c+1;
if (c==1) {
  formulaire.style.visibility="hidden";
  liste_de_nom.style.visibility="hidden";
  a.style.visibility='hidden';
  b.style.visibility='hidden';
}
else{
formulaire.style.visibility="hidden";
liste_de_nom.style.visibility="hidden";
a.style.visibility='visible';
b.style.visibility='visible';
c=0;
}}
