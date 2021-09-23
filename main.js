import { doGoodMap } from './goodMap.js';
import { doGoodMapTwo } from './goodMapTwo.js';

const goodMap = doGoodMap();
const goodMapTwo = doGoodMapTwo();

const start = document.getElementById("start")
const textBord = document.getElementById("text-p");

const thunder = new Audio();
thunder.src = "sounds/thunder.mp3";

start.addEventListener("click", () => {
    let timeOut;
    thunder.pause();
    thunder.currentTime = 0;
    thunder.play();
    clearTimeout(timeOut);
    document.body.style.backgroundColor = "rgb(39, 123, 160)";
    timeOut = setTimeout(
        () => (document.body.style.backgroundColor = "rgb(53, 82, 94)"),
        500
    );
    let x = 0;
    let len = Math.floor(Math.random() * 50) + 25;
    let sentence = [];
    let word =
        Object.keys(goodMap)[
            Math.floor(Math.random() * Object.keys(goodMap).length)
        ];
    let newWord = word.split(" ");
    sentence.push(newWord[0]);
    sentence.push(newWord[1]);
    while (x < len) {
        let size = Math.random() * 100;
        if (size > 12) {
            word =
                goodMap[
                    sentence[sentence.length - 2] +
                        " " +
                        sentence[sentence.length - 1]
                ][
                    Math.floor(
                        Math.random() *
                            goodMap[
                                sentence[sentence.length - 2] +
                                    " " +
                                    sentence[sentence.length - 1]
                            ].length
                    )
                ];
        } else {
            word =
                goodMapTwo[sentence[sentence.length - 1]][
                    Math.floor(
                        Math.random() *
                            goodMapTwo[sentence[sentence.length - 1]].length
                    )
                ];
            console.log(word);
        }
        sentence.push(word);
        x++;
    }
    let goodSentence = "";
    sentence.forEach((oneWord) => {
        goodSentence += oneWord + " ";
    });
    textBord.innerHTML = goodSentence;
});