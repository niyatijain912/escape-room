let currentRiddle = {};


async function loadPuzzle(fileName) {
    try {
        const response = await fetch(fileName); 
        const riddles = await response.json();
        
        const randomIndex = Math.floor(Math.random() * riddles.length);
        currentRiddle = riddles[randomIndex];

        document.getElementById("riddle-text").innerText = currentRiddle.question;
    } catch (error) {
        console.error("Error loading " + fileName, error);
    }
}



window.onload = function() {
    if (window.location.pathname.includes("puzzle1.html")) loadPuzzle('riddles.json');
    else if (window.location.pathname.includes("puzzle2.html")) loadPuzzle('riddles1.json');
    else if (window.location.pathname.includes("puzzle3.html")) loadPuzzle('riddles2.json');
};
function checkPuzzle1()
{
    let ans = document.getElementById("p1answer").value.toLowerCase().trim();
    
    
    if (ans === currentRiddle.answer.toLowerCase()) {
        window.location.href = "puzzle2.html";
    } else {
        document.getElementById("message").innerText = "Wrong answer. Try again.";
}
}

function checkPuzzle2() {
    let ans = document.getElementById("p2answer").value.toLowerCase().trim();
    if (ans === currentRiddle.answer.toLowerCase()) {
        window.location.href = "puzzle3.html";
    } else {
        document.getElementById("message").innerText = "Incorrect sequence. Try again.";
    }
}
function checkPuzzle3() {
    let ans = document.getElementById("p3answer").value.toLowerCase().trim();
    
    if (ans === currentRiddle.answer.toLowerCase()) {
        window.location.href = "win.html";
    } else {
        document.getElementById("message").innerText = "Wrong answer. Try again.";
    }
}


