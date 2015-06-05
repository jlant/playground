/* The other JavaScript Events
OnAbort - Called when a page load is interrupted
OnError - Called when an error occurs during page load
OnKeyDown - When key is pressed but not released
OnKeyUp - When key is released
OnMouseUp - When mouse button is released
OnReset - When reset button is clicked
OnSelect - When text is selected
OnSubmit - When submit button is clicked
OnUnload - When user leaves a page
*/

alert("Yes it is working")

document.write("hello from javascript")


var mie = (navigator.appName == "Microsoft Internet Explorer") ? true : false;

if (!mie)
{
    document.captureEvents(Event.MOUSEMOVE);
    document.captureEvents(Event.MOUSEDOWN);
}

document.onmousemove = mousePos;
document.onkeypress = keyPressed;
document.onmousedown = mouseClicked;

var mouseClick = 0;
var keyClicked = 0;
var mouseX = 0;
var mouseY = 0;


function count_rabbits() {
    for(var i=1; i<=3; i++) {
        alert("Rabbit "+i+" out of the hat!")
    }
}

function changeImage()
{
    document.getElementById("einstein").style.height="35%";
    document.getElementById("einstein").style.width="35%";
    return true;
}

function changeColor()
{
    document.getElementById("h3style").style.color="red";
    document.getElementById("h3style").firstChild.nodeValue="Excited";
    return true;
}

function changeAgain()
{
    document.getElementById("h3style").style.color="gray";
    document.getElementById("h3style").firstChild.nodeValue="Bored";
    return true;
}

function alertme()
{
    alertmsg = document.einstein.src + "\nHeight: " + document.einstein.height + "\nWidth: " + document.einstein.width;
    alert(alertmsg);
    return true;
}

function showPara()
{
    document.getElementById("first").style.visibility=(document.formex.firstpara.checked) ? "visible" : "hidden";
    document.getElementById("second").style.visibility=(document.formex.secondpara.checked) ? "visible" : "hidden";
    document.getElementById("third").style.visibility=(document.formex.thirdpara.checked) ? "visible" : "hidden";
    return true;
}

function mousePos(e)
{
    if (!mie)
    {
        mouseX = e.pageX;
        mouseY = e.pageY;
    }
    else
    {
        mouseX = event.clientX + document.body.scrollLeft;
        mouseY = event.clientY + document.body.scrollTop;
    }

    document.formex.mousex.value = mouseX;
    document.formex.mousey.value = mouseY;
    
    return true;    
}

function keyPressed(e)
{
    if (mie)
    {
        e = window.event;
        keyClicked = e.keyCode;
    }
    else
    {
        keyClicked = String.fromCharCode(e.charCode);
    }

    if (!keyClicked)
    {
        return false;
    }

    document.formex.keypress.value = keyClicked;
    return true;
}

function mouseClicked(e)
{
    if (mie)
    {
        switch(event.button)
        {
            case 0:
                document.formex.mousebutton.value = "Left";
                break;
            case 1:
                document.formex.mousebutton.value = "Middle";
                break;
            default:
                document.formex.mousebutton.value = "Right";
                break;
        }
        return false;
    }
    else
    {
        switch(e.which)
        {
            case 1:
                document.formex.mousebutton.value = "Left";
                break;
            case 2:
                document.formex.mousebutton.value = "Middle";
                break;
            default:
                document.formex.mousebutton.value = "Right";
                break;
        }
        return true;
    }
}





