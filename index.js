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
