window.onload = function(){
    let video = document.getElementById("myVideo");

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", function () {
        video.play();
    });

    let pauseBtn = document.getElementById("pauseBtn");
    pauseBtn.addEventListener("click", function () {
        video.pause();
    });    

    let freezeBtn = document.getElementById("mousedown", function () {
        video.pause();
    });
    freezeBtn.addEventListener("mouseup", function () {
        video.play();
    });
};

let seekBar = document.getElementById("seekBar");
seekBar.addEventListener("change", function() {
    let time = video.duration * (seekBar.value / 100); 
    video.currentTime = time; 
});
video.addEventListener("timeupdate", function() {
    let value = (100 /video.duration) * video.currentTome;
    seekBar.value = value;
});   