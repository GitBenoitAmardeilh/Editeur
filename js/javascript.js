var ifrm = document.getElementById('ifrm').contentDocument;
ifrm.designMode = 'on';

function dragStart(e){
    
    e.dataTransfer.setData("text/plain", e.target.id);

}

ifrm.addEventListener('drop', function(e){
    
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    ifrm.body.appendChild(document.getElementById(data).cloneNode(true));
    
},false);

ifrm.addEventListener('dragover', function(e){
    
    e.preventDefault();
    
},false);

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
        'timeNewRoman',
        'arial'
    ]
    
    for(i = 0 ; i < arrayPolice.length ; i++){
        
        var para = document.getElementById(arrayPolice[i]);  

        para.className = arrayPolice[i];
        para.style.fontSize = "20px";
        
    } 
    
})();