var bodyFontSize = 16; // Define the body font-size of your browser

var d; // Define the ruler itself first


window.onload = function() { //... now the DOM is ready:

    d = document.createElement('div'); // Create a the ruler div

    d.classList.add('widthCalculator'); // Add a class to the element, so we can target it with CSS

    document.body.appendChild(d); // Now attach it to the document body

    function toEms(width) { // A simple function to convert to ems
        d.innerHTML = Math.round(width / bodyFontSize) + 'em'; // Set the text of the ruler to the width
    }


    var width = document.body.offsetWidth; // Grab the document width

    toEms(width); // Now actually set the text of the ruler

    window.onresize = function() { // Setup a function on the resize event so it updates as you scale the browser
        width = document.body.offsetWidth;
        toEms(width);
    };
};