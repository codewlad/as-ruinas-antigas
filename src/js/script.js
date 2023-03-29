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
        //console.log(`DivID ${divID}: tem ${divHeight} de altura`)
        divClicked = document.getElementById(e).id
        //console.log(`Div clicada: ${divClicked}`)

        if(divID === divClicked) {
            position = cont 
            //
            window.scrollTo(0, totalHeight)
            //
            position = 20
        }
        if(position < 20){
            totalHeight += divHeight + 20
        }
        cont++
    }
    
    /*
    e = e.target.id.substring(4).toLowerCase()
    var el = document.getElementById(e);
    var coordenadas = el.getBoundingClientRect();
    console.log('posição x', coordenadas.left, 'posição y', coordenadas.top)
    //window.scrollTo(coordenadas.left, coordenadas.top)
    console.log(coordenadas.top)
    console.log(el)
    if(coordenadas.top == 125) {
        window.scrollTo(coordenadas.left, coordenadas.top-125)
    } else {
        window.scrollTo(coordenadas.left, coordenadas.top)
    }
    */
    

    /*
    const headerPadding = 125
    const divArray = ["thegame", "images", "mechanics", "playdownload"]

    //console.log(divArray)

    var totalHeight = 0, position = 0, cont = 0
    divArray.map(moveToDive)
    
    function moveToDive(a) {

        // get height
        const divHeight = document.getElementById(a).clientHeight

        // check div
        var el = e.target.id.substring(4).toLowerCase()
        var el_ = document.getElementById(el);
        var coordenadas = el_.getBoundingClientRect();

        console.log(`A: ${a}`)
        console.log(`EL: ${el}`)
        
        if(a === el) {
            position = cont 
            //
            totalHeight += headerPadding
            var coordenadas = el.getBoundingClientRect();
            window.scrollTo(coordenadas.left, totalHeight)
            //
            position = 20          
        }
        if(position < 20)(
            totalHeight += divHeight
        )
        console.log(`Cont: ${cont}`)
        console.log(`Posição: ${position}`)
        cont ++
        
        
        
        //e = e.target
        //var el = document.getElementById(e);
        //console.log(el)
    }*/
    
}

document.getElementById('linkTheGame').addEventListener('click', posicao);
document.getElementById('linkImages').addEventListener('click', posicao);
document.getElementById('linkMechanics').addEventListener('click', posicao);
document.getElementById('linkPlayDownload').addEventListener('click', posicao);