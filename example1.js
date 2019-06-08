var redButton = true;

var enableRedButton = function() {
    console.log("RED BUTTON ON!")
    // Enable the handler for the red button.
    redButton = true;
};

var disableRedButton = function() {
    console.log("RED BUTTON OFF!")
    // Delete the handler for the red button.
    redButton = false;
};

var moveButton = function() {
    if (redButton) {
        // Move the button
        $(this).css({
                      left:(Math.random()*200)+"px",
                      top:(Math.random()*200)+"px",
                  });
        // Disable the moving button
        disableRedButton();
        // Re-enable the moving button in 0.5 seconds
        setTimeout(enableRedButton, 500);
    }
};

var autoUpdateFromColorPicker = function() {
    document.body.style.backgroundColor = document.getElementById("myColor").value;
}

$(document).ready(function(){
    $("#specialButton").on({
        mouseover: moveButton
    });

    $("#myColor").on({
        change: autoUpdateFromColorPicker
    })
    enableRedButton();

      $(document).keydown(function(e) {
    switch(e.which) {

        case 38: // up
        setBackground('red');
        break;

        case 40: // down
        setBackground('blue')
        break;

        case 39: // right
        setBackground('yellow')
        break;

        case 37: // left
        setBackground('green')
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


});