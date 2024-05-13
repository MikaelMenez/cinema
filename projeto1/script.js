const GeneroRomance=document.getElementById("GeneroRomance");
const GeneroAcao=document.getElementById("GeneroAcao");
const GeneroAventura=document.getElementById("GeneroAventura");
const GeneroTerror=document.getElementById("GeneroTerror");
const prox1=document.getElementById("prox1");
const Anos70=document.getElementById("Anos70");
const Anos80=document.getElementById("Anos80");
const Anos90=document.getElementById("Anos90");
const Ano2000=document.getElementById("Ano2000");
const Ano2010=document.getElementById("Ano2010");
const Ano2020=document.getElementById("Ano2020");
const prox2=document.getElementById("prox2");
const gen=document.getElementById("genero");
const ano=document.getElementById("anos");
const GeneroComedia=document.getElementById("GeneroComedia");
const imagem=document.getElementById("imagem");
let genero;
let anos;
prox1.onclick=function(){
    if(GeneroRomance.checked){
        genero='Romance';
    }
    else if(GeneroAcao.checked){
        genero='Acao';
    }
    else if(GeneroAventura.checked){
        genero='Aventura';
    }
    else if(GeneroTerror.checked){
        genero='Terror';
    }
    else if(GeneroComedia.checked){
        genero='comédia';
    }
    console.log(genero)
    gen.style.display="none"
    ano.style.display="inline-block"
}
prox2.onclick=function(){
    if(Anos70.checked){
        genero='Anos70';
    }
    else if(Anos80.checked){
        genero='Anos80';
    }
    else if(Anos90.checked){
        genero='Anos90';
    }
    else if(Ano2000.checked){
        genero='Ano2000';
    }
    else if(Ano2010.checked){
        genero='Ano2010';
    }
    else if(Ano2020.checked){
        genero='Ano2020';
    }
    console.log(genero)
    ano.style.display="none"
}
