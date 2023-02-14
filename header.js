//Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins. Šios funkcijos tikslas - į app.innerHTML pridėti (t.y. +=) header'io kodą (pasirašykite standartinį HTML su inline CSS). Šį modulį importuokite į pagrindinį file'ą ir paduokite app, kuris bus document.body. Taip, puslapio viršuje turėtų atsivaizduoti header'is, kuris importuotas iš header.js.

export default function addHeader(app) {
    app.innerHTML += "<header></header>";
    const header = document.querySelector("header");
    header.style.height = "4vh";
    header.style.backgroundColor = "aliceBlue"
    header.textContent = "Header";
}