const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const sec = document.getElementsByClassName("second")[0];

let isPlay = false;
let secondCounter = 0;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () => {
    if (!isPlay) {
        playButton.innerHTML = 'Pause';
        second = setInterval(() => {
            sec.innerHTML = `${secondCounter++}`;
        }, 1000)
        isPlay = true;
    } else {
        playButton.innerHTML = 'Play';
        clearInterval(second);
        isPlay = false;
    }

    toggleButton();
}


const reset = () => {
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
}

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset)