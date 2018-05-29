
////#############################_#################################################################################################
////#############################_#################################################################################################
var objs=[];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var cible="A",
    modif=0,
    temp=0,
    tempo=0,
    i=0,
    f=0,
    ciblex=0;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var formulaire=document.getElementById('formulaire'),
    span_nombre=document.getElementById('span_nombre'),

    for_nom=document.getElementById('form_nom'),
    for_prenom=document.getElementById('form_prenom'),
    for_num=document.getElementById('form_num'),

    modif_nom=document.getElementById('modif_nom'),
    modif_prenom=document.getElementById('modif_prenom'),
    modif_num=document.getElementById('modif_num'),

    ajout=document.getElementById('ajout'),

    couleur_bouton=document.getElementById('couleur_bouton').value;


////////////////////////initialisation localStorage ou pas.../////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (localStorage.getItem("clef")===null)
{
                      var objLinea = JSON.stringify(objs);
                      localStorage.setItem("clef",objLinea);
                      }


                      else {
                      var objLinea = localStorage.getItem("clef"),
                          objJson = JSON.parse(objLinea);


                      for (u=0;u<objJson.length;u++)
                        {objs.push(objJson[u]);}
}

///////////////////////Ecouteurs bouton /// ajout liste///Supprimer///Modifier///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ajout.addEventListener("click", ajout_liste);

document.getElementById('supprimer').addEventListener("click",function()
{


                   if(cible!="A")
                        {i=0;
                        efface_form_modif();
                        objs.splice(cible, 1);
                        cible='A';
                        sauvegarde();
                        }
});
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
document.getElementById("modifier").addEventListener("click",function()
{

                    if(cible!='A')
                        {
                        objs[cible].nom=modif_nom.value;
                        objs[cible].prenom=modif_prenom.value;
                        objs[cible].numero=modif_num.value;
                        ciblex='A';
                        efface_form_modif();
                        modif=3;  ///relance un chargement de la liste ligne 121
                        }

                    sauvegarde();

});
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////



//setInterval(temps_reel_couleur_bouton,100);
setInterval(temps_reel_liste,100);

////###############################################################################################################################
////###############################################################################################################################
function temps_reel_liste()

{console.log(cible);

                  temp++;


                  if (temp==15){document.getElementById('erreuron').id='erreuroff';}

                  nombre_contacte=objs.length;

                  span_nombre.innerHTML='Nombre de contacte '+nombre_contacte;


                  if((cible!='A')&&(modif<2))
                  {
                          modif_nom.value=objs[cible].nom;
                          modif_prenom.value=objs[cible].prenom;
                          modif_num.value=objs[cible].numero;
                          modif=2;  //bloc relecture donc ecriture dans form_modif
                  }



                  console.log("modif"+modif);

                  ///////////////////////////////////////////////////////////////////
                  ///////////////////////////////////////////////////////////////////
                  if ((i<nombre_contacte)||(modif==3))
                  {     modif=0;
                  for (i=0;i<nombre_contacte;i++)

                  {
                  document.getElementById('span_liste').innerHTML+= "<div id='block'style='background-color:grey'  ><p>"+objs[i].nom+"</p><p>"+objs[i].prenom+"</p><p>"+objs[i].numero+'</p><img id="icone"  src="setting.png" onclick="myFunction(event)" ></div>';}

                  }

}

////###############################################################################################################################
////###############################################################################################################################


function ajout_liste()

{

            var test_formulaire=true;


                         if((for_nom.value.length>0)&&(for_nom.value.length<20)&&(isNaN(for_nom.value)))
                                    {form_nom.style.backgroundColor="white";}
                              else
                                    {for_nom.value="";
                                    test_formulaire=false;
                                    form_nom.style.backgroundColor="red";}


                          if((for_prenom.value.length>0)&&(for_prenom.value.length<20)&&(isNaN(for_prenom.value)))
                                    {form_prenom.style.backgroundColor="white";}
                              else
                                    {for_prenom.value="";
                                    test_formulaire=false;
                                    form_prenom.style.backgroundColor="red";}


                         if((for_num.value.length>0)&&(parseInt(for_num.value)))
                                    {form_num.style.backgroundColor="white";}
                              else
                                    {for_num.value="";
                                    test_formulaire=false;
                                    form_num.style.backgroundColor="red";}


                         if (test_formulaire === false){return;}

          temp=0;
          document.getElementById('erreuroff').id='erreuron';
          span_liste.innerHTML="";  ////effacement liste

/////////////////////////////OBJ//////////////////////creation du contacte///////////////////////////////////////////////////////////////////////////////////
                var obj ={
                                date_creation:12,
                                identifiant:nombre_contacte,
                                nom:for_nom.value,
                                prenom:for_prenom.value,
                                numero:for_num.value,
                                couleur:getComputedStyle(formulaire, null).backgroundColor,
                                //fonction qui creer une div et concatenationnelementise de l'objet
                                afficheur: function(){}
                         };


                           for_nom.value="";
                           for_prenom.value="";
                           for_num.value="";
            //////////////////////////////////////////////////GIT PUSH////dans tableau objs////////////////////////////////////////////////////////////////////////
                           objs.push(obj);

                           sauvegarde();


}


function myFunction(event)
{
                  console.log(event);

                  modif=1;  //ligne 107

                      if(event.type=='click')
                          {
                            for (f=0;f<nombre_contacte;f++)
                              {
                                if (event.originalTarget.previousElementSibling.innerHTML==objs[f].numero){cible=f;}
                              }
                          }

}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function sauvegarde()
{
                var objLinea = JSON.stringify(objs);
                localStorage.setItem("clef",objLinea);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
function efface_form_modif()
{
                span_liste.innerHTML="";
                modif_nom.value="";
                modif_prenom.value="";
                modif_num.value="";
}
