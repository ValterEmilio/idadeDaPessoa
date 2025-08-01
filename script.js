function verificar() {
    let data = new Date();
    let anoAtual = data.getFullYear() //pega o ano atual
    let formularioAno = document.getElementById("textoAno")
    let resultado = document.getElementById("resultado")

    if ( formularioAno.value.length == 0 || formularioAno.value > anoAtual ){
        window.alert("[ERROR] valor incorreto. digite seu ano de Nascimento.");
    } else{
        let sexo = document.getElementsByName('sexo');
        let idade = anoAtual - Number(formularioAno.value);
        let genero = '';
        let imagem = document.createElement('img')
        imagem.setAttribute('src', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 12){
                //criança
                imagem.setAttribute('src', 'people/childmen.png');
            } else if (idade < 18){
                //adolescente
                imagem.setAttribute('src', 'people/adolescentman.png');
            } else if (idade < 45) {
                //adulto
                imagem.setAttribute('src', 'people/boy.png');
            }
            else if (idade < 200) {
                //idoso
                imagem.setAttribute('src', 'people/grandfather.png');
            }
            else{
                window.alert('Ano não aceito no nosso Banco de dados. Digite um ano correto')
            }
        }
        else if (sexo[1].checked) {
            genero = 'Mulher';
             if (idade >= 0 && idade < 12){
                //criança
                imagem.setAttribute('src', 'people/childwoman.png');
            } else if (idade < 18){
                //adolescente
                imagem.setAttribute('src', 'people/adolescentgirl.png');
            } else if (idade < 45) {
                //adulto
                imagem.setAttribute('src', 'people/girl.png');
            }
            else if (idade < 200) {
                //idoso
                imagem.setAttribute('src', 'people/grandmother.png');
            }
            else{
                window.alert('Ano não aceito no nosso Banco de dados. Digite um ano correto')
            }
        }
        resultado.style.textAlign = 'center';
        imagem.style.padding = '15px'
        resultado.innerHTML = `Você é um(a) ${genero} com ${idade} anos`
        resultado.appendChild(imagem)
        formularioAno.value = '';
    }

}