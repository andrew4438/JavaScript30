
function playSound(e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio) return;  // stops function running if no mapped key
    audio.currentTime = 0;  // resets audio time to zero so it will play from the start whenever the key is pressed
    audio.play();
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return // skip if it's not a transform
    this.classList.remove('playing');
    
};

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Can you add a click event to make the sound?