let hmbgMenu = document.getElementById("hamburger");
let halfScreen = Math.floor(window.innerWidth/2);

function touchCoordinates(event) {
    let x = event.touches[0].clientX;
    // let y = event.touches[0].clientY;
    if (x < halfScreen) { 
        hmbgMenu.classList.remove("right")
        hmbgMenu.classList.add("left")
    };
    if (x > halfScreen) { 
        hmbgMenu.classList.remove("left")
        hmbgMenu.classList.add("right")
    };
};
