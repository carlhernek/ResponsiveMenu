let halfScreen = Math.floor(window.innerWidth/2);
let meme = document.getElementById("meme");


console.log(meme);

function touchCoordinates(event) {
    let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    meme.innerHTML = x + ", " + y;
}
