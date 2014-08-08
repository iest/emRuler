var isVertical = false;

if (document.querySelector('.emRuler')) {
    var oldEmRuler = document.querySelector('.emRuler');
    window.removeEventListener('resize', calculate);
    oldEmRuler.parentNode.removeChild(oldEmRuler);
} else {
    var bodyFontSize = 16; // Define the body font-size of your browser

    var emRuler; // Define the ruler itself first

    emRuler = document.createElement('div'); // Create the ruler div

    emRuler.classList.add('emRuler');

    document.body.appendChild(emRuler); // Now attach it to the document body

    var horizontalStyle =
        "position: fixed;" +
        "z-index: 9999999999;" +
        "bottom: 0;" +
        "left: 0;" +
        "right: 0;" +
        "background: #1abc9c;" +
        "border-top: 1px solid rgba(255,255,255,0.5);" +
        "color: #34495e;" +
        "padding: 0.5em;" +
        "text-align: center;" +
        "font-family: 'Futura'";

    var verticalStyle =
        "position: fixed;" +
        "z-index: 9999999999;" +
        "right: 0;" +
        "top: 0;" +
        "bottom: 0;" +
        "background: #1abc9c;" +
        "border-left: 1px solid rgba(255,255,255,0.5);" +
        "color: #34495e;" +
        "padding: 0.5em;" +
        "text-align: center;" +
        "font-family: 'Futura'";

    emRuler.setAttribute('style', horizontalStyle);

    var width = window.innerWidth; // Grab the viewport width
    var height = window.innerHeight; // Grab the viewport height

    setText(width); // Now actually set the text of the ruler

    window.addEventListener('resize', calculate);

    emRuler.addEventListener('click', function() {
        if (isVertical) {
            isVertical = false;
            emRuler.setAttribute('style', horizontalStyle);
        } else {
            isVertical = true;
            emRuler.setAttribute('style', verticalStyle);
        }
        calculate();
    });
}


function setText(pixels) { // A simple function to convert to ems
    emRuler.innerHTML = Math.round(pixels / bodyFontSize) + 'em';
}

function calculate() { // Setup a function on the resize event so it updates as you scale the browser
    width = window.innerWidth; // Grab the viewport width
    height = window.innerHeight; // Grab the viewport height
    if (isVertical) {
        setText(height);
    } else {
        setText(width);
    }
}