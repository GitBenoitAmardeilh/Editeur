<?php

$namePage = 'Accueil';

?>

<html>
    <head>
        
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/index.css"/>
        <link rel="stylesheet" href="css/panelColor.css"/>
        <link rel="stylesheet" href="css/panelParam.css"/>
        <link rel="stylesheet" href="css/panelPolice.css"/>
        <link rel="stylesheet" href="css/police.css"/>
        
    </head>
    
    <body>
        
        
        <div id="divDisplayMenu">

            <a href="#" id="btnDisplayMenu"><img src="img/fleche.png" id="image"/></a>

        </div>
        
        <div id="headerMainMenu">

            <div id="icone">
                <p>ICONE</p>
            </div>

            <div id="searchPage">
                <p>Page : <?php  echo $namePage; ?></p>
            </div>
          
        </div>

        <div id="headerLeftMenu">

            <ul>

                <li class="btn_li"><a href="#" class="btn_a"><img src="img/pinceau.png"></a>
                
                    <div id="divBackground">
                    
                        <div id="title">
                            
                            <h1>Palette</h1>
                            <p class="cross"><a href="#" id="btnClose">x</a></p>
                            
                        </div>
                        
                        <div id="containtColor">
                            
                            <div>
                                <h2>Liste de couleurs</h2>
                            </div>
                            
                            <div id="palette" class="divContainOptionColor">
                            
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </li>
                <li class="btn_li"><a href="#" class="btn_a"><img src="img/livre.png"></a>
                
                    <div id="divSyntaxe">
                        
                        <div id="title">
                            
                            <h1>Leçons</h1>
                            <p class="cross"><a href="#" id="btnClose">x</a></p>
                            
                        </div>
                        
                        <div id="containtOptions">
                            
                            <div id="parrer">
                                <h2>Paragraphes</h2>
                            </div>
                            
                            <div id="divDancingScriptRegular" class="divContainOptionPolice" draggable="true">
                                <p id="ParaDancingScriptRegular">Bonjour je suis un paragraphe ayant la police DancingScriptRegular</p>
                            </div>
                            
                            <div id="divTimeNewRoman" class="divContainOptionPolice" draggable="true">
                                <p id="ParaTimeNewRoman">Bonjour je suis un paragraphe ayant la police Time new roman</p>
                            </div>
                            
                            <div>
                                <h2>Titres</h2>
                            </div>

                            <div id="divArial" class="divContainOptionPolice" draggable="true">
                                <p id="ParaArial">Aurevoir</p>
                            </div>
                                

                        </div>
                    
                    </div>
                
                </li>
                <li class="btn_li"><a href="#" class="btn_a"><img src="img/marteau.png"></a>
                
                    <div id="divMenu">
                    
                        <div id="title">
                            
                            <h1>Exercices</h1>
                            <p class="cross"><a href="#" id="btnClose">x</a></p>
                            
                        </div>
                    
                    </div>
                
                </li>
                <li class="btn_li"><a href="#" class="btn_a"><img src="img/aide.png"></a>
                
                    <div id="divHelp">
                    
                        <div id="title">
                            
                            <h1>Aide</h1>
                            <p class="cross"><a href="#" id="btnClose">x</a></p>
                            
                        </div>
                    
                    </div>
                
                </li>

            </ul>

        </div>
        
        <div id="headerRightMenu">
                
            <p><img src="img/parametre.png" id="imgActiveParam"></p>
            
            <div id="divContainParam">
            
                <div id="divParamTexte">
                
                    <ul>
                    
                        <li>
                        
                           <select name="selectPolice" id="selectPolice">
                               <option value="france">Normal</option>
                               <option value="france">Gras</option>
                               <option value="espagne">Italic</option>
                               <option value="italie">Souligné</option>
                           </select>
                        
                        </li>
                        
                        <li>
                        
                           <select name="selectWidth" id="selectWidth">
                               <option value="10">10</option>
                               <option value="12">12</option>
                               <option value="14">14</option>
                               <option value="16">16</option>
                               <option value="18">18</option>
                               <option value="20">20</option>
                               <option value="22">22</option>
                               <option value="24">24</option>
                               <option value="26">26</option>
                               <option value="28">28</option>
                           </select>
                        
                        </li>
                    
                    </ul>
                
                </div>
            
            
            </div>
            
        </div>
        
        <aside><iframe id="ifrm"></iframe></aside>
        
        <script src="js/javascript.js"></script>
        <script src="js/panelColor.js"></script>
        <script src="js/panelParam.js"></script>
        
    </body>
</html>