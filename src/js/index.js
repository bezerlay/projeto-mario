
const botaotrailer = document.querySelector(".botao-trailer");
const botaoFecharmodal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function aternarModal(){
modal.classList.toggle("aberto");

}

botaotrailer.addEventListener("click", () => {
    aternarModal();
video.setAttribute("src", linkDoVideo) 

});

botaoFecharmodal.addEventListener("click", () => {
modal.classList.toggle("abeto")
video.setAttribute("src", "");
});

