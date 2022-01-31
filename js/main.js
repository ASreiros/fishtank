const watercolorcss = document.getElementById('w1');
const fishcolorcss = document.getElementById('fishimage');
const fishpositioncss = document.getElementById('fishimage');
let fishpositionvalue = 1;
const captainObvious = document.getElementById('explain');

function watercolor() {
    watercolorcss.classList.toggle('blue');
    watercolorcss.classList.toggle('green');
    captainObvious.innerText = "Water color changed"
}

function fishcolor() {
    fishcolorcss.classList.toggle('smallfish');
    fishcolorcss.classList.toggle('bigfish');
    captainObvious.innerText = "Another fish now swimming in tank"
}


function fishposition() {
switch (fishpositionvalue) {
    case 1:
        fishpositioncss.classList.remove('fishposition1'); 
        fishpositioncss.classList.remove('fishposition11'); 
        fishpositioncss.classList.add('fishposition2');
        fishpositionvalue++;    
    break;
    case 2:
        fishpositioncss.classList.remove('fishposition2');  
        fishpositioncss.classList.add('fishposition3');
        fishpositionvalue++ ;   
    break;
    case 3:
        fishpositioncss.classList.remove('fishposition3');  
        fishpositioncss.classList.add('fishposition4');
        fishpositionvalue++ ;   
    break;
    case 4:
        fishpositioncss.classList.remove('fishposition4');  
        fishpositioncss.classList.add('fishposition5');
        fishpositionvalue++ ;   
    break;
    case 5:
        fishpositioncss.classList.remove('fishposition5');  
        fishpositioncss.classList.add('fishposition6');
        fishpositionvalue++ ;   
    break;
    case 6:
        fishpositioncss.classList.remove('fishposition6');  
        fishpositioncss.classList.add('fishposition7');
        fishpositionvalue++;   
    break;
    case 7:
        fishpositioncss.classList.remove('fishposition7');  
        fishpositioncss.classList.add('fishposition1');
        fishpositionvalue = 1;   
    break;
}
    captainObvious.innerText = `Fish is alive, it just swam further,${fishpositionvalue}`;
}


function fishpositionloop() {
    fishpositionvalue = 1;
    fishpositioncss.classList.remove('fishposition1');
    fishpositioncss.classList.remove('fishposition2'); 
    fishpositioncss.classList.remove('fishposition3'); 
    fishpositioncss.classList.remove('fishposition4'); 
    fishpositioncss.classList.remove('fishposition5'); 
    fishpositioncss.classList.remove('fishposition6'); 
    fishpositioncss.classList.remove('fishposition7');   
    fishpositioncss.classList.add('fishposition12');

    setTimeout(fishpositionloopuno,1000);
    setTimeout(fishpositionloopdos,2000);
    setTimeout(fishpositionlooptres,3000);
    setTimeout(fishpositionloopquatro,4000);
    setTimeout(fishpositionloopcinco,5000);
    setTimeout(fishpositionloopseis,6000);
    captainObvious.innerText = `Fish is swimming in circles`;
}
function fishpositionloopuno(){
    fishpositioncss.classList.remove('fishposition12');  
    fishpositioncss.classList.add('fishposition13');    
}

function fishpositionloopdos(){
    fishpositioncss.classList.remove('fishposition13');  
    fishpositioncss.classList.add('fishposition14');
}

function fishpositionlooptres(){
    fishpositioncss.classList.remove('fishposition14');  
    fishpositioncss.classList.add('fishposition15');
}

function fishpositionloopquatro(){
    fishpositioncss.classList.remove('fishposition15');  
    fishpositioncss.classList.add('fishposition16');
}

function fishpositionloopcinco(){
    fishpositioncss.classList.remove('fishposition16');  
    fishpositioncss.classList.add('fishposition17');
}


function fishpositionloopseis(){
    fishpositioncss.classList.remove('fishposition17');  
    fishpositioncss.classList.add('fishposition11');
}


