window.onload = function(){
    var img = document.getElementById("bored");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio('fart2.mp3');

    // mouseclick event
    img.addEventListener("mousedown", function(){
        increaseScore();
        img.src = 'smile.png';
        audio.play();
    });
    
    img.addEventListener("mouseup", function(){
        img.src = 'bored.png';
        audio.play();
    });

    // touch event
    img.addEventListener("touchstart", function(){
        increaseScore();
        img.src = 'smile.png';
        audio.play();
    });

    img.addEventListener("touchmove", function(){
        img.src = 'bored.png';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}