const watercolorcss = document.getElementById('w1');
const fishcolorcss = document.getElementById('fishimage');
const breadcss = document.getElementById('bread');
const fishpositioncss = document.getElementById('fishimage');
let fishpositionvalue = 1;
const captainObvious = document.getElementById('explain');
let fishleftposition = 10;


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
            fishpositioncss.classList.remove('fishpositionrandf');
            fishpositioncss.classList.add('fishposition2');
            fishpositionvalue++;
            fishleftposition = 25;
            break;
        case 2:
            fishpositioncss.classList.remove('fishposition2');
            fishpositioncss.classList.add('fishposition3');
            fishpositionvalue++;
            fishleftposition = 40;
            break;
        case 3:
            fishpositioncss.classList.remove('fishposition3');
            fishpositioncss.classList.add('fishposition4');
            fishleftposition = 60;
            fishpositionvalue++;
            break;
        case 4:
            fishpositioncss.classList.remove('fishposition4');
            fishpositioncss.classList.add('fishposition5');
            fishpositionvalue++;
            fishleftposition = 75;
            break;
        case 5:
            fishpositioncss.classList.remove('fishposition5');
            fishpositioncss.classList.add('fishposition6');
            fishpositionvalue++;
            fishleftposition = 75;
            break;
        case 6:
            fishpositioncss.classList.remove('fishposition6');
            fishpositioncss.classList.add('fishposition7');
            fishpositionvalue++;
            fishleftposition = 12;
            break;
        case 7:
            fishpositioncss.classList.remove('fishposition7');
            fishpositioncss.classList.add('fishposition1');
            fishpositionvalue = 1;
            fishleftposition = 10;
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
    fishpositioncss.classList.remove('fishpositionrandf');
    fishpositioncss.classList.add('fishposition2');

    setTimeout(fishpositionloopuno, 1000);
    setTimeout(fishpositionloopdos, 2000);
    setTimeout(fishpositionlooptres, 3000);
    setTimeout(fishpositionloopquatro, 4000);
    setTimeout(fishpositionloopcinco, 5000);
    setTimeout(fishpositionloopseis, 7000);
    captainObvious.innerText = `Fish is swimming in circles`;
}
function fishpositionloopuno() {
    fishpositioncss.classList.remove('fishposition2');
    fishpositioncss.classList.add('fishposition3');
}

function fishpositionloopdos() {
    fishpositioncss.classList.remove('fishposition3');
    fishpositioncss.classList.add('fishposition4');
}

function fishpositionlooptres() {
    fishpositioncss.classList.remove('fishposition4');
    fishpositioncss.classList.add('fishposition5');
}

function fishpositionloopquatro() {
    fishpositioncss.classList.remove('fishposition5');
    fishpositioncss.classList.add('fishposition6');
}

function fishpositionloopcinco() {
    fishpositioncss.classList.remove('fishposition6');
    fishpositioncss.classList.add('fishposition7');
}


function fishpositionloopseis() {
    fishpositioncss.classList.remove('fishposition7');
    fishpositioncss.classList.add('fishposition1');
}

const stylebreadDOM = document.getElementById('breadrand');

function breadcrumbs() {
    const toppos = Math.random() * 15 + 10;
    const leftpos = Math.random() * 65 + 10;
    const styleDOM = document.getElementById('fishrand');
    

    stylebreadDOM.innerHTML = `.breadimage {
        position: absolute;
        top: ${toppos+1}vh;
        left: ${leftpos-3}vw;
        display:block;
        width: 100px;
    }`;


    if (fishposition < leftpos) {
        styleDOM.innerHTML = `.fishpositionrandf {
    position: absolute;
    transition-duration: 3s;
    transition-delay: 1s;
    top: ${toppos}vh;
    left: ${leftpos}vw;
}`;
    } else {
        styleDOM.innerHTML = `.fishpositionrandf {
        position: absolute;
        transition-duration: 2s;
        transition-delay: 1s;
        top: ${toppos}vh;
        left: ${leftpos}vw;
        transform: rotateY(180deg);
    }`;


    }
    fishpositioncss.classList.remove('fishposition1');
    fishpositioncss.classList.remove('fishposition2');
    fishpositioncss.classList.remove('fishposition3');
    fishpositioncss.classList.remove('fishposition4');
    fishpositioncss.classList.remove('fishposition5');
    fishpositioncss.classList.remove('fishposition6');
    fishpositioncss.classList.remove('fishposition7');
    fishpositioncss.classList.add('fishpositionrandf');
    captainObvious.innerText = `Its feeding time`;
    fishposition = leftpos;
    setTimeout(breadeaten, 3200);
}

function breadeaten() {
    stylebreadDOM.innerHTML = `.breadimage {
    display: none;
    }`;
}