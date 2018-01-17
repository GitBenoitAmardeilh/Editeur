var ifrm = document.getElementById('ifrm').contentDocument;
ifrm.oncontextmenu = new Function("return false");
ifrm.designMode = 'on';

const ID_DIV_IFRAME = 'divContainOptionIframe';
const CLASS_DIV_MENU = 'divContainOptionPolice';

const HEADER_HEIGHT = document.getElementById('headerMainMenu').offsetHeight;
const DIV_MENU_LEFT_HEIGHT = document.getElementById('headerLeftMenu').offsetWidth;

/* -----------------------------------------------*/

(function(){
    
    var styleFile = document.createElement("Link");
    var styleFilePolice = document.createElement("Link");
    var styleFileIframe = document.createElement("Link");
    
    styleFile.setAttribute("rel", "stylesheet");
    styleFile.setAttribute("type", "text/css");
    styleFile.setAttribute("href", "css/editeur.css");  
    
    styleFilePolice.setAttribute("rel", "stylesheet");
    styleFilePolice.setAttribute("type", "text/css");
    styleFilePolice.setAttribute("href", "css/police.css");  
    
    styleFileIframe.setAttribute("rel", "stylesheet");
    styleFileIframe.setAttribute("type", "text/css");
    styleFileIframe.setAttribute("href", "css/iFrame.css"); 
    
    
    ifrm.head.appendChild(styleFile);
    ifrm.head.appendChild(styleFilePolice);
    ifrm.head.appendChild(styleFileIframe);
    
    var arrayPolice = [
        'DancingScriptRegular',
        'TimeNewRoman',
        'Arial'
    ]
    
    for(i = 0 ; i < arrayPolice.length ; i++){

        var para = document.getElementById('Para'+arrayPolice[i]);  

        para.className = arrayPolice[i];
        para.style.fontSize = "20px";
        
    } 
    
    /*------------------------------------------------
                     LISTES DIV SITE
    -------------------------------------------------*/

    var divContain = document.getElementsByClassName(CLASS_DIV_MENU);

    for(var i = 0 ; i < divContain.length  ; i++){

        divContain[i].addEventListener('dragstart', function(e){
            
            e.dataTransfer.setData('text/plain', e.target.id);
            initDragImg( e , e.target.id);

        },false);

    }
    
    /*------------------------------------------------
                     LISTES DIV IFRAME
    -------------------------------------------------*/

    function listDivIframe(){
        
        var arrayDivIframe = ifrm.getElementsByClassName(CLASS_DIV_MENU);
        
        for( var i = 0 ; i < arrayDivIframe.length ;i++){
            
            arrayDivIframe[i].addEventListener('click', function(e){

                e.currentTarget.style.border = '1px solid blue';

            },false);   
            
        }
        
    }
    
    /*------------------------------------------------
                    DRAG & DROP 
    -------------------------------------------------*/
    
    var nbDivDrop = 0; // nombre d'élément drop dans l'iframe
    
    var MouseXIframe; // position de la souris dans l'iframe
    var MouseYIframe;
    
    var posImgX; // position de la souris dans une div du sous menu
    var posImgY;
    
    var img; // Contient l'image générée lors du drop

    function positionMouseIframe( e ){
        
        MouseXIframe = e.clientX;
        MouseYIframe = e.clientY;
            
    }
    
    function positionMouseInDiv( e , id ){
        
        posImgX = e.clientX - DIV_MENU_LEFT_HEIGHT - 11; // -1 est la marge du sous menu et - 10 le padding
        posImgY = e.clientY - HEADER_HEIGHT - document.getElementById(id).offsetTop - 15;
            
    }
    
    function initDragImg( e , id ){
        
        positionMouseInDiv( e , id )
        e.dataTransfer.setDragImage(img ,posImgX,posImgY);
        
    }
    
    
    ifrm.addEventListener('dragover', function(e){
        
        positionMouseIframe( e );
        
    },false);
    
    ifrm.addEventListener('drop', function(e){
        
        e.preventDefault();
        
        var data = e.dataTransfer.getData("text");
        
        ifrm.body.appendChild(document.getElementById(data).cloneNode(true));
        
        newIdDiv = ID_DIV_IFRAME+''+nbDivDrop
        ifrm.getElementById(data).setAttribute('id', newIdDiv);
        nbDivDrop++;
           
        ifrm.getElementById(newIdDiv).style.left = MouseXIframe - posImgX;
        ifrm.getElementById(newIdDiv).style.top = MouseYIframe - posImgY;
        
        listDivIframe();
        
    },false);
    
    /*****************************************************/
    
    document.addEventListener('mousedown', function(e){
        
            img = new Image();
            img.src = 'img/imgDD.png';
        
    },false);
    
})();