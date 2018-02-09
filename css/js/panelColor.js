var display = document.getElementById('btnDisplayMenu');
var img = document.getElementById('image');

var arrayLi = document.getElementsByClassName('btn_li');
var arrayA = document.getElementsByClassName('btn_a');
var arraybtnCross = document.getElementsByClassName('cross');

var divColorPanel = document.getElementById('palette');

/* --------------- CONSTANTES ---------------- */

const ENABLE = 'block';
const DISABLE = 'none';

/* --------------- Color Panel --------------- */

var white = ['#FFFFFF',"#DFDFDF","#A1A1A1","#6C6C6C","#3E3E3E","#000000"];
var orange = ['#FFF3E9',"#FDD2AF","#EBA770","#D0782E","#C46312","#5F2B00"];
var red = ['#FFE4E4',"#FEA7A7","#FF5C5C","#FF2525","#910000","#590000"];
var green = ['#DEFFE4',"#A0FFB1","#5FFF7B","#12FE3B","#00A91D","#00470C"];
var blue = ['#D6E3FF',"#79A3FD","#3A78FF","#004BF0","#0036AC","#001B56"];
var purple = ['#E5D7FF',"#B68FFF","#8747FF","#5900FF","#3B00A9","#1C0050"];

var panelBase = {
    white:white,
    orange:orange,
    red:red,
    green:green,
    blue:blue,
    purple:purple
    
}

/* ------------------------------------------- */

function displayMenu(link){
    
    if(link.childNodes[2].style.display != ENABLE){
        
        var i = 0;
        
        while(i < arrayLi.length){
            
            arrayLi[i].childNodes[2].style.display = DISABLE;
            i++;
            
        }
        
        link.childNodes[2].style.display = ENABLE;
    }
    else{
        
        link.childNodes[2].style.display = DISABLE;
    }

}

display.addEventListener('click', function(){
    
    if(img.getAttribute('src') == 'img/flecheHaut.png'){
        
        img.setAttribute('src','img/fleche.png');
        display.style.padding = '0';
    }
    else{
        display.style.padding = '10px 0 0 0';
        img.setAttribute('src','img/flecheHaut.png');
    }
    
},false);

(function(){
    
    /*
    ------------------------------------------
    |             Initialisation
    ------------------------------------------
    */
    
    for(var i = 0 ; i < arrayA.length ; i++){

        arrayA[i].addEventListener('click', function(e){

            var link = e.currentTarget.parentNode;
            
            displayMenu(link);

        },false);

    }
    
    for(var i = 0 ; i < arraybtnCross.length ; i++){

        arraybtnCross[i].addEventListener('click', function(e){

            var link = e.currentTarget.parentNode.parentNode.parentNode;
            displayMenu(link);

        },false);

    }
    
    /*
    ------------------------------------------
    |             Panel color
    ------------------------------------------
    */
    
    for(var i = 0 ; i < 6 ; i++){
        
        var blcContaintLi = document.createElement('div');
        
        for( j = 0 ; j < 6 ; j++ ){
            
            var blcLi = document.createElement('li');
            
            switch(i){
                    
                case 0:
                    blcLi.style.background = panelBase.white[j];
                    break;
                    
                case 1:
                    blcLi.style.background = panelBase.orange[j];
                    break;
                    
                case 2:
                    blcLi.style.background = panelBase.red[j];
                    break;
                    
                case 3:
                    blcLi.style.background = panelBase.green[j];
                    break;
                    
                case 4:
                    blcLi.style.background = panelBase.blue[j];
                    break;
                    
                case 5:
                    blcLi.style.background = panelBase.purple[j];
                    break;
                    
            }
            
            blcContaintLi.appendChild(blcLi);
            
        }
        
        divColorPanel.appendChild(blcContaintLi);
        
    }
    
})();