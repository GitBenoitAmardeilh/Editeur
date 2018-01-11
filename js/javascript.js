var ifrm = document.getElementById('ifrm').contentDocument;
ifrm.oncontextmenu = new Function("return false");
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
    
    var initMouseX; // position de la souris au clic sur le div
    var initMouseY;
        
    var initXValueDiv; // position de l'élément au départ
    var initYValueDiv;
    
    var idEnCours; // id du div qui est en cours de modif
    var initClick = false; // si on est en train de cliquer
    
    var borderLeft = false; // si on a cliqué sur un bord gauche
    var borderRight = false; // si on a cliqué sur un bord droit
    var borderTop = false; // si on a cliqué sur un bord haut
    var borderBottom = false; // si on a cliqué sur un bord bas
    
    ifrm.addEventListener('mousemove', function( e ){
        
        // Lorsque l'utilisateur bouge la sourie dans l'iframe;
        // var positionX = e.clientX;
        // var positionY = e.clientY;
        

    },false);
    
    // Initialisation de la position de la sourie dans la div
    function initDDObjet( e , id ){
        
        idEnCours = id;
        initClick = true;
        
        // Sauvegarde de la position initiale
        posX = ifrm.getElementById(id).offsetLeft;
        posY = ifrm.getElementById(id).offsetTop;
        
        initXValueDiv = ifrm.getElementById(id).offsetLeft;
        initYValueDiv = ifrm.getElementById(id).offsetTop;
        
        initMouseX = e.clientX;
        initMouseY = e.clientY;
        
        if( e.clientX >= initXValueDiv && e.clientX <= initXValueDiv + 2 ){
            
            borderLeft = true;
            
            if( e.clientY >= initYValueDiv && e.clientY <= initYValueDiv + 2 ){
                borderTop = true;
            }
            else if(e.clientY >= initYValueDiv + ifrm.getElementById(id).offsetHeight - 2 && e.clientY <= initYValueDiv + ifrm.getElementById(id).offsetHeight){
                borderBottom = true;
            }
        }
        else if(e.clientX >= initXValueDiv + ifrm.getElementById(id).offsetWidth - 2 && e.clientX <= initXValueDiv + ifrm.getElementById(id).offsetWidth){
            droite = true;
            if(e.clientY >= ytmp && e.clientY <= ytmp+2){
                haut = true;
            }
            else if(e.clientY >= initYValueDiv + ifrm.getElementById(id).offsetHeight-2 && e.clientY <= initYValueDiv + ifrm.getElementById(id).offsetHeight){
                bas = true;
            }
        }
        else if(e.clientY >= initYValueDiv && e.clientY <= initYValueDiv + 2){
            haut = true;
        }
        else if(e.clientY >= initYValueDiv + ifrm.getElementById(id).offsetHeight - 2 && e.clientY <= initYValueDiv + ifrm.getElementById(id).offsetHeight){
            bas = true;
        }

        
    }
    
    function mouseMoveIframe( e ){
        
        //console.log(ifrm.getElementById(idEnCours).style.height);
        
        if(initClick){
            
            posX = ifrm.getElementById(idEnCours).offsetLeft;
            posY = ifrm.getElementById(idEnCours).offsetTop;
            
            posiY = (initMouseY - initYValueDiv);

            ifrm.getElementById(idEnCours).style.left = e.clientX - (initMouseX - initXValueDiv) - 30;
            ifrm.getElementById(idEnCours).style.top = e.clientY - (initMouseY - initYValueDiv) - 30;

        }
        
    }
    
    function endInitDDObjet(){
        
        initClick = false;
        borderLeft = false;
        borderRight = false;
        borderTop = false;
        borderBottom = false;
        
    }
    
    /**************************************************
                    LISTES DIV IFRAME
    **************************************************/

    function arrayDiv(){

        var divContainIframe = ifrm.getElementsByClassName(CLASS_DIV_IFRAME);
        var drop = false;

        for(var i = 0 ; i < divContainIframe.length  ; i++){

            divContainIframe[i].addEventListener('mousedown', function(e){
                
                initDDObjet( e , e.currentTarget.id);

            },false);
            
            divContainIframe[i].addEventListener('click', function(e){
                
                e.preventDefault();
                e.returnValue = false;
                returnValue = false;

            },false);
            
            divContainIframe[i].addEventListener('dblclick', function(e){

                console.log('db');

            },false);

        }

    }
    
    /*****************************************************/

    var divContain = document.getElementsByClassName(CLASS_DIV_MENU);

    for(var i = 0 ; i < divContain.length  ; i++){

        divContain[i].addEventListener('dragstart', function(e){
            e.dataTransfer.setData("text/plain", e.target.id);
            REPONSES = CLASS_DIV_MENU;

        },false);

    }

    ifrm.addEventListener('drop', function( e ){

        e.preventDefault();
        
         
        var data = e.dataTransfer.getData("text");
        var newData = data;
        ifrm.body.appendChild(document.getElementById(data).cloneNode(true));

        var stringId = data.replace(newData,data+'iframe');
        ifrm.getElementById(data).setAttribute('class','divContainOptionIframe');
        ifrm.getElementById(data).setAttribute('id',stringId);
        arrayDiv();
            
        
    },false);
    
    ifrm.addEventListener('mousemove', function(e){
        
        mouseMoveIframe(e);
        
    },false);
    
    ifrm.addEventListener('mouseup', function(e){

        endInitDDObjet();

    },false);
    
})();

/*
function dragStart(e){

    e.dataTransfer.setData("text/plain", e.target.id);

}*/