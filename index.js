tablo1 = document.getElementById("sc0re1")
tablo2 = document.getElementById("sc0re2")

let scoretable1 = 0
let scoretable2 = 0

function score1() {
    scoretable1 += 1
    tablo1.textContent = scoretable1
}

function score2() {
    scoretable1 += 2
    tablo1.textContent = scoretable1
}

function score3() {
    scoretable1 += 3
    tablo1.textContent = scoretable1
}

function score11() {
    scoretable2 += 1
    tablo2.textContent = scoretable2
}

function score22() {
    scoretable2 += 2
    tablo2.textContent = scoretable2
}

function score33() {
    scoretable2 += 3
    tablo2.textContent = scoretable2
}

function newgame() {
    scoretable1 = 0
    scoretable2 = 0
    tablo1.textContent = 0
    tablo2.textContent = 0
}