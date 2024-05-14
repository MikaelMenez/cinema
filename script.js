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
const GeneroComédia=document.getElementById("GeneroComédia");
const imagem=document.getElementById("imagem");
const reset=document.getElementById("reset");
let genero;
let anos;
prox1.onclick=function(){
    if(GeneroRomance.checked){
        genero='romance';
    }
    else if(GeneroAcao.checked){
        genero='acao';
    }
    else if(GeneroAventura.checked){
        genero='aventura';
    }
    else if(GeneroTerror.checked){
        genero='terror';
    }
    else if(GeneroComédia.checked){
        genero='comédia';
    }
    console.log(genero)
    gen.style.display="none"
    ano.style.display="inline-block"
    ano.style.padding='15%'
}
prox2.onclick=function(){
    if(Anos70.checked){
        anos='Anos70';
    }
    else if(Anos80.checked){
        anos='Anos80';
    }
    else if(Anos90.checked){
        anos='Anos90';
    }
    else if(Ano2000.checked){
        anos='Ano2000';
    }
    else if(Ano2010.checked){
        anos='Ano2010';
    }
    else if(Ano2020.checked){
        anos='Ano2020';
    }
    console.log(anos)
    ano.style.display="none"
    if(genero=='romance' && anos=='Anos70'){
        imagem.src="/poster/Grease.jpg"
    }
    else if(genero=='romance' && anos=='Anos80'){
        imagem.src="/poster/Ritmo_quente.jpeg"
    }
    else if(genero=='romance' && anos=='Anos90'){
        imagem.src="/poster/forrest_gump.jpg"
    }
    else if(genero=='romance' && anos=='Ano2000'){
        imagem.src="/poster/orgulho_e_preconceito.jpg"
    }
    else if(genero=='romance' && anos=='Ano2010'){
        imagem.src="/poster/um_dia.jpg"
    }
    else if(genero=='romance' && anos=='Ano2020'){
        imagem.src="/poster/por_lugares_incriveis.jpg"
    }
    else if(genero=='comédia' && anos=='Anos70'){
        imagem.src="/poster/a_fantastica_fabrica_de_chocolate.jpg"
    }
    else if(genero=='comédia' && anos=='Anos80'){
        imagem.src="/poster/curtindo_a_vida_adoidado.jpeg"
    }
    else if(genero=='comédia' && anos=='Anos90'){
        imagem.src="/poster/debi_e_loide.webp"
    }
    else if(genero=='comédia' && anos=='Ano2000'){
        imagem.src="/poster/Superbad.webp"
    }
    else if(genero=='comédia' && anos=='Ano2010'){
        imagem.src="/poster/o_que_fazemos_nas_sombras.jpg"
    }
    else if(genero=='comédia' && anos=='Ano2020'){
        imagem.src="/poster/borat.jpg"
    }
    else if(genero=='terror' && anos=='Anos70'){
        imagem.src="/poster/exorcista.jpg"
    }
    else if(genero=='terror' && anos=='Anos80'){
        imagem.src="/poster/enigma_de_outro_mundo.jpg"
    }
    else if(genero=='terror' && anos=='Anos90'){
        imagem.src="/poster/panico.webp"
    }
    else if(genero=='terror' && anos=='Ano2000'){
        imagem.src="/poster/donnie_darko.jpg"
    }
    else if(genero=='terror' && anos=='Ano2010'){
        imagem.src="/poster/nos.webp"
    }
    else if(genero=='terror' && anos=='Ano2020'){
        imagem.src="/poster/x.jpg"
    }
    else if(genero=='aventura' && anos=='Anos70'){
        imagem.src="/poster/star-wars.jpg"
    }
    else if(genero=='aventura' && anos=='Anos80'){
        imagem.src="/poster/conta_comigo.jpg"
    }
    else if(genero=='aventura' && anos=='Anos90'){
        imagem.src="/poster/mumia.webp"
    }
    else if(genero=='aventura' && anos=='Ano2000'){
        imagem.src="/poster/o_auto_da_compadecida.jpg"
    }
    else if(genero=='aventura' && anos=='Ano2010'){
        imagem.src="/poster/vingadores.jpg"
    }
    else if(genero=='aventura' && anos=='Ano2020'){
        imagem.src="/poster/Enola_holmes.webp"
    }
    else if(genero=='acao' && anos=='Anos70'){
        imagem.src="/poster/Superman.webp"
    }
    else if(genero=='acao' && anos=='Anos80'){
        imagem.src="/poster/exterminador_do_futuro.jpg"
    }
    else if(genero=='acao' && anos=='Anos90'){
        imagem.src="/poster/clube_da_luta.webp"
    }
    else if(genero=='acao' && anos=='Ano2000'){
        imagem.src="/poster/bastardos.webp"
    }
    else if(genero=='acao' && anos=='Ano2010'){
        imagem.src="/poster/mad_max.webp"
    }
    else if(genero=='acao' && anos=='Ano2020'){
        imagem.src="/poster/Top_Gun_Maverick.jpg"
    }
    reset.style.display="inline-block"
    imagem.style.display="inline-block"
}
reset.onclick=function(){
    anos='';
    genero='';
    reset.style.display="none"
    gen.style.display="inline-block"
    imagem.style.display="none"
}
