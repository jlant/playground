console.log("hello there")

$(document).ready(function() {

    $("#getData").click(function() {

        $.getJSON("/somedata", function(dat) {
            console.log("Ajax received data!");
            console.dir(dat);
        });
    });
});
