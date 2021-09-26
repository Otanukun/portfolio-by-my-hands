var backVideo = document.getElementById('backVideo');
var playbtn = document.getElementById('playbtn');
var icon = document.getElementById('icon');


playbtn.onclick = () =>
{
    backVideo.style.display = "block";
        if(backVideo.paused)
        {
            backVideo.play();
            icon.src = "assets/pause.png";
        }
        else
        {
            backVideo.pause();
            icon.src = "assets/play.png";
        }
}


