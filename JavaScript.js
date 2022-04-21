// function LeiaMais() {
//     var pontos = document.getElementById("pontos");
//     var maisTexto = document.getElementById("mais");
//     var btnLeiaMais = document.getElementById("btnLeiaMais");

//     if(pontos.style.display === "none") {
//         pontos.style.display = "inline";
//         maisTexto.style.display = "none";
//         btnLeiaMais.innerHTML = "Leia Mais";
//     }else {
//         pontos.style.display = "none";
//         maisTexto.style.display = "inline";
//         btnLeiaMais.innerHTML = "Leia Menos"
//     }
// }


function LeiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if(maisTexto.style.display === "none") {
        maisTexto.style.display = "inline";
        pontos.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Menos";
    }else {
        maisTexto.style.display = "none";
        pontos.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Mais"
    }
}
