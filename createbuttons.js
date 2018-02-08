
const initialbuttons = ["agenda", "shuttles", "publishers", "conference_rooms"];
const maincontainer = document.getElementsByClassName('hub-container')[0];
function createbuttons(buttonsarray) {
    var adder = 0;
    buttonsarray.forEach(function (btn) {
        var divider = document.createElement("DIV");
        divider.setAttribute("class", "divider");
        if (adder == 0) {
            maincontainer.appendChild(divider);
        }
        var myclass = adder == 0 ? 'tile clickable left-tile' : adder % 2 == 0 ? 'tile clickable left-tile' : 'tile clickable right-tile';
        // tile container
        var newdiv = document.createElement("DIV");
        newdiv.setAttribute("id", adder + "-" + adder);
        newdiv.setAttribute("class", myclass);
        newdiv.setAttribute("ondrop", "drop(event)");
        newdiv.setAttribute("ondragover", "allowDrop(event)");
        // tile content
        var newcontent = document.createElement("DIV");
        newcontent.setAttribute("id", adder);
        newcontent.setAttribute("draggable", "true");
        newcontent.setAttribute("ondragstart", "drag(event)");
        newcontent.setAttribute("ondragover", "allowDrop(event)");
        newcontent.setAttribute("ondrop", "drop1(event)");
        var divimg = document.createElement("DIV");
        divimg.setAttribute("class", "tile-img-div");
        var iclass = tiles[btn].img;
        var fa = document.createElement("i");
        fa.setAttribute("class", iclass + " iconblue");
        divimg.appendChild(fa);
        var text = document.createElement("DIV");
        text.setAttribute("class", "tile-text-div");
        text.appendChild(document.createTextNode(tiles[btn].text));
        newcontent.appendChild(divimg);
        newcontent.appendChild(text);
        newdiv.appendChild(newcontent);
        maincontainer.appendChild(newdiv);
        if (adder != 0 && adder % 2 != 0) {
            maincontainer.appendChild(divider);
        }
        adder++;

    }, this);
}




