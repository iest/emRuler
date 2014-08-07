if (document.querySelector('.emRuler')) {
    var oldEmRuler = document.querySelector('.emRuler');
    oldEmRuler.parentNode.removeChild(oldEmRuler);
} else {
    var bodyFontSize = 16; // Define the body font-size of your browser

    var emRuler; // Define the ruler itself first

    emRuler = document.createElement('div'); // Create the ruler div

    emRuler.classList.add('emRuler');

    document.body.appendChild(emRuler); // Now attach it to the document body

    var style =
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

    emRuler.setAttribute('style', style);

    function toEms(width) { // A simple function to convert to ems
        emRuler.innerHTML = Math.round(width / bodyFontSize) + 'em'; // Set the text of the ruler to the width
    }


    var width = document.body.offsetWidth; // Grab the document width

    toEms(width); // Now actually set the text of the ruler

    window.onresize = function() { // Setup a function on the resize event so it updates as you scale the browser
        width = document.body.offsetWidth;
        toEms(width);
    };
}