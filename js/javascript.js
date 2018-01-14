var ifrm = document.getElementById('ifrm').contentDocument;
ifrm.oncontextmenu = new Function("return false");
ifrm.designMode = 'on';

const ID_DIV_IN_IFRAME = 'divContainOptionIframe';

const CLASS_DIV_MENU = 'divContainOptionPolice';
const CLASS_DIV_IFRAME = 'divContainOptionIframe';

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
        
        // para.parentNode.id = 'blcDivSize'+''+i;
        
    } 
    
    /*------------------------------------------------
                    DRAG & DROP 
    -------------------------------------------------*/
    
    var nbDivDrop = 0; // nombre d'élément drop dans l'iframe
    
    var MouseXIframe; // position de la souris dans l'iframe
    var MouseYIframe;
    
    /*
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
    
    function initPositionDiv( e , id ){
        
        idEnCours = id;
        initClick = true;

        // Sauvegarde de la position initiale
        posX = document.getElementById(id).offsetLeft;
        posY = document.getElementById(id).offsetTop;

        initXValueDiv = document.getElementById(id).offsetLeft;
        initYValueDiv = document.getElementById(id).offsetTop;

        initMouseX = e.clientX;
        initMouseY = e.clientY; 
            
    }
    
    function mouseMoveIframe( e ){
        
        //console.log(ifrm.getElementById(idEnCours).style.height);
        
        if(initClick){
            
            posX = document.getElementById(idEnCours).offsetLeft;
            posY = document.getElementById(idEnCours).offsetTop;
            
            posiY = (initMouseY - initYValueDiv);

            document.getElementById(idEnCours).style.left = e.clientX - (initMouseX - initXValueDiv) - 30;
            document.getElementById(idEnCours).style.top = e.clientY - (initMouseY - initYValueDiv) - 30;

        }
        
    }
    
    function endInitDDObjet(){
        
        initClick = false;
        borderLeft = false;
        borderRight = false;
        borderTop = false;
        borderBottom = false;
        
    }*/

    function positionMouseIframe( e ){
        
        MouseXIframe = e.clientX;
        MouseYIframe = e.clientY;
            
    }
    
    function initDragImg( e , id ){
        
        var img = new Image();
            img.src = 'img/imgDrag.png';
        
        // Sauvegarde de la position initiale
        posImgX = document.getElementById(id).offsetLeft;
        posImgY = document.getElementById(id).offsetTop;
        
        var HEIGHT_DIV_POLICE = document.querySelector('#mainPoliceSite').offsetTop;
        var HEIGHT_H1 = document.querySelector('#divSyntaxe').firstElementChild.clientHeight;
        var HEIGHT_H2 = document.querySelector('#parrer').clientHeight;
        
        pSourie = HEIGHT_DIV_POLICE + HEIGHT_H1 + HEIGHT_H2;
        
        console.log('HEIGHT =>   div : '+HEIGHT_DIV_POLICE+' h1 : '+HEIGHT_H1+' h2 : '+HEIGHT_H2);
        console.log('Position => divY :'+posImgY+' sY : '+e.clientY+' total : '+pSourie);
        
        // e.dataTransfer.setDragImage(img,10,0);
        
    }
    
    /**************************************************
                    LISTES DIV SITE
    **************************************************/

    var divContain = document.getElementsByClassName(CLASS_DIV_MENU);

    for(var i = 0 ; i < divContain.length  ; i++){

        divContain[i].addEventListener('dragstart', function(e){
            
            e.dataTransfer.setData('text/plain', e.target.id);

        },false);

    }
    
    /*****************************************************/
    
    
    ifrm.addEventListener('dragover', function(e){
        
        positionMouseIframe( e );
        
    },false);
    
    ifrm.addEventListener('drop', function(e){
        
        e.preventDefault();
        
        var data = e.dataTransfer.getData("text");
        
        ifrm.body.appendChild(document.getElementById(data).cloneNode(true));
        
        newIdDiv = ID_DIV_IN_IFRAME+''+nbDivDrop
        ifrm.getElementById(data).setAttribute('id', newIdDiv);
        nbDivDrop++;
           
        ifrm.getElementById(newIdDiv).style.top = MouseYIframe - 30;
        ifrm.getElementById(newIdDiv).style.left = MouseXIframe - 30;
        
    },false);
    
})();