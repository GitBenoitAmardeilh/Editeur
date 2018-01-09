<?php

$namePage = 'Accueil';

?>

<html>
    <head>
        
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/index.css"/>
        <link rel="stylesheet" href="css/couleurPalette.css"/>
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
                        
                        <div id="containt">
                            
                            <div>
                                <h2>Liste de couleurs</h2>
                            </div>
                            
                            <div id="palette" class="divContainOption">
                            
                            
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
                            
                            <div>
                                <h2>Paragraphes</h2>
                            </div>
                            
                            <div id="mainPoliceSite" class="divContainOption" draggable="true">
                                <p id="ParaDancingScriptRegular" class="paraPolice">Bonjour je suis un paragraphe ayant la police DancingScriptRegular</p>
                            </div>
                            
                            <div id="timeNewRomana" class="divContainOption" draggable="true">
                                <p id="ParaTimeNewRoman" class="paraPolice">Bonjour je suis un paragraphe ayant la police Time new roman</p>
                            </div>
                            
                            <div>
                                <h2>Titres</h2>
                            </div>

                            <div id="secondPoliceSite" class="divContainOption" draggable="true">
                                <p id="ParaArial" class="paraPolice">Aurevoir</p>
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
        
        <aside><iframe id="ifrm"></iframe></aside>
        
        <script src="js/javascript.js"></script>
        <script src="js/menu.js"></script>
        
    </body>
</html>