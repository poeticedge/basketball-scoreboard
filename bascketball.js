let count = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function homeIncrement () {
    count += 1
    homeScore.textContent = count
}

function guestIncrement () {
    count += 1
    guestScore.textContent = count
}