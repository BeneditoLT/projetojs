function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano  = document.getElementById('txtano')
var res = document.querySelector('div#res')
if(fano.value.length == 0 || Number(fano.value) > ano) {

    window.alert('[ERROR] Verifique os dados e tente novamente ')
} else{

    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src', 'hcr.png')
        }else if (idade < 21) {
             // Jovem
             img.setAttribute('src', 'hjv.png')

        } else if(idade < 50 ){
            // Adulto
            img.setAttribute('src', 'had.png')
        }else{
            // Idoso
            img.setAttribute('src', 'hid.png')
        }

        

    } else if(fsex[1].checked){
        genero = 'Muher'
       
        if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src', 'mcr.png')
        }else if (idade < 21) {
             // Jovem
             img.setAttribute('src', 'mjo.png')

        } else if(idade < 50 ){
            // Adulto
            img.setAttribute('src', 'mad.png')
        }else{
            // Idoso
            img.setAttribute('src', 'mid.png')
        }





    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.append(img)
}

}