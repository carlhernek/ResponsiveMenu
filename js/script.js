let hmbgMenu = document.getElementById("hamburger");
let drpdMenu = document.getElementById("dropdown");
let halfScreen = Math.floor(window.innerWidth/2);

function touchCoordinates(event) {
    let x = event.touches[0].clientX;
    // let y = event.touches[0].clientY;
    if (x < halfScreen) { 
        drpdMenu.classList.remove("dropdown-center");
        drpdMenu.classList.remove("dropdown-right");
        drpdMenu.classList.add("dropdown-left");
        hmbgMenu.classList.remove("hamburger-center");
        hmbgMenu.classList.remove("hamburger-right");
        hmbgMenu.classList.add("hamburger-left");
    };
    if (x > halfScreen) { 
        hmbgMenu.classList.remove("hamburger-center");
        hmbgMenu.classList.remove("hamburger-left");
        hmbgMenu.classList.add("hamburger-right");
        drpdMenu.classList.remove("dropdown-center");
        drpdMenu.classList.remove("dropdown-left");
        drpdMenu.classList.add("dropdown-right");
    };
};

let eOne = 1;

hmbgMenu.onclick = function() {

    switch(eOne) {

    case 1:
        drpdMenu.style.opacity = "1";
        drpdMenu.style.height = "35vh";
        eOne = 2
        break;
    
    case 2:
        drpdMenu.style.opacity = "0";
        drpdMenu.style.height = "0vh";
        eOne = 1
        break;
    }
}
