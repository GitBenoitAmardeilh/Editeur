var ifrm = document.getElementById('ifrm').contentDocument;
var container_edition = document.getElementById('main_container');
var focusValue = false;

const ID_DIV_IFRAME = 'divContainOptionIframe';
const CLASS_DIV_MENU = 'divContainOptionPolice';

const DIV_MENU_LEFT_HEIGHT = document.getElementById('headerLeftMenu').offsetWidth;

const OFFTOP_IFRM = document.getElementById('ifrm').offsetTop;
const OFFLEFT_IFRM = document.getElementById('ifrm').offsetLeft;

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
        
        var arrayDivIframe = ifrm.getElementsByClassName(ID_DIV_IFRAME);
        
        for( var i = 0 ; i < arrayDivIframe.length ;i++){
            
            arrayDivIframe[i].addEventListener('mouseover', function(e){
                
                    
                positionMouseIframe( e );
                positionMouseInDivIframe( e , e.currentTarget.id );
                addMenuEdition( e );

                focusValue = false;

                hideSubMenu('mouseover_blc');
                
            },false);
            
        }
        
    }
    
    /*
    ------------------------------------------------
                CONTAINER MENU EDITION
    -------------------------------------------------
    |
    | Celui-ci est positionné (fonction listDivIframe),
    | Puis manupiler (Evènements ci-dessous)
    |
    */
    

    container_edition.addEventListener('mouseout', function(){

            if(focusValue == false){
                
                hideMenuEdition();
                
            }

    }, false);
    
    container_edition.addEventListener('click', function(e){
        
            hideSubMenu('click_mouse_blc');
        
            focusValue = true;

    }, false);
    
    container_edition.addEventListener('dblclick', function(e){

            /* A FINIR */

    }, false);
    
    function addMenuEdition( e ){
        
        
        document.getElementById('main_container').style.height = ifrm.getElementById( e.currentTarget.id ).offsetHeight;
        document.getElementById('main_container').style.width = ifrm.getElementById( e.currentTarget.id ).offsetWidth;
        
        document.getElementById('main_container').style.left = e.screenX - posImgX + 1;
        document.getElementById('main_container').style.top = (e.clientY + OFFTOP_IFRM) - posImgY;
        
        document.getElementById('main_container').style.visibility = 'visible';
        
    }
    
    function hideMenuEdition(){
        
        document.getElementById('main_container').style.visibility = 'hidden';
        
    }
    
    function hideSubMenu(nameSubMenu){

        switch(nameSubMenu){
                
            case 'click_mouse_blc':
                
                document.getElementById('click_mouse_blc').style.display = 'block';
                document.getElementById('mouseover_blc').style.display = 'none';
                
                break;
                
            case 'mouseover_blc':
                
                document.getElementById('click_mouse_blc').style.display = 'none';
                document.getElementById('mouseover_blc').style.display = 'block';
                
                break;
                
            default:
                
                document.getElementById('click_mouse_blc').style.display = 'none';
                document.getElementById('mouseover_blc').style.display = 'none';
                
                break;   
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
    
    function positionMouseInDiv( e , id = null ){
        
        var classCurrentDiv = e.currentTarget.getAttribute('class');

        if(classCurrentDiv == ID_DIV_IFRAME){
            
            posImgX = e.clientX - ( e.clientX - e.currentTarget.offsetLeft );
            posImgY = e.clientY - ( e.clientY - e.currentTarget.offsetTop );
            
        }
        else{
            
            posImgX = e.clientX - DIV_MENU_LEFT_HEIGHT - 11; // -1 est la marge du sous menu et - 10 le padding
            posImgY = e.clientY - document.getElementById(id).offsetTop - OFFTOP_IFRM;
            
        }
            
    }
    
    function positionMouseInDivIframe( e , id ){
        
        posImgX = e.clientX - ifrm.getElementById(id).offsetLeft; 
        posImgY = e.clientY - ifrm.getElementById(id).offsetTop;
            
    }
    
    function initDragImg( e , id ){
        
        positionMouseInDiv( e , id )
        e.dataTransfer.setDragImage(img ,posImgX,posImgY);
        
    }
    
    
    ifrm.addEventListener('dragover', function(e){
        
        positionMouseIframe( e );
        ifrm.designMode = 'on';
        
    },false);
    
    ifrm.addEventListener('drop', function(e){
        
        e.preventDefault();
        
        var data = e.dataTransfer.getData("text");
        
        ifrm.body.appendChild(document.getElementById(data).cloneNode(true));
        
        newIdDiv = ID_DIV_IFRAME+''+nbDivDrop;
        ifrm.getElementById(data).setAttribute('class', ID_DIV_IFRAME);
        ifrm.getElementById(data).setAttribute('id', newIdDiv);
        nbDivDrop++;
           
        ifrm.getElementById(newIdDiv).style.left = MouseXIframe - posImgX - 1; // -1 pour la bordure
        ifrm.getElementById(newIdDiv).style.top = MouseYIframe - posImgY;
        
        listDivIframe();
        
    },false);
    
    /*****************************************************/
    
    ifrm.addEventListener('click', function(e){
        
        hideMenuEdition();
        focusValue = false;
        
    },false);
    
    document.addEventListener('mousedown', function(e){
        
            img = new Image();
            img.src = 'img/imgDD.png';
        
    },false); 

})();