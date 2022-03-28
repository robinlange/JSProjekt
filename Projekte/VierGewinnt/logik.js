var row = -1;
var spalte = 0;
var spieler = "X";
var farbe = "backgroundS1";
var punkteRot = 0;
var punkteGelb = 0;
var gewinnerFelder = ["", "", "", ""];
function setzteFeld(btn) {
    let alleFelder = document.querySelectorAll("input");
    if (btn.className === "feld feld-click row1") {
        row = 0;
    } else if (btn.className === "feld feld-click row2") {
        row = 1;
    } else if (btn.className === "feld feld-click row3") {
        row = 2;
    } else if (btn.className === "feld feld-click row4") {
        row = 3;
    } else if (btn.className === "feld feld-click row5") {
        row = 4;
    } else if (btn.className === "feld feld-click row6") {
        row = 5;
    } else if (btn.className === "feld feld-click row7") {
        row = 6;
    } else if (btn.className === "feld feld-click row8") {
        row = 7;
    }
    let feld = row;
    for (let i = 0; i < alleFelder.length; i++) {
        if (alleFelder[feld].value !== "" && feld > 7) {
            alleFelder[feld - 8].value = spieler;
            alleFelder[feld - 8].classList.add(farbe);
            spalte--;
            pruefeGewinner();
            spalte = 0;
            toggleSpieler();
            break;
        } else if (feld > 55) {
            alleFelder[feld].value = spieler;
            alleFelder[feld].classList.add(farbe);
            pruefeGewinner();
            spalte = 0;
            toggleSpieler();
            break;
        }
        else {
            feld += 8;
            spalte++;
        }
    }
}
function toggleSpieler() {
    let aktuellerSpielerFeld = document.getElementById("aktuellerSpieler");
    if (spieler === "X") {
        aktuellerSpielerFeld.textContent = "Gelb ist an der Reihe";
        spieler = "O";
        farbe = "backgroundS2";
    } else {
        aktuellerSpielerFeld.textContent = "Rot ist an der Reihe";
        spieler = "X";
        farbe = "backgroundS1";
    }
}
function pruefeGewinner() {
    let alleFelder = document.querySelectorAll("input");
    let counterX = 0;
    let counterO = 0;
    var spielfeld = new Array(8);
    for (var i = 0; i < spielfeld.length; i++) {
        spielfeld[i] = new Array(8);
        for (var j = 0; j < spielfeld[i].length; j++) {
            spielfeld[i][j] = alleFelder[j + i * 8];
        }
    }
    if (spalte < 5) {
        let feld = row + 8 * spalte;
        gewinnerFelder[3] = feld;
        for (let i = 0; i < 3; i++) {
            feld += 8;
            if (alleFelder[feld].value === spieler) {
                gewinnerFelder[i] = feld;
                if (i === 2) {
                    derGewinner(spieler);
                    blockiereFelder();
                } else {
                    continue;
                }
            }
            break;
        }
    }
    let feld = row + 8 * spalte;
    let startfeld = feld;
    let anzahlGleicherWertRechts = 0;
    let anzahlGleicherWertLinks = 0;
    gewinnerFelder[3] = feld;
    for (let i = 0; i < 3; i++) {
        feld += 1;
        if (row + i < 8) {
            if (alleFelder[feld].value === spieler) {
                gewinnerFelder[anzahlGleicherWertRechts] = feld;
                anzahlGleicherWertRechts += 1;
                if (anzahlGleicherWertRechts === 3) {
                    derGewinner(spieler);
                    blockiereFelder();
                } else {
                    continue;
                }
            }
        }
    }
    feld = startfeld;
    for (let i = 0; i < 3; i++) {
        feld -= 1;
        if (alleFelder[feld].value === spieler) {
            anzahlGleicherWertLinks += 1;
            gewinnerFelder[anzahlGleicherWertRechts + anzahlGleicherWertLinks - 1] = feld;
            if (anzahlGleicherWertLinks + anzahlGleicherWertRechts >= 3) {
                derGewinner(spieler);
                blockiereFelder();
            } else {
                continue;
            }
        }
        break;
    }
    anzahlGleicherWertRechts = 0;
    anzahlGleicherWertLinks = 0;
    feld = row + 8 * spalte;
    gewinnerFelder[3] = feld;
    for (let i = 0; i < 3; i++) {
        feld += 7;
        if((feld+1) %8 !== 7){
        if (feld < 64) {
            if (alleFelder[feld].value === spieler) {
                anzahlGleicherWertLinks += 1;
                gewinnerFelder[i] = feld;
                if (anzahlGleicherWertLinks >= 3) {
                    derGewinner(spieler);
                    blockiereFelder();
                } else {
                    continue;
                }
            }
        }
    } else{
        break;
    }
    }
    feld = row + 8 * spalte;
    for (let i = 0; i < 3; i++) {
        feld -= 7;
        if((feld+1)%8 !== 0){
        if (feld >= 0) {
            if (alleFelder[feld].value === spieler) {
                anzahlGleicherWertRechts += 1;
                gewinnerFelder[anzahlGleicherWertRechts + anzahlGleicherWertLinks - 1] = feld;
                if (anzahlGleicherWertRechts + anzahlGleicherWertLinks >= 3) {
                    derGewinner(spieler);
                    blockiereFelder();
                } else {
                    continue;
                }
            }
        }
    }else{
        break;
    }
        break;
    }
    anzahlGleicherWertRechts = 0;
    anzahlGleicherWertLinks = 0;
    feld = row + 8 * spalte;
    gewinnerFelder[3] = feld;
    for (let i = 0; i < 3; i++) {
        feld += 9;
        if((feld+1) %8 !== 7){
        if (feld < 64) {
            if (alleFelder[feld].value === spieler) {
                console.log("gleicher Wert rechts:" + anzahlGleicherWertLinks);
                anzahlGleicherWertLinks += 1;
                gewinnerFelder[i] = feld;
                if (anzahlGleicherWertLinks >= 3) {
                    derGewinner(spieler);
                    blockiereFelder();
                } else {
                    continue;
                }
            }
        }
    } else{
        break;
    }
    }
    feld = row + 8 * spalte;
    for (let i = 0; i < 3; i++) {
        feld -= 9;
        if((feld+1)%8 !== 0){
        if (feld >= 0) {
            if (alleFelder[feld].value === spieler) {
                anzahlGleicherWertRechts += 1;
                gewinnerFelder[anzahlGleicherWertRechts + anzahlGleicherWertLinks - 1] = feld;
                if (anzahlGleicherWertRechts + anzahlGleicherWertLinks >= 3) {
                    derGewinner(spieler);
                    blockiereFelder();
                } else {
                    continue;
                }
            }
        }
    }else{
        break;
    }
        break;
    }
}
function derGewinner(gewinner) {
    let alleFelder = document.querySelectorAll("input");
    let gewinnerFeld = document.getElementById("gewinnerFeld");
    let punkteRotFeld = document.getElementById("punkteRot");
    let punkteGelbFeld = document.getElementById("punkteGelb");
    switch (gewinner) {
        case "X":
            punkteRot++;
            gewinnerFeld.textContent = "Der Gewinner ist: Rot";
            punkteRotFeld.textContent = "Punkte Rot: " + punkteRot;
            break;
        case "O":
            punkteGelb++;
            gewinnerFeld.textContent = "Der Gewinner ist: Gelb";
            punkteGelbFeld.textContent = "Punkte Gelb: " + punkteGelb;
            break;
    }
    for (let i = 0; i < gewinnerFelder.length; i++) {
        alleFelder[gewinnerFelder[i]].classList.add("animation");
    }
}
function blockiereFelder() {
    let alleInputs = document.querySelectorAll("input");
    for (let i = 0; i < 8; i++) {
        alleInputs[i].disabled = true;
    }
}
function resetFeld() {
    let alleFelder = document.querySelectorAll("input");
    let alleInputs = document.querySelectorAll("input");
    for (let i = 0; i < alleFelder.length; i++) {
        alleInputs[i].disabled = false;
        alleFelder[i].value = "";
        alleFelder[i].classList.remove("backgroundS1");
        alleFelder[i].classList.remove("backgroundS2");
        alleFelder[i].classList.remove("animation");
    }
    let gewinnerFeld = document.getElementById("gewinnerFeld");
    gewinnerFeld.textContent = "Der Gewinner ist: ";
    let resetButton = document.getElementById("resetFeld");
    resetButton.value = "Reset";
}