let kuvat = ["meloni.png", "bäärynä.png", "kirsikka.png", "omppu.png", "7.png"];
let rahamaara = 100;
let panosmaara = 0;

lukko1 = false;
lukko2 = false;
lukko3 = false;
lukko4 = false;

let pelinVoitto = false;

document.getElementById("rahaa").textContent = rahamaara;
document.getElementById("panos").textContent = panosmaara;

document.getElementById("kuva1").innerHTML = `<img src="grafiikat/${kuvat[0]}" alt="">`;
document.getElementById("kuva2").innerHTML = `<img src="grafiikat/${kuvat[1]}" alt="">`;
document.getElementById("kuva3").innerHTML = `<img src="grafiikat/${kuvat[2]}" alt="">`;
document.getElementById("kuva4").innerHTML = `<img src="grafiikat/${kuvat[3]}" alt="">`;


function sattuma() {
    return Math.floor(Math.random() * 5) + 1;
}

function haku(id) {
    return document.getElementById(id);
}

function tarkistus() {
    if (panosmaara == 0) {
        alert("Panos ei voi olla 0.");
        return;
    } else if (rahamaara >= panosmaara) {
        pelaa();
    } else {
        alert("Mene töihin.");
        return;
    }
}
function lukitse1() {
    if (pelinVoitto === true) {
        alert("Rullia ei voi lukita jos voitit viime kierroskella!")
    } else {
        lukko1 = true;
    }
}
function lukitse2() {
    if (pelinVoitto === true) {
        alert("Rullia ei voi lukita jos voitit viime kierroskella!")
    } else {
        lukko2 = true;
    }
}
function lukitse3() {
    if (pelinVoitto === true) {
        alert("Rullia ei voi lukita jos voitit viime kierroskella!")
    } else {
        lukko3 = true;
    }
}
function lukitse4() {
    if (pelinVoitto === true) {
        alert("Rullia ei voi lukita jos voitit viime kierroskella!")
    } else {
        lukko4 = true;
    }
}


function pelaa() {



    const slot1 = haku('kuva1');
    const slot2 = haku('kuva2');
    const slot3 = haku('kuva3');
    const slot4 = haku("kuva4")

    const num1 = sattuma();
    const num2 = sattuma();
    const num3 = sattuma();
    const num4 = sattuma();

    if (lukko1 === true) {

    } else {
        slot1.innerHTML = `<img src="grafiikat/${kuvat[num1 - 1]}" alt="">`;
    }
    if (lukko2 === true) {

    } else {
        slot2.innerHTML = `<img src="grafiikat/${kuvat[num2 - 1]}" alt="">`;
    }
    if (lukko3 === true) {

    } else {
        slot3.innerHTML = `<img src="grafiikat/${kuvat[num3 - 1]}" alt="">`;
    }
    if (lukko4 === true) {

    } else {
        slot4.innerHTML = `<img src="grafiikat/${kuvat[num4 - 1]}" alt="">`;
    }

    if (lukko1 === true && lukko2 === true && lukko3 === true && lukko4 === true) {
        alert("Kaikkia kuvia ei voi lukita samaan aikaan!")
        lukko1 = false;
        lukko2 = false;
        lukko3 = false;
        lukko4 = false;
        return;
    }
    voitonTarkistus();

    lukko1 = false;
    lukko2 = false;
    lukko3 = false;
    lukko4 = false;

}

function nollaus() {
    let nolla = 0;
    document.getElementById("panos").innerHTML = nolla;
    panosmaara = 0;

}
function lisaaPanos1() {
    let panos = document.getElementById("panos")
    panosmaara = panosmaara + 1;
    panos.textContent = panosmaara;

}
function lisaaPanos2() {
    let panos = document.getElementById("panos")
    panosmaara = panosmaara + 2;
    panos.textContent = panosmaara;

}
function lisaaPanos3() {
    let panos = document.getElementById("panos")
    panosmaara = panosmaara + 3;
    panos.textContent = panosmaara;

}
function voitonTarkistus() {
    const slot1 = haku('kuva1').querySelector('img').src;
    const slot2 = haku('kuva2').querySelector('img').src;
    const slot3 = haku('kuva3').querySelector('img').src;
    const slot4 = haku('kuva4').querySelector('img').src;

    let voitto = 0;

    if (slot1.includes('meloni.png') && slot2.includes('meloni.png') && slot3.includes('meloni.png') && slot4.includes('meloni.png')) {
        voitto = panosmaara * 5;
        rahamaara += voitto;
        pelinVoitto = true;
    } else if (slot1.includes('bäärynä.png') && slot2.includes('bäärynä.png') && slot3.includes('bäärynä.png') && slot4.includes('bäärynä.png')) {
        voitto = panosmaara * 4;
        rahamaara += voitto;
        pelinVoitto = true;
    } else if (slot1.includes('kirsikka.png') && slot2.includes('kirsikka.png') && slot3.includes('kirsikka.png') && slot4.includes('kirsikka.png')) {
        voitto = panosmaara * 3;
        rahamaara += voitto;
        pelinVoitto = true;
    } else if (slot1.includes('omppu.png') && slot2.includes('omppu.png') && slot3.includes('omppu.png') && slot4.includes('omppu.png')) {
        voitto = panosmaara * 6;
        rahamaara += voitto;
        pelinVoitto = true;
    } else if (slot1.includes('7.png') && slot2.includes('7.png') && slot3.includes('7.png') && slot4.includes('7.png')) {
        voitto = panosmaara * 10;
        rahamaara += voitto;
        pelinVoitto = true;
    } else if ((slot1.includes('7.png') && slot2.includes('7.png') && slot3.includes('7.png')) || (slot2.includes('7.png') && slot3.includes('7.png') && slot4.includes('7.png')) || (slot1.includes('7.png') && slot3.includes('7.png') && slot4.includes('7.png')) || (slot1.includes('7.png') && slot2.includes('7.png') && slot4.includes('7.png'))) {
        voitto = panosmaara * 5;
        rahamaara += voitto;
        pelinVoitto = true;
    } else {
        rahamaara -= panosmaara;
        pelinVoitto = false;
    }

    document.getElementById('rahaa').textContent = rahamaara;
}



