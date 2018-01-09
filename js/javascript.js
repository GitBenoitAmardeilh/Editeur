var ifrm = document.getElementById('ifrm').contentDocument;
ifrm.designMode = 'on';

var IFRAMEDIV = 0;

const CLASS_DIV_MENU = 'divContainOption';
const CLASS_DIV_IFRAME = 'divContainOptionIframe';

var REPONSES;

/* -----------------------------------------------*/

(function(){
    
    var styleFile = document.createElement("Link");
    var styleFilePolice = document.createElement("Link");
    
    styleFile.setAttribute("rel", "stylesheet");
    styleFile.setAttribute("type", "text/css");
    styleFile.setAttribute("href", "css/editeur.css");  
    
    styleFilePolice.setAttribute("rel", "stylesheet");
    styleFilePolice.setAttribute("type", "text/css");
    styleFilePolice.setAttribute("href", "css/police.css");  
    
    
    ifrm.head.appendChild(styleFile);
    ifrm.head.appendChild(styleFilePolice);
    
    var arrayPolice = [
        'DancingScriptRegular',
        'TimeNewRoman',
        'Arial'
    ]
    
    for(i = 0 ; i < arrayPolice.length ; i++){

        var para = document.getElementById('Para'+arrayPolice[i]);  

        para.className = arrayPolice[i];
        para.style.fontSize = "20px";
        
        para.parentNode.id = 'blcDivSize'+''+i;
        
    } 
    
    /*------------------------------------------------
                    DRAG & DROP 
    -------------------------------------------------*/
    
    ifrm.addEventListener('mousemove', function(e){

        var positionX = e.clientX;
        var positionY = e.clientY;


    },false);

    function arrayDiv(){

        var divContainIframe = ifrm.body.getElementsByClassName(CLASS_DIV_IFRAME);

        for(var i = 0 ; i < divContainIframe.length  ; i++){

            divContainIframe[i].addEventListener('mousedown', function(e){
                
                console.log(e.currentTarget.offsetLeft);
                e.currentTarget.offsetLeft = e.clientX;

            },false);

        }

    }

    var divContain = document.getElementsByClassName(CLASS_DIV_MENU);

    for(var i = 0 ; i < divContain.length  ; i++){

        divContain[i].addEventListener('dragstart', function(e){
            e.dataTransfer.setData("text/plain", e.target.id);
            REPONSES = CLASS_DIV_MENU;

        },false);

    }

    ifrm.addEventListener('drop', function(e){

        e.preventDefault();
        
        if(REPONSES == CLASS_DIV_IFRAME){
      
            var data = e.dataTransfer.getData("text");
            ifrm.body.appendChild(document.getElementById(data).cloneNode(false));
            
        }
        else{
         
            var data = e.dataTransfer.getData("text");
            ifrm.body.appendChild(document.getElementById(data).cloneNode(true));
            ifrm.getElementById(data).setAttribute('class','divContainOptionIframe');
            arrayDiv();
            
        }
        
        console.log(data);

    },false);
    
})();

/*
function dragStart(e){

    e.dataTransfer.setData("text/plain", e.target.id);

}*/