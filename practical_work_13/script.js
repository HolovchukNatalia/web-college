document.getElementById('start').addEventListener('click', function() {
    var level = document.getElementById('level').value;
    var color = document.getElementById('color').value;
    if (level === 'choice' || color === 'choice') {
        alert('Please вибери difficulty і color обов`язково!');
        return;
    }
    
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('player').style.display = 'block';

    var score = 0;
    var timeLeft = 0;
    var timerId;
    var difficultyLevels = {
        'Lazy': { timeLeft: 7, playerMoveRadius: 50, playerRadius: 30},
        'Medium': { timeLeft: 3, playerMoveRadius: 75, playerRadius: 20},
        'Impossible': { timeLeft: 1, playerMoveRadius: 100, playerRadius: 15}
    };
    
    var playerIcons = document.querySelectorAll('.player-icon');
    for (var i = 0; i < playerIcons.length; i++) {
        playerIcons[i].style.display = 'none';
    }
    
    document.querySelector('.player-icon.' + color).style.display = 'block';
    
    var playerRadius = difficultyLevels[level].playerRadius;
    var playerMoveRadius = difficultyLevels[level].playerMoveRadius;
    timeLeft = difficultyLevels[level].timeLeft;

    document.getElementById('score').innerHTML = score;
    document.getElementById('time').innerHTML = timeLeft + ' sec';

    function countdown() {
        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert("Ти не встиг((   рахунок: " + score);
            document.getElementById('game').style.display = 'none';
            document.getElementById('player').style.display = 'none';
            document.getElementById('menu').style.display = 'block';
        } else {
            document.getElementById('time').innerHTML = timeLeft + ' sec';
            timeLeft--;
        }
    }

    timerId = setInterval(countdown, 1000);
    document.getElementById('player').addEventListener('click', function() {
        score++;
        document.getElementById('score').innerHTML = score;
        var newX = Math.random() * (window.innerWidth - 2 * playerMoveRadius);
        var newY = Math.random() * (window.innerHeight - 2 * playerMoveRadius);

        // це щоб гравець не виходив за меежі екрану
        var maxX = window.innerWidth - 2 * playerMoveRadius;
        var maxY = window.innerHeight - 2 * playerMoveRadius;
        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));
        
        document.getElementById('player').style.left = newX + 'px';
        document.getElementById('player').style.top = newY + 'px';

        timeLeft = 0;
        timeLeft = difficultyLevels[level].timeLeft;
    });

    document.getElementById('player').style.width = 2 * playerRadius + 'px';
    document.getElementById('player').style.height = 2 * playerRadius + 'px';
});

