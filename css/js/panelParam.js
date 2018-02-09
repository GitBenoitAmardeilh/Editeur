var imgActiveMenu = document.getElementById('imgActiveParam');
var divContainParam = document.getElementById('divContainParam');

(function(){
    
        divContainParam.style.display = 'none';
    
        imgActiveMenu.addEventListener('click', function(e){
        
        var container = e.currentTarget.parentNode.nextElementSibling;
        
        if(container.style.display == 'none'){ container.style.display = 'block'; } 
        else container.style.display = 'none';
        
    },false);
    
})();