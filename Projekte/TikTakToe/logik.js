var spieler1 = true;
var spielbrettDIV = document.getElementById("spielbrett");
var spielbrettVoll = false;
var punkteSpielerX = 0;
var punkteSpielerO = 0;

function togglePlayer(feld) {
    if (spieler1) {
        feld.value = "X";
        spieler1 = false;
        feld.disabled = true;
    } else {
        feld.value = "O";
        spieler1 = true;
        feld.disabled = true;
    }
}

function checkWinner() {
    var gewinnerDIV = document.getElementById("gewinnerBox").firstChild;
    let alleInputs = document.querySelectorAll("input");
    let spielerXDIV = document.getElementById("leaderboardSpielerX").firstChild;
    let spielerODIV = document.getElementById("leaderboardSpielerO").firstChild;
    pruefeSpielbrettVoll();
    if (spielbrettVoll) {
        gewinnerDIV.textContent = "Unendschieden";
        blockeFeld();
    }
    if (alleInputs[0].value !== "" && alleInputs[0].value === alleInputs[1].value && alleInputs[1].value === alleInputs[2].value) {
        if(alleInputs[0].value === "X"){
            punkteSpielerX++;
            spielerXDIV.textContent = "Spieler X: " + punkteSpielerX;
        }else{
            punkteSpielerO++;
            spielerODIV.textContent = "Spieler O: " + punkteSpielerO;
        }
        gewinnerDIV.textContent = alleInputs[0].value + " hat gewonnen!";
        blockeFeld();
    } else if (alleInputs[3].value !== "" && alleInputs[3].value === alleInputs[4].value && alleInputs[4].value === alleInputs[5].value) {
        if(alleInputs[3].value === "X"){
            punkteSpielerX++;
            spielerXDIV.textContent = "Spieler X: " + punkteSpielerX;
        }else{
            punkteSpielerO++;
            spielerODIV.textContent = "Spieler O: " + punkteSpielerO;
        }
        gewinnerDIV.textContent = alleInputs[3].value + " hat gewonnen!";
        blockeFeld();
    } else if (alleInputs[6].value !== "" && alleInputs[6].value === alleInputs[7].value && alleInputs[7].value === alleInputs[8].value) {
        if(alleInputs[6].value === "X"){
            punkteSpielerX++;
            spielerXDIV.textContent = "Spieler X: " + punkteSpielerX;
        }else{
            punkteSpielerO++;
            spielerODIV.textContent = "Spieler O: " + punkteSpielerO;
        }
        gewinnerDIV.textContent = alleInputs[6].value + " hat gewonnen!";
        blockeFeld();
    } else if (alleInputs[0].value !== "" && alleInputs[0].value === alleInputs[3].value && alleInputs[3].value === alleInputs[6].value) {
        if(alleInputs[0].value === "X"){
            punkteSpielerX++;
            spielerXDIV.textContent = "Spieler X: " + punkteSpielerX;
        }else{
            punkteSpielerO++;
            spielerODIV.textContent = "Spieler O: " + punkteSpielerO;
        }
        gewinnerDIV.textContent = alleInputs[0].value + " hat gewonnen!";
        blockeFeld();
    } else if (alleInputs[1].value !== "" && alleInputs[1].value === alleInputs[4].value && alleInputs[4].value === alleInputs[7].value) {
        if(alleInputs[1].value === "X"){
            punkteSpielerX++;
            spielerXDIV.textContent = "Spieler X: " + punkteSpielerX;
        }else{
            punkteSpielerO++;
            spielerODIV.textContent = "Spieler O: " + punkteSpielerO;
        }
        gewinnerDIV.textContent = alleInputs[1].value + " hat gewonnen!";
        blockeFeld();
    } else if (alleInputs[2].value !== "" && alleInputs[2].value === alleInputs[5].value && alleInputs[5].value === alleInputs[8].value) {
        if(alleInputs[2].value === "X"){
            punkteSpielerX++;
            spielerXDIV.textContent = "Spieler X: " + punkteSpielerX;
        }else{
            punkteSpielerO++;
            spielerODIV.textContent = "Spieler O: " + punkteSpielerO;
        }
        gewinnerDIV.textContent = alleInputs[2].value + " hat gewonnen!";
        blockeFeld();
    } else if (alleInputs[0].value !== "" && alleInputs[0].value === alleInputs[4].value && alleInputs[4].value === alleInputs[8].value) {
        if(alleInputs[0].value === "X"){
            punkteSpielerX++;
            spielerXDIV.textContent = "Spieler X: " + punkteSpielerX;
        }else{
            punkteSpielerO++;
            spielerODIV.textContent = "Spieler O: " + punkteSpielerO;
        }
        gewinnerDIV.textContent = alleInputs[0].value + " hat gewonnen!";
        blockeFeld();
    } else if (alleInputs[6].value !== "" && alleInputs[6].value === alleInputs[4].value && alleInputs[4].value === alleInputs[2].value) {
        if(alleInputs[6].value === "X"){
            punkteSpielerX++;
            spielerXDIV.textContent = "Spieler X: " + punkteSpielerX;
        }else{
            punkteSpielerO++;
            spielerODIV.textContent = "Spieler O: " + punkteSpielerO;
        }
        gewinnerDIV.textContent = alleInputs[6].value + " hat gewonnen!";
        blockeFeld();
    }
}

function blockeFeld() {
    let alleInputs = document.getElementsByClassName("feld");
    for (let i = 0; i < alleInputs.length; i++) {
        alleInputs[i].disabled = true;
    }
}

function reset() {
    let alleInputs = document.getElementsByClassName("feld");
    let gewinnerText = document.getElementById("gewinnerBox");
    for (let i = 0; i < alleInputs.length; i++) {
        alleInputs[i].disabled = false;
        alleInputs[i].value = "";
    }
    gewinnerText.firstChild.textContent = "";
}

function pruefeSpielbrettVoll() {
    let alleInputs = document.querySelectorAll("input");
    let zaehler = 0;
    for (let i = 0; i < alleInputs.length; i++) {
        if (alleInputs[i].value !== "") {
            zaehler++;
        }
    }
    if (zaehler === 10) {
        spielbrettVoll = true;
    }else{
        spielbrettVoll = false;
    }
}