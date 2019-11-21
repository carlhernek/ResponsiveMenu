let halfScreen = Math.floor(window.innerWidth/2);
let memes = document.getElementById("memes");

function touchCoordinates(event) {
    let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    memes.innerHTML = " " + x + " " + y;
}
