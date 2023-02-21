window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[key="${e.key}"]`)
    const key = document.querySelector(`.key[key="${e.key}"]`)
    if (!audio) return; //não aciona a função
    audio.currentTime = 0 //volta pro início da faixa
    audio.play()
    console.log(key);
    console.log(audio);
})