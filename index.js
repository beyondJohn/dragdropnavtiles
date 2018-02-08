function donotallowDrop(ev) {
    console.log('not allowed');
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    console.log(ev.target);
    ev.dataTransfer.setData("text", ev.target.id);
}
var droppedonimage = false;
function drop(ev) {
    ev.preventDefault();
    if (!droppedonimage) {
        // if dropped in tile but not on existing content
        console.log("dropped in tile but not on existing content: ", ev.path[2].id);
        if (ev.path[2].id == '') {
            console.log("backup data: ", ev.path[0].id);
        }
        var data = ev.dataTransfer.getData("text");
        var data1 = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}
function drop1(ev) {
    // else if dropped on image or text in tile
    droppedonimage = true;
    console.log("dropped on image or text in tile: ", ev.path[3].id);
}
var initialbuttons = ["agenda", "shuttles", "publishers", "conference_rooms"];
(function () {
    var maincontainer = document.getElementsByClassName('hub-container')[0];
    var adder = 0;
    initialbuttons.forEach(function (btn) {
        var divider = document.createElement("DIV");
        divider.setAttribute("class","divider");
        if(adder == 0){
            maincontainer.appendChild(divider);
        }
        var myclass = adder == 0 ? 'tile clickable left-tile' : adder % 2 == 0 ? 'tile clickable left-tile' : 'tile clickable right-tile';
        // tile container
        var newdiv = document.createElement("DIV");
        newdiv.setAttribute("id", adder + "-" + adder);
        newdiv.setAttribute("class", myclass);
        newdiv.setAttribute("ondrop","drop(event)");
        newdiv.setAttribute("ondragover","allowDrop(event)");
        // tile content
        var newcontent = document.createElement("DIV");
        newcontent.setAttribute("id", adder);
        newcontent.setAttribute("draggable", "true");
        newcontent.setAttribute("ondragstart", "drag(event)");
        newcontent.setAttribute("ondragover","allowDrop(event)");
        newcontent.setAttribute("ondrop","drop1(event)");
        var divimg = document.createElement("DIV");
        divimg.setAttribute("class","tile-img-div");
        var iclass = tiles[btn].img;
        var fa = document.createElement("i");
        fa.setAttribute("class", iclass + " iconblue");
        divimg.appendChild(fa);
        var text = document.createElement("DIV");
        text.setAttribute("class","tile-text-div");
        text.appendChild(document.createTextNode(tiles[btn].text));
        newcontent.appendChild(divimg);
        newcontent.appendChild(text);
        newdiv.appendChild(newcontent);
        maincontainer.appendChild(newdiv);
        if(adder !=0 && adder % 2 != 0){
            maincontainer.appendChild(divider);
        }
        adder++;

    }, this);

})()



