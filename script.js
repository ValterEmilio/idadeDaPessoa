function verificar() {
    let data = new Date();
    let anoAtual = data.getFullYear() //pega o ano atual
    let formularioAno = document.getElementById("textoAno")
    let resultado = document.getElementById("resultado")

    if ( formularioAno.value.length == 0 || formularioAno.value > anoAtual ){
        window.alert("[ERROR] valor incorreto. digite seu ano de Nascimento.");
    }

}