

var nbre = Number(prompt("donne moi le nombre de dès que tu veux lancer"));

// je crée la div
for(var compteur = 0 ; compteur < nbre ; compteur ++) {
    dicep(1,6);
}

for(var compteur = 0 ; compteur < nbre ; compteur ++) {
    dealer(1,6);
}

function getrandom() {
    var min = 1;
    var max = 6;
    // je genere un nombre alétoire entre 0 et 1
    var randomNumber = Math.random();
    // je vais étendre la plage de solution pour lui donner la taille voulue (de 10 à 30 on a une taille de 20)
    randomNumber = randomNumber * (max - min);
    // je decale mon interval
    randomNumber = randomNumber + min;
    // j'arrondi a l'entier inferieur
    randomNumber = Math.round(randomNumber);
    return randomNumber;
}

function dicep(min, max) {
var parent = document.getElementById('player');
var dice = document.createElement('div');

// j affecte le style
    dice.classList.add('dice');
    parent.appendChild(dice);
    diceid = "dice" + compteur;
    var dep = document.getElementById(dice);
    var randomNumber = getrandom();
    recul = (1-randomNumber) * 100;
    dice.style.backgroundPosition= recul+"px";  
    
    } 

    function dealer(min, max) {
        var parent = document.getElementById('dealer');
        var madive = document.createElement('div');
        
        // j affecte le style
            madive.classList.add('dice');
            parent.appendChild(madive);
            madive.id = "dice" + compteur;
            var dep = document.getElementById(madive.id);
            //console.log(dep);
            var randomNumber = getrandom();
            recul = (1-randomNumber) * 100;
            madive.style.backgroundPosition= recul+"px";  
            return randomNumber;
            } 
        

