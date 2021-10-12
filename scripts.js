

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play()
  key.classList.add('playing')

}

function removeTrans(e) {
  // console.log(e.propertyName);
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing")
}

// to remove the border added to the key button after it has been added to it
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTrans))
window.addEventListener('keydown', playSound)