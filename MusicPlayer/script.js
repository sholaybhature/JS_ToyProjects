var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


window.addEventListener('keydown',function(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
    setTimeout(function(){
        key.classList.remove('playing');
    },2000);
});




