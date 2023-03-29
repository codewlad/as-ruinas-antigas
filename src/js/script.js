var divClicked = ''

function posicao(e) {
    e = e.target.id.substring(4).toLowerCase()
    const headerPadding = 125
    const divArray = ["thegame", "images", "mechanics", "playdownload"]
    var totalHeight = 0, position = 0, cont = 0
    divArray.map(moveToDive)
    //console.log(`Tamanho total: ${totalHeight}`)

    function moveToDive(a) {
        const divID = document.getElementById(a).id
        const divHeight = document.getElementById(a).clientHeight
        divClicked = document.getElementById(e).id

        if(divID === divClicked) {
            position = cont 
            //
            window.scrollTo(0, totalHeight)
            //
            position = 20
        }
        if(position < 20){
            totalHeight += divHeight + 19.9
        }
        cont++
    }    
}

document.getElementById('linkTheGame').addEventListener('click', posicao);
document.getElementById('linkImages').addEventListener('click', posicao);
document.getElementById('linkMechanics').addEventListener('click', posicao);
document.getElementById('linkPlayDownload').addEventListener('click', posicao);