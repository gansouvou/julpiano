
const horloge = document.querySelector(".clock");

horloge.addEventListener('onLoad', time);

function time() {
    let date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    if(heures == 0){h=24;}

     heures = (heures < 10) ? "0" + heures : heures;
     minutes = (minutes < 10) ? "0" + minutes : minutes;
     secondes = (secondes < 10) ? "0" + secondes : secondes;

     let time = `${heures} : ${minutes} : ${secondes}`

     horloge.innerText = time;
}

setInterval(time, 1000);





const pianokeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");


let allkeys = [];
let audio = new Audio("./audios/a.wav"); //("tunes/a.wav");  // par defaut, audio src est "a" tune

const playTune = (key) => {
    audio.src = `audios/${key}.wav`;
    audio.play(); 
     
    // enfoncer la touche à l'appui
    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    
    // desenfoncer
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 20);

}

pianokeys.forEach(key => {
    allkeys.push(key.dataset.key); // add data-key value to the allkeys array
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKey = () => {
    pianokeys.forEach(key => {
        key.classList.toggle("hide")
    });
}

const pressedkey = (e) => {
    if(allkeys.includes(e.key)){
        playTune(e.key);
    }
}

keysCheckbox.addEventListener("click", showHideKey);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);